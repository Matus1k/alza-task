import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, ToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
