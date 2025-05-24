import { Observable } from 'rxjs';
import { SearchVolumeListDto, VolumeDto } from '@bookvibe/shared';

export interface BookSearchProvider {
  searchBooksByName(name: string, page: number): Observable<SearchVolumeListDto>;
  searchBookById(id: string): Observable<VolumeDto>;
}
