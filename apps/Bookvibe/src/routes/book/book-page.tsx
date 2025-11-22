import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { RatingComponent } from './rating/rating.component.tsx';
import { getBookByISBNMock } from '../../api/books/book.service.mock';
import { catchError } from '../../utils/utils';
import { Loading } from '../../components/loading.component';
import BookCover from './book-cover/book-cover.component';
import { getBookById } from '../../api/books/book.service';
import { BookVibeVolumeDto } from '@bookvibe/shared';

export default function BookPage() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<BookVibeVolumeDto | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const bookTransport = getBookById;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const [err, book] = await catchError(bookTransport(id));

      if (err) {
        console.log(err);
      } else {
        setBook(book);
      }
      setIsLoading(false);
    })();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex container px-6 flex-wrap">
        <div className="w-1/3 basis-full md:basis-auto">
          <BookCover volumeInfo={book} />
        </div>
        <div className="w-2/3 basis-full md:basis-auto">
          <h1 className="text-5xl">{book?.title}</h1>
          <h2 className="text-lg">{book?.authors?.[0]}</h2>
          <RatingComponent averageRating={book?.averageRating} />
          <h2>{book?.title}</h2>
          <h2>{book?.authors}</h2>
          <h2>Genre: {book?.categories}</h2>
          <h2>Language: {book?.language}</h2>
          <h2>Pages: {book?.pageCount}</h2>
          <h2>published date: {book?.publishedDate}</h2>
          <p className="mt-4">{book?.description}</p>
        </div>
      </div>
    </div>
  );
}
