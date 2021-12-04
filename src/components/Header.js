 // ohh I can achieve this with props "destructuring"
const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            
        </header>
    )
}


Header.defaultProps = {
    title: 'defaultProp defined below the arrow function is weird though'
}

export default Header
