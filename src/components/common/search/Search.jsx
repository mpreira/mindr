import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return(
      <>
          <div className="search">
              <FontAwesomeIcon
                  icon={faSearch}
                  className="h-full flex items-center text-gray-50 opacity-60"
              />
              <input
                  type="text"
                  className="input"
                  placeholder="saisissez un premier filtre"
              />
          </div>
          <div className="search">
              <FontAwesomeIcon
                  icon={faSearch}
                  className="h-full flex items-center text-gray-50 opacity-60"
              />
              <input
                  type="text"
                  className="input"
                  placeholder="saisissez un premier filtre"
              />
          </div>

          {/*bouton more filters*/}
          <div className="flex w-full justify-center mb-2 mt-4">
              <button type="button" className="button outlined-indigo">Plus de filtres</button>
          </div>

          <div className="flex w-full justify-center mt-2">
              <button type="button" className="button primary">Lancer ma recherche</button>
          </div>
      </>

  )
}

export default Search;