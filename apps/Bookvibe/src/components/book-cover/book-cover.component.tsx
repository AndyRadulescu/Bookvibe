import { VolumeInfoDto } from '@bookvibe/shared';
import { useMemo } from 'react';
import "./book-cover.scss"

export default function BookCover(props: { volumeInfo?: VolumeInfoDto }) {
  const volumeInfo = useMemo(() => {
    return props?.volumeInfo;
  }, [props]);

  return (
    <div className="book-cover-width">
      <img className="w-full rounded-r-[20px]" src={volumeInfo?.imageLinks?.thumbnail} alt={volumeInfo?.title} />
    </div>
  );
}
