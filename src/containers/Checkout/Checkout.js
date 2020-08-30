import React,{Component} from 'react'
import {connect} from 'react-redux'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData'

class Checkout extends Component{

    checkoutCancelled = ()=>{
        this.props.history.goBack();
    }

    checkoutContinued = ()=>{
        this.props.history.replace('/checkout/contact-data')
    }

    render(){
        return (
            <div >
                <CheckoutSummary checkoutCancelled = {this.checkoutCancelled} 
                checkoutContinued = {this.checkoutContinued} ingredients = {this.props.ing} />
                <Route path = {this.props.match.path + '/contact-data'} 
                component = {ContactData}/> 
            </div>
        )
    }
}

const mapStateToProps = (globalState)=>{
    return {
        ing : globalState.ingredients
    }
}


export default connect(mapStateToProps)(Checkout)