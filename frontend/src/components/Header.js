// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="bg-green-800 p-4 flex justify-between items-center">
    <div className="flex items-center">
      <div className="bg-gray-300 h-8 w-8 mr-2"></div> {/* Placeholder for the logo */}
      <h1 className="text-white text-xl font-bold">EchoSort</h1>
    </div>
    <nav>
      <a href="#" className="text-white ml-4 hover:underline">Sign in</a>
      <a href="#" className="text-white ml-4 hover:underline">Contact us</a>
    </nav>
  </header>
);

export default Header;
