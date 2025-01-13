import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { SearchVolumeListDto } from '@bookvibe/shared';
import { RatingComponent } from '../../components/rating.component.tsx';
import { getBookByISBNMock } from '../../api/books/book.service.mock';

export default function BookPage() {
  const { isbn } = useParams<{ isbn: string }>();
  const [book, setBook] = useState<SearchVolumeListDto | null>(null);
  const bookTransport = getBookByISBNMock
  throw getBookByISBNMock();

  useEffect(() => {
    bookTransport().then(data => setBook(data));
  }, [isbn]);

  const volumeInfo = useMemo(() => {
    return book?.items[0].volumeInfo;
  }, [book]);

  return (
    <div className="flex flex-row justify-center w-full">
      <div className="flex container px-4">
        <div className="w-1/3">
          <img src={volumeInfo?.imageLinks?.thumbnail} alt={volumeInfo?.title} />
        </div>
        <div className="w-2/3">
          <h1 className="text-5xl">{volumeInfo?.title}</h1>
          <h2 className="text-lg">{volumeInfo?.authors[0]}</h2>
          <RatingComponent averageRating={volumeInfo?.averageRating} />
          <div>{JSON.stringify(volumeInfo)}</div>
        </div>
      </div>
    </div>
  );
}
