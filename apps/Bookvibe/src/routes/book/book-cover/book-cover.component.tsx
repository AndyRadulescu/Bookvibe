import { BookVibeVolumeDto } from '@bookvibe/shared';
import { useMemo } from 'react';
import "./book-cover.scss"

export default function BookCover(props: { volumeInfo: BookVibeVolumeDto }) {
  const volumeInfo = useMemo(() => {
    return props?.volumeInfo;
  }, [props]);

  return (
    <div className="book-cover-width">
      <img className="w-full rounded-r-[20px]" src={volumeInfo.imageLink} alt={volumeInfo.title} />
    </div>
  );
}
