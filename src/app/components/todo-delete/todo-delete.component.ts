import { Component, OnInit, AfterViewInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';
import { TodoService } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-delete',
	templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit, AfterViewInit {
	private todoId: string;
	private activeSpinner: boolean = false;

  constructor(
		private dialog: MatDialog,
		private todoService: TodoService,
		private router: Router,
		private activatedRoute: ActivatedRoute) { 
  }

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe(
      params => {
				this.todoId = params.get('id');
      }
    );
	}

	ngAfterViewInit(): void {
		this.openDialog();
	}

	private openDialog() {
		const dialogRef = this.dialog.open(ModalConfirmationComponent, {});

		dialogRef.afterClosed().subscribe(result => {
			this.activeSpinner = true;
			if(result){
				this.todoService.deleteTodoById(this.todoId).subscribe(
					response => {
						// how to avoid code duplicating
						this.router.navigate(['']);
					},
					error => {
						console.log(error);	
					},
					() => {
						this.activeSpinner = false;
					});
			} else {
				// how to avoid code duplicating
				this.router.navigate(['']);
			}
		},
		error => {
			console.log(error);	
		});
	}
}
