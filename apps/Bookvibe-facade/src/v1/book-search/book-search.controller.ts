import { Controller, Get, Param, Query } from '@nestjs/common';
import { BookSearchService } from './book-search.service';
import { Observable } from 'rxjs';
import { IdParam, NamePageParam } from './dto/validators';
import { BookVibeVolumeDto } from '@bookvibe/shared';

@Controller('books')
export class BookSearchController {
  constructor(private readonly booksService: BookSearchService) {
  }

  @Get("/search")
  searchBooks(@Query() { name, page }: NamePageParam): Observable<BookVibeVolumeDto[]> {
    console.log(`Log call: /search ${name} ${page}`);
    return this.booksService.searchBooksByName(name, page ?? 1);
  }

  @Get('/search/:id')
  searchBookByIsbn(@Param() { id }: IdParam): Observable<BookVibeVolumeDto> {
    console.log(`Log call: /search/:id ${id}`);
    return this.booksService.searchBookById(id);
  }
}
