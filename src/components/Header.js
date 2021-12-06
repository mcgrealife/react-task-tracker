import Button from './Button'

const Header = ({ title = 'defaultTitle', onClick }) => {


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


