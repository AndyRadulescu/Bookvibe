import { useEffect, useMemo, useState } from 'react';
import { SearchVolumeListDto } from '@bookvibe/shared';
import { Loading } from '../../../components/loading.component';
import { BookItemComponent } from './book-item/book-item.component';
import { catchError } from '../../../utils/utils';
import { getBooksByName } from '../../../api/books/book.service';

export function BookResultListComponent({ searchItem }: { searchItem: string }) {
  const [volumeList, setVolumeList] = useState<SearchVolumeListDto>();
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      if (!searchItem) return;
      setIsEmpty(false);
      setIsLoading(true);
      const [err, book] = await catchError(getBooksByName(searchItem, page));
      if (err) {
        console.log(err);
      } else {
        setVolumeList(book);
      }
      setIsLoading(false);
    })();
  }, [searchItem, page]);

  const books = useMemo(() => {
    return volumeList?.items;
  }, [volumeList]);

  if (isEmpty) {
    return null;
  }
  if (isLoading) {
    return <Loading />;
  }
  const increasePage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books?.map((book) => (
            <BookItemComponent key={book.id} {...book} />
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full mt-2">
        <button className="bg-gray-200 text-white px-2 py-1 rounded-lg hover:bg-gray-300 transition duration-200"
                onClick={increasePage}
        >Load more...
        </button>
      </div>
    </>
  );
}
