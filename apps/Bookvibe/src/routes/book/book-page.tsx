import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { SearchVolumeListDto } from '@bookvibe/shared';
import { RatingComponent } from './rating/rating.component.tsx';
import { getBookByISBNMock } from '../../api/books/book.service.mock';
import { catchError } from '../../utils/utils';
import { Loading } from '../../components/loading.component';
import BookCover from './book-cover/book-cover.component';
import { getBookByISBN } from '../../api/books/book.service';

export default function BookPage() {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<SearchVolumeListDto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const bookTransport = getBookByISBN;

  useEffect(() => {
    (async () => {
      const [err, book] = await catchError(bookTransport(isbn));
      setIsLoading(true);
      if (err) {
        console.log(err);
      } else {
        setBook(book);
      }
      setIsLoading(false);
    })();
  }, [isbn]);

  const volumeInfo = useMemo(() => {
    return book?.items[0].volumeInfo;
  }, [book]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex container px-6 flex-wrap">
        <div className="w-1/3 basis-full md:basis-auto">
          <BookCover volumeInfo={volumeInfo} />
        </div>
        <div className="w-2/3 basis-full md:basis-auto">
          <h1 className="text-5xl">{volumeInfo?.title}</h1>
          <h2 className="text-lg">{volumeInfo?.authors[0]}</h2>
          <RatingComponent averageRating={volumeInfo?.averageRating} />
          <h2>{volumeInfo?.title}</h2>
          <h2>{volumeInfo?.authors}</h2>
          <h2>Genre: {volumeInfo?.categories}</h2>
          <h2>Language: {volumeInfo?.language}</h2>
          <h2>Pages: {volumeInfo?.pageCount}</h2>
          <h2>published date: {volumeInfo?.publishedDate}</h2>
          <p className="mt-4">{volumeInfo?.description}</p>
        </div>
      </div>
    </div>
  );
}
