import { Module } from '@nestjs/common';
import { BookSearchModule } from './v1/book-search/book-serach.module';

@Module({
  imports: [BookSearchModule],
})
export class AppModule {
}
