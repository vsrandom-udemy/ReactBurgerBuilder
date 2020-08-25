import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const control = [
    {label :'Salad',type : 'salad'},
    {label :'Meat',type : 'meat'},
    {label :'Cheese',type : 'cheese'},
    {label :'Bacon',type : 'bacon'}
]

const BuildControls = (props)=>{
    return(
        <div className = {classes.BuildControls}>
            <p>Current Price : <strong> $ {props.price.toFixed(2)}</strong></p>
            {
                control.map((el)=>{
                    return <BuildControl key = {el.label} label = {el.label} 
                            onAdd ={()=>props.add(el.type)}
                            onLess = {()=>props.less(el.type)}
                            disabled = {props.disabled[el.type]}
                    />
                })
            }
            <button onClick = {props.ordered} className = {classes.OrderButton} disabled = {!props.purchasable} > Order </button>
        </div>
    )   
}

export default BuildControls