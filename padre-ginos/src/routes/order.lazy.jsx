import { useState, useEffect, useContext } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { CartContext } from "../contexts" 
import Pizza from "../Pizza";
import Cart from "../Cart"

export const Route = createLazyFileRoute("/order")({
    component: Order
})

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order() {
    const [cart, setCart] = useContext(CartContext)
    const [pizzaTypes, setPizzaTypes] = useState([])
    const [loading, setLoading] = useState(true)

    const [pizzaType, setPizzaType] = useState("pepperoni");
    const [pizzaSize, setPizzaSize] = useState("M");

    let price, selectedPizza

    if (!loading) {
        selectedPizza = pizzaTypes.find((pizza => pizzaType === pizza.id))
        price = intl.format(selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "")
    }

    async function fetchPizzaTypes() {
        await new Promise((resolve) => setTimeout(resolve, 3000)); // remove this later, just to show you the loading state

        const pizzasRes = await fetch("/api/pizzas");
        const pizzasJson = await pizzasRes.json();
        setPizzaTypes(pizzasJson);
        setLoading(false);
    }

    useEffect(() => {
        fetchPizzaTypes();
    }, [])

    async function checkout() {
        setLoading(true);

        await fetch("/api/order", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            cart,
            }),
        });

        setCart([])
        setLoading(false)
    }
    

    return (
        <div className="order">
            <h2>Create Order</h2>
            <form
                onSubmit={e => {
                        e.preventDefault()
                        setCart([...cart, { pizza: selectedPizza, size: pizzaSize, price }])
                    }}
            >
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select 
                            onChange={(e) => setPizzaType(e.target.value)}
                            name="pizza-type"
                            value={pizzaType}
                        >
                            {pizzaTypes.map((pizza) => (
                                <option key={pizza.id} value={pizza.id}>
                                    {pizza.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza Size</label>
                        <div>
                            <span>
                                <input
                                    checked={pizzaSize === "S"}
                                    type="radio"
                                    name="pizza-size"
                                    value="S"
                                    id="pizza-s"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-s">Small</label>
                            </span>
                            <span>
                                <input
                                    checked={pizzaSize === "M"}
                                    type="radio"
                                    name="pizza-size"
                                    value="M"
                                    id="pizza-m"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                <input
                                    checked={pizzaSize === "L"}
                                    type="radio"
                                    name="pizza-size"
                                    value="L"
                                    id="pizza-l"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">
                        Add to Cart
                    </button>
                </div>
                {
                    loading ? (
                        <h3>Loading...</h3>
                    ) : (
                        <div className="order-pizza">
                            <Pizza
                                title={selectedPizza.name}
                                description={selectedPizza.description}
                                image={selectedPizza.image}
                            />
                            <p>$13.37</p>
                        </div>
                    )
                }
                {
                loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <Cart checkout={checkout} cart={cart} />
                )
            }
            </form>
        </div>
    )
}