const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            
        </header>
    )
}

// hmm, but defining defaultProps outside of the arrow function is less elegant. If I have to write them anyway, why not write them in the function declaration.
Header.defaultProps = {
    title: 'defaultProp defined below the arrow function is weird though'
}

export default Header
