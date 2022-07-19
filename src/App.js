import './App.css'
import React, { useState, useEffect } from "react";
import Slideshow from "./Slideshow.js"



console.log("console is connected");

function App() {
    const [data,setData]=useState(null);
    const getFilmData=()=>{
        fetch("film-data.json"
        ,{
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }
        }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(()=> {
        getFilmData()
    },[])

    return (
        <div className="Film">
                <h1>Studio Ghibli Films</h1>
            <h1>Slideshow</h1>
            {data ? <Slideshow films={data}/> : <h2>Loading...</h2>}
        </div>
        
    );

}


export default App

