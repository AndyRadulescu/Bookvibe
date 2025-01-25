import { Star } from './star.component';

export const calculateStars = (rating?: number | string): Star[] => {
  if (rating == null || typeof rating === 'string' && isNaN(parseInt(rating))) {
    return ['empty', 'empty', 'empty', 'empty', 'empty'];
  }
  const starArray: Star[] = [];
  const fullStars = parseInt(rating.toString());
  const halfStars = parseFloat(rating.toString()) - fullStars >= 0.5;
  for (let i = 0; i < fullStars; i++) {
    starArray.push('full');
  }
  if(halfStars){
    starArray.push('half');
  }
  while (starArray.length < 5){
    starArray.push('empty');
  }

  return starArray;
};
