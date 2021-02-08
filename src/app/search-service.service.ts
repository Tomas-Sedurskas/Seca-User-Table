import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  search$: Observable<string>

  constructor(private http: HttpClient, private store: Store<AppState>) {
    this.search$ = store.select('search');
  }

  searchUsers(res: string) {
    this.http.get<User[]>('http://localhost:5000/', { params: { search: res } })
      .subscribe(response => {
      });
  }
}
