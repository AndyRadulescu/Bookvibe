import { catchError } from '../../utils/utils.ts';
import { SearchVolumeListDto } from '@bookvibe/shared';
import axios from 'axios';

export const getBookByISBN = async (isbn: string): Promise<SearchVolumeListDto> => {
  const [err, response] =
    await catchError(axios.get<SearchVolumeListDto>(`http://localhost:3000/isbn/${isbn}`));
  if (err) {
    console.log(err);
  }
  return response?.data;
};
