import React from 'react';
import Card from '../components/Card';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <Card>
        <h1 className="text-3xl font-bold mb-2">Welcome to the Week 3 React Assignment!</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Explore the features using the navigation bar above.</p>
      </Card>
    </div>
  );
} 