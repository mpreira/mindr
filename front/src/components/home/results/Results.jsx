import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const Results = ({movie}) => {

    const displayResults =
        movie.map((film) => (
            <article className={"movie"}>

                <img src={`${imageUrl}${film.poster_path}`} className={"poster"} alt={"affiche du film"} />

                <div className={"side-poster"}>
                    <h3 key={film.id} className={"title"}>{film.original_title}</h3>
                    <p className={"officialScore"}>
                        <FontAwesomeIcon icon={faStar} className={"mr-2"} />
                        <span className={"mt-1"}>{film.vote_average}</span>
                    </p>
                </div>

            </article>
        ))
    ;

    if (movie.length < 1) return <p>Aucun résultat</p>;

    return(
        <>
            <h2>Résultats</h2>
            {displayResults}
        </>
    )
}

export default Results;