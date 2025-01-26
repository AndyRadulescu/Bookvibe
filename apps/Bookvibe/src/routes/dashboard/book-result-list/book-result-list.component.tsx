import { useEffect, useMemo, useState } from 'react';
import { SearchVolumeListDto } from '@bookvibe/shared';
import { Loading } from '../../../components/loading.component';
import { BookItemComponent } from './book-item/book-item.component';
import { catchError } from '../../../utils/utils';
import { getBooksByName } from '../../../api/books/book.service';

export function BookResultListComponent({ searchItem }: { searchItem: string }) {
  console.log(searchItem);
  const [volumeList, setVolumeList] = useState<SearchVolumeListDto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setIsEmpty(false);
      setIsLoading(true);
      const [err, book] = await catchError(getBooksByName(searchItem));
      if (err) {
        console.log(err);
      } else {
        setVolumeList(book);
      }
      setIsLoading(false);
    })();
  }, [searchItem]);

  const books = useMemo(() => {
    return volumeList?.items;
  }, [volumeList]);

  if (isEmpty) {
    return null;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books?.map((book) => (
        <BookItemComponent key={book.id} {...book} />
      ))}
    </div>
  );
}
