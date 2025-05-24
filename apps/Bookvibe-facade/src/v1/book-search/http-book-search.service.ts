import { Injectable } from '@nestjs/common';
import { BookSearchProvider } from './book-search.provider';
import { map, Observable } from 'rxjs';
import { SearchVolumeListDto, VolumeDto } from '@bookvibe/shared';
import { HttpService } from '@nestjs/axios';

const ROOT = `http://localhost:8080/worker`
const BOOKS = "books"
const VOLUME = "volume"
@Injectable()
export class HttpBookSearchService implements BookSearchProvider {
  constructor(private readonly httpService: HttpService) {}

  searchBooksByName(name: string, page: number): Observable<SearchVolumeListDto> {
    return this.httpService
      .get<SearchVolumeListDto>(`${ROOT}/${BOOKS}?name=${name}&page=${page}`)
      .pipe(map(res => res.data));
  }

  searchBookById(id: string): Observable<SearchVolumeListDto> {
    return this.httpService
      .get<SearchVolumeListDto>(`${ROOT}/${VOLUME}/${id}`)
      .pipe(map(res => res.data));
  }
}
