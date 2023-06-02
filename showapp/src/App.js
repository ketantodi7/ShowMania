import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import React from 'react';
import Show from './components/Show';
import ShowState from './Context/ShowState';
import Footer from './components/Footer';
import ShowDetails from './components/ShowDetails';
import Book from './components/Book';

// used reactor router for routing

// pages -------
// Home page - <Show>
// particular show page - <ShowDetails>
// Booking page - <Book>

function App() {
  return (
    <div>
      <ShowState>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Show />} />
            <Route exact path="/showdetails" element={<ShowDetails />} />
            <Route exact path="/Book" element={<Book />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </ShowState>
    </div>
  );
}

export default App;
