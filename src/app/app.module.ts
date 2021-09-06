import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApiService } from './services/mock-api/mock-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ToolbarModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockApiService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
