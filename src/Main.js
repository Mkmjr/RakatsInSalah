import React from "react";
import Rakats from './Rakats';
import './Main.css';


function Main(props)
{
    return(
    <div className="background" >
        <h2>Rakats in {props.salah}</h2>
        <p>The main aim of creation of this webpage is to give an information regarding the total number of rakats in a {props.salah}.
            The information present in the webpage will help the reader to gain knowledge of the total number of rakats in a {props.salah}.
            The information present in the following webpage is been cross checked throughly, but if you find any discrepancy or any suggestions
            that needs to be added in the webpage, please do let me know.
        </p>
        <Rakats prayer= "Total prayer"/>
        </div>
    );
}

export default Main;


// style={{backgroundImage: 'url(/rakatsinsalahbackground.jpg)', backgroundSize: 'cover', height: '100%'}}