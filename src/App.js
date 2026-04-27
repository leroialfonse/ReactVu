import './App.css';
import {BrowserRouter as Router , Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react';

function App() {
const [searchTitle, setSearchTitle] = useState([])

  // const {title} = useParams();

  return (
    <>
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} ></Route>
          <Route path="search/:title" element={<Search/>}></Route>
        <Route path={`search/${searchTitle || "alone"}`} element={<Search/>}></Route>
        
        </Routes>
      </div>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
