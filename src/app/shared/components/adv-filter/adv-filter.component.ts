import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-adv-filter',
  imports: [JsonPipe],
  templateUrl: './adv-filter.component.html',
  styleUrl: './adv-filter.component.css'
})
export class AdvFilterComponent {
 @Input() columnList : Column[] = [];
 @Input() gridData: any[] = [];

 @Output() onFilter = new EventEmitter<any[]>();

 currentSelectedItem: Column = {
  fieldName:''
 };

 asa: Subscription[] = []

 filterObj: any = {};

 onColumnSelect(data: Column) {
  this.currentSelectedItem = data;
 }

 updateFilter(filedName: string,event: any) { 
  this.filterObj = {};
  this.filterObj[filedName] =  event.target.value;
 }

 onApplyFilter() {
  debugger;
  let filteretdData = [];
  for(const fieldName of Object.keys(this.filterObj)) {
    debugger;
    filteretdData = this.gridData.filter(item=>{
      return item[fieldName].toString().toLowerCase() == this.filterObj[fieldName].toLowerCase()
    }) 
  }
  this.onFilter.emit(filteretdData);
  debugger;

 


 }

}


export interface Column {
  fieldName: string,
  header?: string,
  inputType?: string,
  options?:  string[]
}