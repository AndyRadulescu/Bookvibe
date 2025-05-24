import { Inject, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SearchVolumeListDto, VolumeDto } from '@bookvibe/shared';
import { BOOK_SEARCH_PROVIDER, BookSearchProvider } from './book-search.provider';

@Injectable()
export class BookSearchService {

  constructor(@Inject(BOOK_SEARCH_PROVIDER) private searchProvider: BookSearchProvider) {
  }

  searchBookById(id: string): Observable<SearchVolumeListDto> {
    return this.searchProvider.searchBookById(id);
  }

  searchBooksByName(name: string, page: number): Observable<SearchVolumeListDto> {
    return this.searchProvider.searchBooksByName(name, page);
  }
}
