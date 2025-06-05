import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's</h1>
      <Pizza title="PEPPERONI PIZZA" description="ABC 123 CHEESE PIZZA" image={"/public/pizzas/pepperoni.webp"}></Pizza>
      <Pizza title="GRANDMA PIZZA" description="ABC 123 GRANDMA PIZZA" image={"/public/pizzas/hawaiian.webp"}></Pizza>
      <Pizza
        title="Lowercase PIZZA"
        description="ABC 123 Lowercase PIZZA"
        image={"/public/pizzas/big_meat.webp"}
      ></Pizza>
      <Pizza
        title="Pineapple Pizza"
        description="ABC 123 Pineapple Pizza"
        image={"/public/pizzas/pepperoni.webp"}
      ></Pizza>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
