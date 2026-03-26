import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;