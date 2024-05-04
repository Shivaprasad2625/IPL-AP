import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Outlet />

      <br />
      <button>
        <Link to="/rcb"> RCB </Link>
      </button>
      <br />
      <br />

      <button>
        <Link to="/csk"> CSK </Link>
      </button>
      <br />
      <br />
      <button>
        <Link to="/dc"> DC </Link>
      </button>
    </div>
  );
}

export default App;
