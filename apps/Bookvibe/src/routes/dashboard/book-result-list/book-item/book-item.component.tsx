import { BookVibeVolumeDto } from '@bookvibe/shared';
import { Link } from 'react-router-dom';
import { RatingComponent } from '../../../book/rating/rating.component';


export function BookItemComponent({ volumeInfo }: { volumeInfo: BookVibeVolumeDto }) {
  return (
    <Link to={`book/${volumeInfo.id}`}>
      <div className="p-4 border rounded-2xl shadow-md">
        <img
          src={volumeInfo?.imageLink}
          alt={volumeInfo.title}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <h3 className="text-lg font-semibold mb-1">{volumeInfo.title}</h3>
        <p className="text-sm text-gray-600">{volumeInfo.authors?.[0]}</p>
        <div className="w-2/3">
          <RatingComponent averageRating={volumeInfo?.averageRating} />
        </div>
      </div>
    </Link>
  );
}
