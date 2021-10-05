import React, {useState, useEffect} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

//components
//import Movie from "./Movie";
const apiKey = '32b503b0983ae60bd760829cf51f0045';
const language = '&language=fr-FR';
const baseURL = `https://api.themoviedb.org/3/movie/75780?api_key=${apiKey}&append_to_response=credits${language}`;
const imageUrl = 'https://image.tmdb.org/t/p/w500/';

const Results = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios
            .get(baseURL)
            .then((response) => {
                setMovie(response.data)
                console.log(response)
            });
    }, []);



    if (!movie) return null;

    return(
        <>
            <h2>Résultats</h2>

            <div className="movie">
                <div className="w-1/3">
                    <img
                        src={`${imageUrl}${movie.poster_path}`}
                        alt={"poster"}
                    />
                </div>

                <div className="pl-4">

                    <p className="title">
                        {movie.original_title}
                    </p>
                    <p className="officialScore">
                        <FontAwesomeIcon icon={faStar} className="fa-sm mr-1" />
                        <span className="mt-0.5">{movie.vote_average}</span>
                    </p>
                    <p className="director">
                        {/*{movie.credits.crew.filter((crew) => {return 'Director' === crew.job;})}*/}
                    </p>

                </div>

            </div>

        </>
    )
}

export default Results;