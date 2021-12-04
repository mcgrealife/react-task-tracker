import PropTypes from 'prop-types'

// CSS in JS requires double {{}}, and uses camelCase instead-of-dashes
const Header = ({ title }) => {
    return (
        <header>
            <h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1>
            
        </header>
    )
}


Header.defaultProps = {
    title: 'defaultProp defined below the arrow function is weird though'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
