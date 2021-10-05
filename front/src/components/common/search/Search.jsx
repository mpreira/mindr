import React, {useState} from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";

//component
import SearchActor from "./SearchActor";
import Results from "../../home/results/Results";

const Search = () => {

    const [submitted, setSubmitted] = useState(false);

    const fetchActors = () => {
        // étape 1: lier l'input au query search par nom
        // étape 2: du résultat, lancer une query by id avec appended credits
        // étape 3: faire la même chose pour le deuxième acteur
        // étape 4: croiser les deux listes en fonction des films qui reviennent dans les deux
    }

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
              <SearchActor />

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
          {submitted? <Results /> : null}
      </>
  )
}

export default Search;