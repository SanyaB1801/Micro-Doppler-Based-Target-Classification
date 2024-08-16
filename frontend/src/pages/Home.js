// src/pages/Home.js
import React from 'react';
import Button from '../components/Button';

const Home = () => (
  <div className="bg-yellow-50 p-8 flex justify-between items-center">
    <div className="max-w-md">
      <h2 className="text-4xl font-bold text-green-900 mb-4">Precision in the Sky, Clarity on the Ground.</h2>
      <p className="text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex space-x-4">
        <Button primary>Button 1</Button>
        <Button>Button 1</Button>
      </div>
    </div>
    <div>
      <img
        src="https://via.placeholder.com/400x300" 
        alt="Chart example"
        className="rounded shadow-lg"
      />
    </div>
  </div>
);

export default Home;
