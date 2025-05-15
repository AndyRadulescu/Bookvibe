import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Observable } from 'rxjs';
import { SearchVolumeListDto } from '@bookvibe/shared';
import { IsbnParam, NameParam } from './dto/validators';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {
  }

  @Get('search/:name')
  searchBooks(@Param() { name }: NameParam): Observable<SearchVolumeListDto> {
    return this.booksService.getBooksListByName(name);
  }

  @Get('isbn/:isbn')
  searchBookByIsbn(@Param() { isbn }: IsbnParam): Observable<SearchVolumeListDto> {
    return this.booksService.getBookByIsbn(isbn);
  }
}
