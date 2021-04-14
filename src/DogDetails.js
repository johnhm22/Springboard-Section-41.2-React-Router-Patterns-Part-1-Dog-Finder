import {React, useState, useEffect} from 'react';
import { useParams } from "react-router-dom";



//the route change is changing the url but not being picked up here

const DogDetails = (props) => {
    const { name } = useParams();
    const [dog, setDog] = useState();

    useEffect(() => {
        setDog(name)
    }, [name]);


    // Photo: <img src={d.src} height='200px' width='200px'></img>

    return (
        <div>
        <h1>Hi, this is the details page for {dog}</h1>
        <ul>
            {props.dogdetails.map(d => {
                if (d.name === dog){
                <li>
                {d.name}
                </li>
                }
            })}
        </ul>
        </div>
    );
        }

export default DogDetails;