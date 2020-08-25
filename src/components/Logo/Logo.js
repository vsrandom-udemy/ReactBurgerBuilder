import React from 'react'
import classes from './Logo.module.css'
import burgerLogo from '../../assets/images/27.1 burger-logo.png.png'

const Logo = (props) =>{
    return (
        <div className = {classes.Logo} style = {{height : props.height}}>
            <img src = {burgerLogo} alt = "MyBurger"/>
        </div>
    )
}

export default Logo