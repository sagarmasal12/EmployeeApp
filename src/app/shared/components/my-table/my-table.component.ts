import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  imports: [],
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent {

  @Input() columnArray: TableColumn [] = [];

  @Input() gridData : any [] = [];

   
  @Output() onEditClicked = new EventEmitter<any>();
  @Output() onDeleteClicked = new EventEmitter<any>();

  onEditBtnClicked(item:any) {
    debugger;
    this.onEditClicked.emit(item);
  }

  onDeleteBtnClicked(item:any) {
    debugger;
    this.onDeleteClicked.emit(item);
  }


}

export interface TableColumn {
  fieldName: string,
  headerName: string,
  dataType?: string
}
