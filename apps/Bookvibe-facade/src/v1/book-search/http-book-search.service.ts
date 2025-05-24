import { Injectable } from '@nestjs/common';
import { BookSearchProvider } from './book-search.provider';
import { map, Observable } from 'rxjs';
import { SearchVolumeListDto, VolumeDto } from '@bookvibe/shared';
import { HttpService } from '@nestjs/axios';

const ROOT = "http://localhost:8080/worker/search"
@Injectable()
export class HttpBookSearchService implements BookSearchProvider {
  constructor(private readonly httpService: HttpService) {}

  searchBooksByName(name: string, page: number): Observable<SearchVolumeListDto> {
    return this.httpService
      .get<SearchVolumeListDto>(`${ROOT}?name=${name}&page=${page}`)
      .pipe(map(res => res.data));
  }

  searchBookById(id: string): Observable<VolumeDto> {
    return this.httpService
      .get<VolumeDto>(`${ROOT}?id=${id}`)
      .pipe(map(res => res.data));
  }
}
