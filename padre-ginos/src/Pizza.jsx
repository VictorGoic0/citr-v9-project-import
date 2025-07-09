const Pizza = (props) => {
    return (
        <div className="pizza">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image ? props.image : "https://picsum.photos/200"} alt={props.title} />
    </div>
    )
};


export default Pizza