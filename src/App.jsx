import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './theme/ThemeContext';
import Home from './pages/Home';
import TaskManager from './components/TaskManager';
import ApiDemo from './pages/ApiDemo';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/api" element={<ApiDemo />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App; 