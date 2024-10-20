import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import IndexDuplicate1Page from './pages/Index-duplicate1.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/indexduplicate1" element={<IndexDuplicate1Page />} />
    </Routes>
  );
}

export default App;
