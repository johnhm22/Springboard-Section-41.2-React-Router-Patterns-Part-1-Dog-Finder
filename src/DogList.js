import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import whiskey from './images/whiskey.jpg'
import duke from './images/duke.jpg'
import perry from './images/perry.jpg'
import tubby from './images/tubby.jpg'


function DogList() {
    return(
        <div>
        <div>
            <img src={whiskey} className="dogimage" alt="dogimage" />
        </div>
        <div>
            <img src={duke} className="dogimage" alt="dogimage" />
        </div>
        <div>
            <img src={perry} className="dogimage" alt="dogimage" />
        </div>
        <div>
            <img src={tubby} className="dogimage" alt="dogimage" />
        </div>
        </div>
    )
}

export default DogList;