import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../theme/ThemeContext';
import Button from './Button';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="bg-white dark:bg-gray-900 shadow px-4 py-3 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">React Demo</Link>
      <div className="flex items-center gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}>Home</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}>Tasks</NavLink>
        <NavLink to="/api" className={({ isActive }) => isActive ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}>API Demo</NavLink>
        <Button variant="secondary" onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>
    </nav>
  );
} 