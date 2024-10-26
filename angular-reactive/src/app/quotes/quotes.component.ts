import { ChangeDetectorRef, Component } from '@angular/core';
import { QuoteReactiveService } from '../quote-service.service';
import { Quote } from '../quote';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component-quotes',
  providers: [QuoteReactiveService],
  templateUrl: './quotes.component.html'
})
export class QuotesComponent {

  quoteArray: Quote[] = [];
  selectedQuote!: Quote;
  mode: string;
  pagination: boolean;
  page: number;
  size: number;

  constructor(private quoteReactiveService: QuoteReactiveService, private cdr: ChangeDetectorRef) {
    this.mode = "reactive";
    this.pagination = true;
    this.page = 0;
    this.size = 50;
  }

  resetData() {
    this.quoteArray = [];
  }

  requestQuoteStream(): void {
    this.resetData();
    let quoteObservable: Observable<Quote>;
    if (this.pagination === true) {
      quoteObservable = this.quoteReactiveService.getQuoteStream(this.page, this.size);
    } else {
      quoteObservable = this.quoteReactiveService.getQuoteStream();
    }
    quoteObservable.subscribe(quote => {
      this.quoteArray.push(quote);
      this.cdr.detectChanges();
    });
  }

  onSelect(quote: Quote): void {
    this.selectedQuote = quote;
  }
}
