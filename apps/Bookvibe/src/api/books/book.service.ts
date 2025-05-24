import { catchError } from '../../utils/utils.ts';
import { SearchVolumeListDto, VolumeDto } from '@bookvibe/shared';
import axios from 'axios';

const ROOT = 'http://localhost:3000';
const API = 'api';
const BOOKS = 'books';
const SEARCH = 'search';

export const getBookById = async (id: string): Promise<SearchVolumeListDto> => {
  const [err, response] =
    await catchError(axios.get<SearchVolumeListDto>(`${ROOT}/${API}/${BOOKS}/${id}`));
  if (err) {
    console.log(err);
  }
  return response?.data;
};

export const getBooksByName = async (name: string, page: number): Promise<SearchVolumeListDto> => {
  const [err, response] =
    await catchError(axios.get<SearchVolumeListDto>(`${ROOT}/${API}/${BOOKS}/${SEARCH}&name=${name}&page=${page}`));
  if (err) {
    console.log(err);
  }
  return response?.data;
};
