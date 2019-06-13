import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
