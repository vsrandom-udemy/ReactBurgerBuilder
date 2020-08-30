import * as actionTypes from './action'

const initialState ={
    ingredients : {
        salad : 0,
        bacon : 0,
        cheese : 0,
        meat : 0
    },
    totalPrice : 4
}

const PRICES = {
    salad : 0.3,
    bacon : 0.4,
    cheese : 0.5,
    meat : 0.6
}

const reducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT :
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredName] : state.ingredients[action.ingredName] + 1
                },
                totalPrice : state.totalPrice + PRICES[action.ingredName]
            }
        case actionTypes.REMOVE_INGREDIENT :
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.ingredName] : state.ingredients[action.ingredName] - 1
                },
                totalPrice : state.totalPrice - PRICES[action.ingredName]
            }
        default : 
            return state;
    }
}

export default reducer