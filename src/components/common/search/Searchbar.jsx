import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-regular-svg-icons";

const Searchbar = props => {
  return(
      <div className="search">
          {/*
              <label htmlFor={props.id} className="label">
                  {props.label}
              </label>
          */}
          <div className="bg">
              <FontAwesomeIcon
                  icon={faUser}
                  className="h-full flex items-center text-gray-50 opacity-60"
              />
              <input
                  type="text"
                  className="input"
                  placeholder={props.placeholder}
                  id={props.id}
              />
          </div>
      </div>
  )
}

export default Searchbar;