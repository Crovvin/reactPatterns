import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

function Color({hex, color, history}) {
  if (!hex) {
    history.push("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>{color}</p>
      <p>
        <Link to="/">Return to last page</Link>
      </p>
    </div>
  );
}

export default Color;