import React from "react";

//components
import  {LogoStrict} from '../../../images';

const Header = () => {
  return(
      <header>
          {/*plus tard message de bienvenue + icone*/}

          {/*logo*/}
          <a href="/">
              <img
                  src={LogoStrict}
                  alt="logo mindr"
                  className="logo pt-32"
              />
          </a>
      </header>
  )
}

export default Header;