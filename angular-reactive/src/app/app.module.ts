import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { FormsModule } from '@angular/forms';
import { QuoteReactiveService } from './quote-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    QuoteReactiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
