import { Inject, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SearchVolumeListDto, VolumeDto } from '@bookvibe/shared';
import { BookSearchProvider } from './book-search.provider';
import { BOOK_SEARCH_PROVIDER } from './book-serach.module';
import { name } from 'postcss';

@Injectable()
export class BookSearchService implements BookSearchProvider {

  constructor(@Inject(BOOK_SEARCH_PROVIDER) private searchProvider: BookSearchProvider) {
  }

  searchBookById(id: string): Observable<VolumeDto> {
    return this.searchProvider.searchBookById(id);
  }

  searchBooksByName(name: string, page: number): Observable<SearchVolumeListDto> {
    return this.searchProvider.searchBooksByName(name, page);
  }
}
