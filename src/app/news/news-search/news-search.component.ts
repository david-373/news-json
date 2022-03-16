import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.scss']
})
export class NewsSearchComponent implements OnInit {
  @Output() inputChange = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value
    this.inputChange.emit(parseInt(value))
  }
}
