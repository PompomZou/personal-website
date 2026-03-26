import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;