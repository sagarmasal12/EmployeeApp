import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

export class FilterComponent {
  @Input() columns: ColumnConfig[] = [];
  @Input() gridData: any[] = []; // The data to be filtered
  @Output() filteredData = new EventEmitter<any[]>(); // Emit filtered data 
  filters: { [key: string]: any } = {}; // Keeps track of selected filters

  applyFilter() {
    let filtered = [...this.gridData]; // Start with the full grid data
    for (const fieldName of Object.keys(this.filters)) {
      const filterValue = this.filters[fieldName];
      if (Array.isArray(filterValue)) {
        filtered = filtered.filter(item => filterValue.includes(item[fieldName]));
      } else if (typeof filterValue === 'string' && filterValue.trim() !== '') {
        filtered = filtered.filter(item =>
          item[fieldName]?.toString().toLowerCase().includes(filterValue.toLowerCase())
        );
      }
    }
    this.filteredData.emit(filtered); // Emit the filtered data to the parent
  }
  resetFilter() {
    this.filters = {};
    this.filteredData.emit([...this.gridData]); // Emit original data
  }
  updateDropdownFilter(fieldName: string, option: string, event: any) {
    if (!this.filters[fieldName]) {
      this.filters[fieldName] = [];
    }
    if (event.target.checked) {
      this.filters[fieldName].push(option);
    } else {
      this.filters[fieldName] = this.filters[fieldName].filter((value: string) => value !== option);
    }
  }
}

interface ColumnConfig {
  fieldName: string; // Name of the field to filter
  displayName: string; // Column name to display in the filter
  inputType: 'text' | 'dropdown'; // Type of input
  options?: string[]; // Options for dropdown if inputType is dropdown
}
