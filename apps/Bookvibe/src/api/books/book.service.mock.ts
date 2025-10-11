import { BookVibeVolumeDto } from '@bookvibe/shared';

const mockBookVibeVolumeDto: BookVibeVolumeDto = {
  id: 'Jelk7EMpA7sC',
  title: 'The Lord of the Rings',
  subtitle: undefined,
  authors: ['John Ronald Reuel Tolkien'],
  publisher: undefined,
  publishedDate: '1991',
  description: 'A beautiful illustrated boxed set collecting the two...',
  industryIdentifiers: [
    { type: 'ISBN_10', identifier: '0261102435' },
    { type: 'ISBN_13', identifier: '9780261102439' },
  ],
  pageCount: 1193,
  categories: ['Adventure stories'],
  averageRating: 4.5,
  ratingCount: 4,
  maturityRating: 'NOT_MATURE',
  imageLink: 'http://books.google.com/books/content?id=Jelk7EMpA7sC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
  language: 'en',
};

export const getBookByISBNMock = (): Promise<BookVibeVolumeDto> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(returnBook);
          // reject("stupid error");
        }, 500);
    });
};
