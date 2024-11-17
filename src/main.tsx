import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import './index.css';
import App from '@/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);

// future={{
//   v7_fetcherPersist: true,
//   v7_normalizeFormMethod: true,
//   v7_partialHydration: true,
//   v7_relativeSplatPath: true,
//   v7_skipActionErrorRevalidation: true,
//   v7_startTransition: true,
// }}
