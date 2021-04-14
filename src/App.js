import {React, useState} from 'react';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Navbar from './Navbar'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import whiskey from './images/whiskey.jpg'
import duke from './images/duke.jpg'
import perry from './images/perry.jpg'
import tubby from './images/tubby.jpg'


const dogs = [
    {
      name: "whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/dogs" >
        <DogList /> // what props will this need?
      </Route>
      <Route exact path="/dogs/:name" >
        <DogDetails dogdetails={dogs}/>
      </Route>
      <Redirect to="/dogs" />
  </Switch> 
  </BrowserRouter>
 );
}

export default App;



  
  