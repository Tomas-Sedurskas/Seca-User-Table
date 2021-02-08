import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { TableComponent } from './table/table.component';
import { SearchComponent } from './search/search.component';
import { LayoutSwitchComponent } from './layout-switch/layout-switch.component';
import { ColumnSelectorComponent } from './column-selector/column-selector.component';
import { OrderSwitchComponent } from './order-switch/order-switch.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { chunkReducer } from './store/chunk.reducer';
import { searchReducer } from './store/search.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    TableComponent,
    SearchComponent,
    LayoutSwitchComponent,
    ColumnSelectorComponent,
    OrderSwitchComponent,
    TableHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ chunk: chunkReducer, search: searchReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
