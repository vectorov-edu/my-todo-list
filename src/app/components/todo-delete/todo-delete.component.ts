import { Component, OnInit, AfterViewInit, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';
import { TodoService } from 'src/app/services/todo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-delete',
	template: '',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit, AfterViewInit {
	private deletingId: string;

  constructor(
		private dialog: MatDialog,
		private todoService: TodoService,
		private router: Router,
		private activatedRoute: ActivatedRoute) { 
  }

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe(
      params => {
				this.deletingId = params.get('id');
      }
    );

	}

	ngAfterViewInit(): void {
		this.openDialog();
	}

	private openDialog() {
		const dialogRef = this.dialog.open(ModalConfirmationComponent, {});

		dialogRef.afterClosed().subscribe(result => {
			console.log('Dialog result : ');
			console.log(result);	

			if(result){
				debugger;
				this.todoService.deleteTodoBy(this.deletingId).subscribe(x => {
					this.router.navigate(['']);
				});
			}
		}, error => {
			console.log(error);	
		}, () => {
		});
		console.log(dialogRef);
	}
}
