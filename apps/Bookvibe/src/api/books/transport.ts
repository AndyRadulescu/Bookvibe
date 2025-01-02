import {createContext} from 'react';
import {getBookByISBN} from './book.service.ts';
import {getBookByISBNMock} from './book.service.mock.ts';

export const bookTransportContext = () => {
  console.log(import.meta.env)
  console.log(import.meta.env.VITE_MOCK_SERVICES)
  console.log("CEVA")
    if (import.meta.env.VITE_MOCK_SERVICES) {
        return createContext(getBookByISBNMock);
    }
    return createContext(getBookByISBN);
};

