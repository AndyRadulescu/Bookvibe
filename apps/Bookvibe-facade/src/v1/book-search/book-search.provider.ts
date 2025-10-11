import { Observable } from 'rxjs';
import { BookVibeVolumeDto } from '@bookvibe/shared';

export interface BookSearchProvider {
  searchBooksByName(name: string, page: number): Observable<BookVibeVolumeDto[]>;
  searchBookById(id: string): Observable<BookVibeVolumeDto>;
}

export const BOOK_SEARCH_PROVIDER = Symbol('BOOK_SEARCH_PROVIDER');
