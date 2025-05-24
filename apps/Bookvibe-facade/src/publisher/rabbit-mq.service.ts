import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { SearchVolumeListDto } from '@bookvibe/shared';
import { RmqUrl } from '@nestjs/microservices/external/rmq-url.interface';

const localhostConnection = {
  protocol: 'amqp',
  hostname: 'localhost',
  port: 5672,
  username: 'user',
  password: 'password',
  vhost: '/' // Optional, replace with your virtual host
} satisfies RmqUrl;

export class RabbitMQService {
  private searchBook: ClientProxy;
  private isbn: ClientProxy;

  constructor() {
    this.searchBook = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [localhostConnection],
        queue: 'searchBooks',
        queueOptions: { durable: true, autoDelete: false }
      }
    });
    this.isbn = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [localhostConnection],
        queue: 'isbn',
        queueOptions: { durable: true, autoDelete: false }
      }
    });
  }

  searchBooksByName(name: String) {
    if (!name) {
      throw new Error('The "name" parameter is required.');
    }
    return this.searchBook.send<SearchVolumeListDto>('searchBooks', { book: name });
  }

  searchBookByIsbn(isbn: String) {
    return this.isbn.send<SearchVolumeListDto>('isbn', { isbn: isbn });
  }
}
