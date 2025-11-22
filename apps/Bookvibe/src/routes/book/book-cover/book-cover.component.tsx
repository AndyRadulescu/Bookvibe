import { BookVibeVolumeDto } from '@bookvibe/shared';
import './book-cover.scss';

export default function BookCover({ volumeInfo }: { volumeInfo: BookVibeVolumeDto }) {
  return (
    <div className="book-cover-width">
      <img className="w-full rounded-r-[20px]" src={volumeInfo?.imageLink} alt={volumeInfo?.title} />
    </div>
  );
}
