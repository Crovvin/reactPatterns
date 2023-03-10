import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import Color from "./Color";

function Routes() {

  const startingColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  const [colors, updateColors] = useState(startingColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function renderColor(props) {
    const { color } = props.match.params;
    const hex = colors[color];
    return <Color {...props} hex={hex} color={color} />;
  };

  function addColors(newColor) {
    updateColors(prevColors => ({ ...prevColors, ...newColor }));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm addColor={addColors} />
        </Route>
        <Route path="/colors/:color" render={renderColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;