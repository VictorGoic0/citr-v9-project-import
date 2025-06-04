import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza title="PEPPERONI PIZZA" description="ABC 123 CHEESE PIZZA"></Pizza>
      <Pizza title="GRANDMA PIZZA" description="ABC 123 GRANDMA PIZZA"></Pizza>
      <Pizza
        title="Lowercase PIZZA"
        description="ABC 123 Lowercase PIZZA"
      ></Pizza>
      <Pizza
        title="Pineapple Pizza"
        description="ABC 123 Pineapple Pizza"
      ></Pizza>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
