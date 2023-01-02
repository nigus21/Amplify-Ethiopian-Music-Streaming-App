import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus , setLibraryStatus }) => {
    return (
    <div className="nav">
      <nav>
        <h1>Amplify</h1>
        <button onClick={()=>(setLibraryStatus(!libraryStatus))}>
          <h1>Library</h1>
          <FontAwesomeIcon icon={faMusic} />
        </button>
      </nav>
    </div>
  );
};

export default Nav;