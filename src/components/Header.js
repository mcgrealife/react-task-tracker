import React from 'react'
import Button from './Button'

const Header = ({ title = 'React Tasks', onClick }) => {


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


