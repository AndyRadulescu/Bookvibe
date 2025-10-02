import { Controller, Get, Param, Query } from '@nestjs/common';
import { BookSearchService } from './book-search.service';
import { Observable } from 'rxjs';
import { SearchVolumeListDto, VolumeDto } from '@bookvibe/shared';
import { IdParam, NamePageParam } from './dto/validators';

@Controller('books')
export class BookSearchController {
  constructor(private readonly booksService: BookSearchService) {
  }

  @Get("/search")
  searchBooks(@Query() { name, page }: NamePageParam): Observable<SearchVolumeListDto> {
    console.log(`Log call: /search ${name} ${page}`);
    return this.booksService.searchBooksByName(name, page ?? 1);
  }

  @Get('/search/:id')
  searchBookByIsbn(@Param() { id }: IdParam): Observable<VolumeDto> {
    console.log(`Log call: /search/:id ${id}`);
    return this.booksService.searchBookById(id);
  }
}
