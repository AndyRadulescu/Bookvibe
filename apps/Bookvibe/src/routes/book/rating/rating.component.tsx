import { useMemo } from 'react';
import { calculateStars } from './calculate-starts';
import StartComponent from './star.component';

export function RatingComponent(props: { averageRating?: number }) {
  const stars = useMemo(() => {
    return calculateStars(props.averageRating);
  }, [props]);
  return (
    <div className="flex">
      {stars.map((star, i) => <div className="p-2 w-[3em]">
        <StartComponent star={star} key={i} />
      </div>)}
    </div>
  );
}
