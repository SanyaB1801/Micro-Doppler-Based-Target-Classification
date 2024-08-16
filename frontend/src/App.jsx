// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import reactLogo from "./assets/react.svg"; // Comment this line out if you don't have the file.
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './styles/main.css';  // Make sure this file exists

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4 min-h-[calc(100vh-160px)]">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
