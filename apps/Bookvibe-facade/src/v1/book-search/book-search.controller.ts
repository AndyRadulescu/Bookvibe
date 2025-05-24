import { Controller, Get, Param, Query } from '@nestjs/common';
import { BookSearchService } from './book-search.service';
import { Observable } from 'rxjs';
import { SearchVolumeListDto, VolumeDto } from '@bookvibe/shared';
import { IdParam, NameParam } from './dto/validators';

@Controller('books')
export class BookSearchController {
  constructor(private readonly booksService: BookSearchService) {
  }

  @Get()
  searchBooks(@Query() { name }: NameParam, @Query() page: number = 1): Observable<SearchVolumeListDto> {
    return this.booksService.searchBooksByName(name, page);
  }

  @Get('/:id')
  searchBookByIsbn(@Param() { id }: IdParam): Observable<VolumeDto> {
    return this.booksService.searchBookById(id);
  }
}
