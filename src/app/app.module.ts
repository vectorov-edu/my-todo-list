import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoEntityComponent } from './components/todo-entity/todo-entity.component';
import { TodoEditorComponent } from './components/todo-editor/todo-editor.component';
import { TodoRoutingModule } from './components/todo-routing/todo-routing.module';
import { TodoDeleteComponent } from './components/todo-delete/todo-delete.component';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoEntityComponent,
    TodoEditorComponent,
    TodoDeleteComponent,
    ModalConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [
    ModalConfirmationComponent
  ],
  entryComponents: [
    ModalConfirmationComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
