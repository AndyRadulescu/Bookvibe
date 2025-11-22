import { useEffect, useState } from 'react';
import { BookVibeVolumeDto } from '@bookvibe/shared';
import { Loading } from '../../../components/loading.component';
import { BookItemComponent } from './book-item/book-item.component';
import { catchError } from '../../../utils/utils';
import { getBooksByName } from '../../../api/books/book.service';

export function BookResultListComponent({ searchItem }: { searchItem: string }) {
  const [volumes, setVolumes] = useState<BookVibeVolumeDto[]>();
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      if (!searchItem) return;
      setIsEmpty(false);
      setIsLoading(true);
      const [err, books] = await catchError(getBooksByName(searchItem, page));
      if (err) {
        console.log(err);
      } else {
        if (books && books.length > 0) {
          const newList = volumes ? volumes.concat(books) : books;
          setVolumes(newList);
        }
      }
      setIsLoading(false);
    })();
  }, [searchItem, page]);

  if (isEmpty) {
    return null;
  }
  if (isLoading && volumes == undefined) {
    return <Loading />;
  }
  const increasePage = () => {
    setPage(page + 1);
  };
  console.log(volumes);
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {volumes?.map((book) => (
            <BookItemComponent key={book.id} volumeInfo={book} />
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full mt-2">
        {
          isLoading ? <Loading /> :
            <button className="bg-gray-200 text-white px-2 py-1 rounded-lg hover:bg-gray-300 transition duration-200"
                    onClick={increasePage}
            >Load more...
            </button>
        }
      </div>
    </>
  );
}
