import { VolumeDto } from '@bookvibe/shared';
import { Link } from 'react-router-dom';

export function BookItemComponent({ volumeInfo, id }: VolumeDto) {
  return (
    <Link to={`book/${id}`}>
      <div className="p-4 border rounded-2xl shadow-md">
        <img
          src={volumeInfo?.imageLinks?.thumbnail}
          alt={volumeInfo.title}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <h3 className="text-lg font-semibold mb-1">{volumeInfo.title}</h3>
        <p className="text-sm text-gray-600">{volumeInfo.authors?.[0]}</p>
      </div>
    </Link>
  );
}
