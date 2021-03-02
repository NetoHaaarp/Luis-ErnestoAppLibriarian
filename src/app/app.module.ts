import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ExpPipe } from './exp.pipe';
import { TecnologicosComponent } from './tecnologicos/tecnologicos.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ExpPipe,
    TecnologicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
