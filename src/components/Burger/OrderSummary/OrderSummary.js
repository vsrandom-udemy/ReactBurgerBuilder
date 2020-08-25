import React from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = (props)=>{
    const ingredSummary = Object.keys(props.ingredients).map(igKey =>{
        return (
            <li key = {igKey}>
                <span style = {{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>
        )
    })

    return (
        <Aux>
            <h3>Your Order : <strong>$ {props.price.toFixed(2)}</strong></h3>
            <p> A delicious Burger with following Ingredients : </p>
            <ul>
                {ingredSummary}
            </ul>
            <p>Continue to Checkout ?</p>
            <Button btnType = "Danger" clicked = {props.cancel}>CANCEL</Button>
            <Button btnType = "Success" clicked = {props.continue}>CONTINUE</Button>
        </Aux>
    )    
}

export default orderSummary