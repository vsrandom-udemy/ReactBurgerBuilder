import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux.js'

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component {
        state = {
            error : null
        }

        clearErrorHandler = ()=>{
            this.setState({error : null});
        }

        constructor(props){
            super(props);
            axios.interceptors.request.use(req =>{
                this.setState({error : null})
                return req;
            })
            axios.interceptors.response.use(res=>res,error=>{
                this.setState({error : error})
            })
        }

        render(){
            return (
                <Aux>
                    <Modal show = {this.state.error} clicked = {this.clearErrorHandler}>
                    <p>{this.state.error ? this.state.error.message : null}</p>
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
}

export default withErrorHandler