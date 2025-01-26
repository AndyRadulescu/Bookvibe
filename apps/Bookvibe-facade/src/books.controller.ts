import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Observable } from 'rxjs';
import { SearchVolumeListDto } from '@bookvibe/shared';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {
  }

  @Get('search/:name')
  searchBooks(@Param() { name }: { name: string }): Observable<SearchVolumeListDto> {
    return this.booksService.getBooksListByName(name);
  }

  // TODO: validation
  @Get('isbn/:isbn')
  searchBookByIsbn(@Param() param: { isbn: string }): Observable<SearchVolumeListDto> {
    return this.booksService.getBookByIsbn(param.isbn);
  }
}
