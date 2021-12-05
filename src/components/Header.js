import Button from './Button'

// oh destructuring props is just more efficient? (rather than passing a bloated prop object)

// this is much better resource https://beta.reactjs.org/learn/passing-props-to-a-component
// the DefaultProps and PropType thing seems unnecessary based on react docs. 
// Their style is much more readable to me
// OHH okay, and TypeScript inherently replaces react PropTypes. PropTypes are availabel for JS files. Nice feature, but I'd rather use TS.

const Header = ({ title = 'defaultTitle' }) => {
    
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1 src={headingStyle}>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
}

export default Header


