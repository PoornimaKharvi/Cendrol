import logo from './logo.svg';
import './App.css';
import axios from "axios"
import {useEffect, useState} from "react"
// import JokeCategory from './components/JokeCategory';
import JokeCategoryList from './components/JokeCategoryList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 return(
  <div>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element=<JokeCategoryList/> />https://api.chucknorris.io/jokes/categories
          <Route path="/random?:categories" element=<JokeCategoryList/>/>https://api.chucknorris.io/jokes/random?animal
        </Routes>
      </Router>
    </div>
 )
}

export default App;
