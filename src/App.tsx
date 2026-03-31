import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import ErrorBoundary from './components/sections/ErrorBoundary';
import { Portfolio } from './components';

function App() {
  return (
    <LanguageProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </div>
      </ErrorBoundary>
    </LanguageProvider>
  );
}

export default App;