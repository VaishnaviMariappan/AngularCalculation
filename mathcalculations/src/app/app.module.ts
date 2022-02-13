import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RectangulartankComponent } from './rectangulartank/rectangulartank.component';
import { TriangleComponent } from './triangle/triangle.component';

@NgModule({
  declarations: [
    AppComponent, TriangleComponent, RectangulartankComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
