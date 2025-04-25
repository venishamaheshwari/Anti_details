import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Architecture from './pages/Architecture';
import Dataset from './pages/Dataset';
import Evaluation from './pages/Evaluation';
import Demo from './pages/Demo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="architecture" element={<Architecture />} />
        <Route path="dataset" element={<Dataset />} />
        <Route path="evaluation" element={<Evaluation />} />
        <Route path="demo" element={<Demo />} />
      </Route>
    </Routes>
  );
}

export default App;