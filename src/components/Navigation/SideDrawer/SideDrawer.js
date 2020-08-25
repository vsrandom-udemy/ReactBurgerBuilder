import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css' 
import Aux from '../../../hoc/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer =(props)=>{
    
    let attClasses = [classes.SideDrawer, classes.Close];
    if(props.open === true) {
        attClasses = [classes.SideDrawer,classes.Open]
    }

    return (
        <Aux>
            <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className = {attClasses.join(' ')}>
                <Logo height = "11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer