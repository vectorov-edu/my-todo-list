import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';

@Component({
  selector: 'app-todo-delete',
  templateUrl: './todo-delete.component.html',
  styleUrls: ['./todo-delete.component.css']
})
export class TodoDeleteComponent implements OnInit {

  constructor(private dialog: MatDialog) { 
    debugger;
  }

  ngOnInit() {
    debugger;
    const dialog = this.dialog.open(ModalConfirmationComponent, {});
    console.log(dialog);
  }

}
