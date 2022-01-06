import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const Results = ({movie}) => {

    const displayResults =
        movie.map((film) => (
            <p key={film.id}>{film.original_title}</p>
        ))
    ;

    if (!movie) return <p>Aucun résultat</p>;

    return(
        <>
            <h2>Résultats</h2>
            {displayResults}
        </>
    )
}

export default Results;