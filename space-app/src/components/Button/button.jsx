const Button = (props) => {
    console.log(props);

    return (
        <a href={props.link}>
            <button>{props.name}</button>
        </a> 
    );
}

Button.defaultProps = {
    name: "Hola",
    link: "/", // Cambiado de href a link
}

export default Button;
