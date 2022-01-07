import React from "react";

//components
import Search from "../common/search/Search";

const Home = () => {
  return(
      <section>
          {/*slogan*/}
          <p className="motto">
              Trouve le film que tu as en tête
          </p>

          {/*content*/}
          <Search />
      </section>

  )
}

export default Home;