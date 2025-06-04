import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.title),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      title: "PEPPERONI PIZZA",
      description: "ABC 123 CHEESE PIZZA",
    }),
    React.createElement(Pizza, {
      title: "GRANDMA PIZZA",
      description: "ABC 123 GRANDMA PIZZA",
    }),
    React.createElement(Pizza, {
      title: "Lowercase PIZZA",
      description: "ABC 123 Lowercase PIZZA",
    }),
    React.createElement(Pizza, {
      title: "Pineapple Pizza",
      description: "ABC 123 Pineapple Pizza",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
