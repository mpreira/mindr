import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-regular-svg-icons";

const SearchActors = props => {

    const [actorOne, setActorOne] = useState(
        localStorage.getItem('actorOne') || ''
    );
    const [actorTwo, setActorTwo] = useState(
        localStorage.getItem('actorTwo') || ''
    );

    const handleActorOne = e => {
        setActorOne(e.target.value);
    }

    const handleActorTwo = e =>{
        setActorTwo(e.target.value);
    }

  return(
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
                      autoComplete="on"
                      id={"actorOne"}
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
  )
}

export default SearchActors;