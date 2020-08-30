import React,{Component} from 'react'
import Aux from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

class orderSummary extends Component{
    // if we stop rendering of wrapper component then children component will not update
    // can be functional component 
    // componentDidUpdate(){
    //     console.log('[Order] componentdidupdate');
    // }

    render()
    {
        const ingredSummary = Object.keys(this.props.ingredients).map(igKey =>{
            return (
                <li key = {igKey}>
                    <span style = {{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
                </li>
            )
        })
    
        return (
            <Aux>
                <h3>Your Order : <strong>$ {this.props.price.toFixed(2)}</strong></h3>
                <p> A delicious Burger with following Ingredients : </p>
                <ul>
                    {ingredSummary}
                </ul>
                <p>Continue to Checkout ?</p>
                <Button btnType = "Danger" clicked = {this.props.cancel}>CANCEL</Button>
                <Button btnType = "Success" clicked = {this.props.continue}>CONTINUE</Button>
            </Aux>
        ) 
    }
}

export default orderSummary