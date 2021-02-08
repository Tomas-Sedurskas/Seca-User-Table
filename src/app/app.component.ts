import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { User } from './user.model';
import { INCREMENT_CHUNK } from './store/chunk.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    window.addEventListener('resize', this.onResize);
  }
  ngAfterViewInit(){
    let table: any = document.getElementById('table');
    table.style.marginTop = this.fixed.nativeElement.offsetHeight + 24 + 'px';
  }
  onResize = () => {
    let table: any = document.getElementById('table');
    table.style.marginTop = this.fixed.nativeElement.offsetHeight + 'px';
  }
  @ViewChild('fixed')
  'fixed': ElementRef;
}
