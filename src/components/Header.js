import PropTypes from 'prop-types'

// OR can create a const below to store the styles, and pass them in with {}. This seems cleaner
const Header = ({ title }) => {
    return (
        <header>
            <h1 style={headingStyle}>{title}</h1>
            
        </header>
    )
}


Header.defaultProps = {
    title: 'defaultProp defined below the arrow function is weird though'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header
