import React, { useState, useEffect } from "react";
import App from "./App";
import './App.css'



console.log("console is connected");

function Slideshow (props) {
    const { films } = props
    const [currentFilm, setcurrentFilm] = useState(films[0])
    const [currentFilmIndex, setCurrentFilmIndex] = useState(0)


    useEffect(() => {
        // if (currentFilmIndex == 0 ) {
        //     document.getElementById("previous").disabled = true;
        //     document.getElementById("restart").disabled = true;
            
        // }
        setcurrentFilm(films[currentFilmIndex])
    }, [films, currentFilmIndex]);

    // const restart = () => {
    //     if (currentFilmIndex !== 0) {
    //         setCurrentFilmIndex(0);
    //         document.getElementById("next").disabled = false;
    //     }
    // };

    // const previous = () => {
    //     if (currentFilmIndex != 0) {
    //         setCurrentFilmIndex(currentFilmIndex - 1);
    //         document.getElementById("next").disabled = false;
    //     } else {
    //         document.getElementById("previous").disabled = true;
    //         document.getElementById("next").disabled = false;
    //     }
    // };


    

    return (
        <div>
            <div className="movie-info">
                <h2>{currentFilm.title}</h2>
                <p>{currentFilm.original_title}</p>
                <div className="movie-poster">
                    <img className="poster-art" src={currentFilm.movie_banner} alt="movie banner"></img>
                </div>
                <p>{currentFilm.release_date}</p>
                <p>{currentFilm.description}</p>
            </div>
            <div className="nav-buttons">
                <button id="restart" disabled={currentFilmIndex===0} onClick={() => {setCurrentFilmIndex(0)}}>Start Over</button>
                <button id="previous" disabled={currentFilmIndex===0} onClick={() => {setCurrentFilmIndex(currentFilmIndex - 1)}}>Previous</button>
                <button id="next" onClick={() => {setCurrentFilmIndex(currentFilmIndex + 1)}}>Next</button>
            </div>
    </div>
        
    )
        
}

export default Slideshow;