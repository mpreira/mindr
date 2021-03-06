import React, {useEffect, useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";

//component
import Results from "../../home/results/Results";
import {faUser} from "@fortawesome/free-regular-svg-icons";

const Search = () => {

    const [actorOne, setActorOne] = useState('');
    const [firstId, setFirstId] = useState();

    const [actorTwo, setActorTwo] = useState('');
    const [secondId, setSecondId] = useState();

    const [movie, setMovie] = useState([]);

    const apiKey = '32b503b0983ae60bd760829cf51f0045';
    const language = '&language=fr-FR';

    const [submitted, setSubmitted] = useState(false);

        // étape 1: lier l'input au query search par nom
        // étape 2: récupérer l'id
        // étape 3: faire la même chose pour le deuxième acteur
        // étape 4: faire une recherche discover avec les deux ID et les credits

    // Acteur 1
    const handleActorOne = e => {
        setActorOne(e.target.value);
        console.log(actorOne);
    }

    const firstActor = actorOne.replaceAll(' ', '+');
    const firstActorQuery = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${firstActor}&${language}`;

    // Acteur 2
    const handleActorTwo = e =>{
        setActorTwo(e.target.value);
        console.log(actorTwo);
    }

    const secondActor = actorTwo.replaceAll(' ', '+');
    const secondActorQuery = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${secondActor}&${language}`;

    // request for movies with both actors
    const discover = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_cast=${firstId},${secondId}&${language}`;

    useEffect(() => {
        axios.get(discover).then((result) => {
            setMovie(result.data.results);
            console.log(result.data.results);
        });
        // setSubmitted(false)
    }, [firstId, secondId, discover]);

    useEffect(() => {
        if(submitted) {
            axios.get(firstActorQuery).then((response) => {
                setFirstId(response.data.results[0].id);
                console.log(response.data.results[0].id);
                axios.get(secondActorQuery).then((res) => {
                    setSecondId(res.data.results[0].id);
                });
            });
        }
    }, [submitted, firstActorQuery, secondActorQuery])

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
        console.log("Formulaire soumis !");
    }

    const toggleFilters = () => {
        console.log("Joli petit filtre en plus !");
    }

  return(
      <>
          <form onSubmit={handleSubmit}>

              {/* filtres acteur */}
              <>
                  <div className="search">
                      <div className="bg">
                          <FontAwesomeIcon
                              icon={faUser}
                              className="h-full flex items-center text-gray-50 opacity-60"
                          />
                          <input
                              type="text"
                              className="input"
                              placeholder={"saisissez le nom d'un(e) acteur(trice)"}
                              name="actorOne"
                              value={actorOne}
                              onChange={e => handleActorOne(e)}
                          />
                      </div>
                  </div>

                  <div className="search">
                      <div className="bg">
                          <FontAwesomeIcon
                              icon={faUser}
                              className="h-full flex items-center text-gray-50 opacity-60"
                          />
                          <input
                              type="text"
                              className="input"
                              placeholder={"saisissez le nom d'un(e) acteur(trice)"}
                              autoComplete="on"
                              id={"actorTwo"}
                              value={actorTwo}
                              onChange={e => handleActorTwo(e)}
                          />
                      </div>
                  </div>
              </>

              {/*bouton more filters*/}
              <div className="flex w-full justify-center mb-2 mt-8">
                  <button
                      type="button"
                      className="button outlined-indigo"
                      onClick={toggleFilters}
                  >
                      <FontAwesomeIcon
                          icon={faPlus}
                          className="text-indigo-600 mr-2"
                      />
                      Plus de filtres
                  </button>
              </div>

              {/* bouton recherche */}
              <div className="flex w-full justify-center my-8">
                  <button
                      type="submit"
                      className="button primary"
                  >
                      <FontAwesomeIcon
                          icon={faSearch}
                          className="mr-2"
                      />
                      Lancer ma recherche
                  </button>
              </div>
          </form>

          {/* affichage résultats */}
          {
              submitted?
                      <Results movie={movie} />
                  : null}
      </>
  )
}

export default Search;