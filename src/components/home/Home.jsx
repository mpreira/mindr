import React from "react";

//components
import Search from "../common/search/Search";

const Home = () => {
  return(
      <>
          {/*slogan*/}
          <p className="motto">
              Trouve le film que tu as en tête
          </p>

          {/*content*/}
          <Search />
      </>

  )
}

export default Home;