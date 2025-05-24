import {createBrowserRouter} from 'react-router-dom';
import Root from './root';
import ErrorPage from './error-page';
import BookPage from './book/book-page.tsx';
import { Loading } from '../components/loading.component';
import { Suspense } from 'react';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/book/:id',
      element: <Suspense fallback={<Loading />}><BookPage/></Suspense>,
    },
]);
