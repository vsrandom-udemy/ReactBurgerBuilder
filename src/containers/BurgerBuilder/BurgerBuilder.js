import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const PRICES = {
    salad : 0.3,
    bacon : 0.4,
    cheese : 0.5,
    meat : 0.6
}

class BurgerBuilder extends Component{
    state = {
            ingredients : {
                salad : 0,
                bacon : 0,
                cheese : 0,
                meat : 0
            },
            totalPrice : 4,
            purchasable : false,
            purchasing : false
    }

    purchaseHandler = ()=>{
        this.setState({purchasing : true})        
    }

    isPurchasable(newIngred){
        const sum  = Object.keys(newIngred).map(igKey =>{
            return newIngred[igKey]
        }).reduce((sum,el)=>{
            return sum+el;
        },0)
        this.setState({purchasable : sum > 0})
    }

    addIngredientHandler = (type) =>{
        const count = this.state.ingredients[type]+1;
        const price = this.state.totalPrice + PRICES[type];
        const newIngred = {
            ...this.state.ingredients
        }
        newIngred[type] = count;
        this.setState({ingredients : newIngred,totalPrice : price});
        this.isPurchasable(newIngred)
    }

    removeIngredientHandler = (type) =>{
        const count = this.state.ingredients[type]-1;
        if(count < 0)
        {
            return ;
        }
        const price = this.state.totalPrice - PRICES[type];
        const newIngred = {
            ...this.state.ingredients
        }
        newIngred[type] = count;
        this.setState({ingredients : newIngred,totalPrice : price});
        this.isPurchasable(newIngred)
    }

    cancelPurchaseHandler = ()=>{
        this.setState({purchasing : false})
    }

    purchaseContinueHandler = ()=>{
        alert('Your Burger is on its way to YOU !!!')
    }

    render()
    {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing} clicked = {this.cancelPurchaseHandler}>
                    <OrderSummary price = {this.state.totalPrice} cancel = {this.cancelPurchaseHandler} 
                    continue = {this.purchaseContinueHandler} 
                    ingredients = {this.state.ingredients} />
                </Modal>

                <Burger ingredient = {this.state.ingredients} />
                <BuildControls  purchasable = {this.state.purchasable}
                                price = {this.state.totalPrice} 
                                disabled = {disabledInfo} add={this.addIngredientHandler}
                                ordered = {this.purchaseHandler} 
                                less = {this.removeIngredientHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder