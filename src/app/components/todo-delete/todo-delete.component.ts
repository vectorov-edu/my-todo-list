import { Component, OnInit, AfterViewInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';
import { TodoService } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-delete',
	template: '',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit, AfterViewInit {
	private todoId: string;

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
			if(result){
				this.todoService.deleteTodoById(this.todoId).subscribe(
					response => {
						// how to avoid code duplicating
						this.router.navigate(['']);
					},
					error => {
						console.log(error);	
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
