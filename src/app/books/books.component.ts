import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  headerText = 'List of Available Books';
  book1 = '/assets/book1.png';
  book2 = '/assets/book2.png';
  book3 = '/assets/book3.png';
}
