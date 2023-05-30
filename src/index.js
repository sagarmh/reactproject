import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const number = 10;
  return (
    <div>
      {number > 0 ? (
        <p>Number {number} is positive</p>
      ) : (
        <p>Number {number} is negative</p>
      )}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="David" />, rootElement);