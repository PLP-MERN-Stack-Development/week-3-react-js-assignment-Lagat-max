import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center py-4 mt-8 border-t dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Vite</a>
        <span className="hidden md:inline">|</span>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">React</a>
        <span className="hidden md:inline">|</span>
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Tailwind CSS</a>
      </div>
      <div className="text-gray-500 dark:text-gray-400 mt-2">&copy; {new Date().getFullYear()} Lagat-max. All rights reserved.</div>
    </footer>
  );
} 