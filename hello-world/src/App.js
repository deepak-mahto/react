import React from "react";

const App = () => {
  // return <div>Hello, World!</div>;
  return React.createElement(
    "div",
    { className: "dummyClass", id: "container" },
    React.createElement("h1", {}, "Hello, World!")
  );
};

export default App;
