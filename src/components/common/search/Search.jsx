import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus, faSearch} from "@fortawesome/free-solid-svg-icons";

//component
import Searchbar from "./Searchbar";

const Search = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Formulaire soumis !");
    }

    const toggleFilters = () => {
        console.log("Joli petit filtre en plus !");
    }

  return(
      <form onSubmit={handleSubmit}>
          <Searchbar
              placeholder={"saisissez le nom d'un(e) acteur(trice)"}
              label={"Acteur/trice"}
              id={"actorOne"}
          />
          <Searchbar
              placeholder={"saisissez le nom d'un(e) acteur(trice)"}
              label={"Acteur/trice"}
              id={"actorTwo"}
          />

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

  )
}

export default Search;