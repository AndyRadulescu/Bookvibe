import { Test, TestingModule } from '@nestjs/testing';
import { BookSearchController } from './book-search.controller';
import { BookSearchService } from './book-search.service';

describe('BooksController', () => {
  let appController: BookSearchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookSearchController],
      providers: [BookSearchService],
    }).compile();

    appController = app.get<BookSearchController>(BookSearchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.searchBooks('some title')).toBe('Hello World!');
    });
  });
});
