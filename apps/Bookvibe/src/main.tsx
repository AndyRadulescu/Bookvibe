import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { router } from './routes/router.tsx';
import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from './components/error-boundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
