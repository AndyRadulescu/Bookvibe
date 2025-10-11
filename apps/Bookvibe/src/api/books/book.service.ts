import { catchError } from '../../utils/utils.ts';
import { BookVibeVolumeDto } from '@bookvibe/shared';
import axios from 'axios';

const ROOT = 'http://localhost:3000';
const API = 'api';
const BOOKS = 'books';
const SEARCH = 'search';

export const getBookById = async (id: string): Promise<BookVibeVolumeDto> => {
  const [err, response] =
    await catchError(axios.get<BookVibeVolumeDto>(`${ROOT}/${API}/${BOOKS}/${SEARCH}/${id}`));
  if (err) {
    console.log(err);
  }
  return response?.data;
};

export const getBooksByName = async (name: string, page: number): Promise<BookVibeVolumeDto[]> => {
  const [err, response] =
    await catchError(axios.get<BookVibeVolumeDto[]>(`${ROOT}/${API}/${BOOKS}/${SEARCH}?name=${name}&page=${page}`));
  if (err) {
    console.log(err);
  }
  return response?.data;
};
