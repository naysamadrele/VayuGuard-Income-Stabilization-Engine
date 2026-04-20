import React from 'react';
import ReactDOM from 'react-dom/client';
import VayuGuard from './VayuGuard.jsx';
import './i18n';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <VayuGuard />
    </ErrorBoundary>
  </React.StrictMode>
);
