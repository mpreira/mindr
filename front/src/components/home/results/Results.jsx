import React, {useState, useEffect} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

//components
//import Movie from "./Movie";

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const Results = () => {

    // requete discover

    const [movie, setMovie] = useState([]);



    if (!movie) return <p>Aucun résultat</p>;

    return(
        <>
            <h2>Résultats</h2>
        </>
    )
}

export default Results;