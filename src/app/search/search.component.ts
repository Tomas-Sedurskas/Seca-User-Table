import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { SEARCH } from '../store/search.actions';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search$: Observable<string>

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.search$ = store.select('search');
  }

  searching($event:any){
    this.store.dispatch(SEARCH({search: $event.target.value}));
  }

  ngOnInit() {}

}
