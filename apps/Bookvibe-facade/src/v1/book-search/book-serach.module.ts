import { Module } from '@nestjs/common';
import { HttpBookSearchService } from './http-book-search.service';
import { BookSearchService } from './book-search.service';
import { BookSearchController } from './book-search.controller';

export const BOOK_SEARCH_PROVIDER = 'BOOK_SEARCH_PROVIDER';

@Module({
  imports:[],
  controllers:[BookSearchController],
  providers:[
    {
      provide: BOOK_SEARCH_PROVIDER,
      useClass: HttpBookSearchService,
      HttpBookSearchService,
      BooksSearchService: BookSearchService,
    },
  ]
})
export class BookSearchModule{}
