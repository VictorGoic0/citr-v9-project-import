const Pizza = () => {
    return React.createElement("div", {} , [
        React.createElement("h1", {}, "The Pepperoni Pizza"),
        React.createElement("p", {}, "CHEESE, PEPPERONI")
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Padre Gino's"),
            React.createElement(Pizza),
            React.createElement(Pizza),
            React.createElement(Pizza),
            React.createElement(Pizza)
        ]
    )
}

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App))