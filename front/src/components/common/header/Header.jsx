import React from "react";

//components
import  {LogoStrict} from '../../../images';

const Header = () => {
  return(
      <>
          {/*plus tard message de bienvenue + icone*/}

          {/*logo*/}
          <a href="/">
              <img
                  src={LogoStrict}
                  alt="logo mindr"
                  className="logo pt-32"
              />
          </a>
      </>
  )
}

export default Header;