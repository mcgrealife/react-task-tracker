
// WOW this is elegant. instead of writing each individual parameter name into the arrow function declaration, I can simply pass props, and then refer to props.whatever I name it where I need it!
const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.name}</h2>
        </header>
    )
}

export default Header
