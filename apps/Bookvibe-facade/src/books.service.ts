import { Injectable } from '@nestjs/common';
import { RabbitMQService } from './publisher/rabbit-mq.service';
import { Observable } from 'rxjs';
import { SearchVolumeListDto } from '@bookvibe/shared';

@Injectable()
export class BooksService {

  constructor(private publisherService: RabbitMQService) {
  }

  getBooksListByName(name: string): Observable<SearchVolumeListDto> {
    return this.publisherService.searchBooksByName(name);
  }

  getBookByIsbn(isbn: string): Observable<SearchVolumeListDto> {
    return this.publisherService.searchBookByIsbn(isbn);
  }
}
