import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ISearchBus, Search } from '../../model/model';
import { SearchService } from '../../service/search.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-search-result',
  imports: [DatePipe,RouterLink],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {

  activatedRoute  = inject(ActivatedRoute);
  searchObj: Search = new Search();
  searchService = inject(SearchService);
  searchData: ISearchBus[] = []

  constructor() {
    this.activatedRoute.params.subscribe((res:any)=>{
      debugger;
      this.searchObj.fromLocationId =  res.from;
      this.searchObj.toLocationId =  res.to;
      this.searchObj.date =  res.date;
      this.getSerachResult();
    })
  }

  getSerachResult() {
    this.searchService.searchBus(this.searchObj.fromLocationId,this.searchObj.toLocationId,this.searchObj.date).subscribe((res:any)=>{
      this.searchData = res;
      debugger;
    })
  }

}
