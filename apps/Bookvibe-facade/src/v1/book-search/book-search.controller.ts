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
    return this.booksService.searchBooksByName(name, page ?? 1);
  }

  @Get('/:id')
  searchBookByIsbn(@Param() { id }: IdParam): Observable<SearchVolumeListDto> {
    return this.booksService.searchBookById(id);
  }
}
