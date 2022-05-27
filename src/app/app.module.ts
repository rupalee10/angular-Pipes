import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AboutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
