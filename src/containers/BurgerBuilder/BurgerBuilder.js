import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/action' 



class BurgerBuilder extends Component{
    // Now the left state are just UI states , need not to be managed with redux but can be if you want to !!!
    state = {
            purchasing : false,
            loading : false,
            error : false
    }
    // componentDidMount(){
    //     axios.get('https://react-burger-1f294.firebaseio.com/ingredients.json').then(response=>{
    //         this.setState({ingredients : response.data})
    //         }).catch(error=>{
    //             this.setState({error : true})
    //         })       
    // }

    purchaseHandler = ()=>{
        this.setState({purchasing : true})        
    }

    isPurchasable(newIngred){
        const sum  = Object.keys(newIngred).map(igKey =>{
            return newIngred[igKey]
        }).reduce((sum,el)=>{
            return sum+el;
        },0)
        return sum > 0
    }

    cancelPurchaseHandler = ()=>{
        this.setState({purchasing : false})
    }

    purchaseContinueHandler = ()=>{
        this.props.history.push('/checkout')
    }

    render()
    {
        const disabledInfo = {
            ...this.props.ing
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        let orderSummary = null
        let burger = this.state.error ? <p style = {{textAlign : "center"}}>Server Down :(</p> : <Spinner />
        if(this.props.ing)
        {
            orderSummary  = <OrderSummary price = {this.props.tp} cancel = {this.cancelPurchaseHandler} 
            continue = {this.purchaseContinueHandler} 
            ingredients = {this.props.ing} />
            // note this.isPurchasable is executed everytime buildcontrols gets rerendered hence we're executing it !!!
            burger = <Aux> 
                            <Burger ingredient = {this.props.ing} />
                            <BuildControls  purchasable = {this.isPurchasable(this.props.ing)}
                                price = {this.props.tp} 
                                disabled = {disabledInfo} add={this.props.addIngred}
                                ordered = {this.purchaseHandler} 
                                less = {this.props.remIngred} /> 
                        </Aux>    
        }
        if(this.state.loading)
        {
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal show = {this.state.purchasing} clicked = {this.cancelPurchaseHandler}>
                    {orderSummary}                
                </Modal>

                {burger}           
            </Aux>
        )
    }
}

const mapStateToProps = (globalState) =>{
    return {
        ing : globalState.ingredients,
        tp : globalState.totalPrice
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        addIngred : (ingName)=> dispatch({type : actionTypes.ADD_INGREDIENT, ingredName : ingName}),
        remIngred : (ingName)=> dispatch({type : actionTypes.REMOVE_INGREDIENT, ingredName : ingName})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios))