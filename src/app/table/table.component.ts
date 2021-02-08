import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { INCREMENT_CHUNK, RESET_CHUNK } from '../store/chunk.actions';
import { User } from '../user.model';
import { SearchServiceService } from '../search-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  users: User[] = [];
  chunk$: Observable<number>
  search$: Observable<string>;
  oldSearch:string = '';

  constructor(private http: HttpClient, private store: Store<AppState>, private searchService: SearchServiceService) {
    this.chunk$ = store.select('chunk');
    this.search$ = store.select('search');
  }
 ;
  lazyLoad = () => {
    var target:any = document.getElementById('intersect-marker')
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {  
          this.store.dispatch(INCREMENT_CHUNK());
        }
      })
    });
    io.observe(target);
  }

  ngOnInit() {
    this.chunk$.subscribe(res => {
      this.getUsers(res);
    })
    this.search$.subscribe(res => {
      this.searchUsers(res);
    });
    this.lazyLoad();
  }
  getUsers(res: number) {
    this.http.get<User[]>('https://seca-user-table.herokuapp.com/', { params: { chunk: res.toString(), search: this.oldSearch } })
      .subscribe(response => {
        this.users = [...this.users, ...response];
      });
  }
  searchUsers(res: string) {
    
    let ser = res.search
    this.http.get<User[]>('https://seca-user-table.herokuapp.com/search', { params: { search: ser.toString() } })
      .subscribe(response => {
        this.users = [...response];
      });
  }

}
