import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListAppComponent } from './list-app/list-app.component';
import { OrderPipe } from './order.pipe';
import { StringPipe } from './string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListAppComponent,
    OrderPipe,
    StringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
