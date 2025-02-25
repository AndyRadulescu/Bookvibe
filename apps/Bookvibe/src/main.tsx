import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { router } from './routes/router.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
