import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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
