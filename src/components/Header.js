// prop types
import PropTypes from 'prop-types'


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

// I can still pass a number in {}, and the propTypes will convert it to a string. The console will show a warning though. Seems unnecessarily complicated. Can TypeScript handle easier prop type definitions?
Header.propTypes = {
    title: PropTypes.string
}

export default Header
