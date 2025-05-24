import { Module } from '@nestjs/common';
import { HttpBookSearchService } from './http-book-search.service';
import { BookSearchService } from './book-search.service';
import { BookSearchController } from './book-search.controller';
import { HttpModule } from '@nestjs/axios';
import { BOOK_SEARCH_PROVIDER, BookSearchProvider } from './book-search.provider';

@Module({
  imports:[HttpModule],
  controllers:[BookSearchController],
  providers:[
    BookSearchService,
    {
      provide: BOOK_SEARCH_PROVIDER,
      useClass: HttpBookSearchService,
    }
  ],
  exports: [BookSearchService]
})
export class BookSearchModule{}
