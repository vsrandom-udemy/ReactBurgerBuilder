import React from 'react'

import classes from './Order.module.css'

const order =(props)=>{
    let ingredients = []
    for(let ingredient in props.ingredients)
    {
        ingredients.push({
            name : ingredient,
            amount : props.ingredients[ingredient]
        })
    }

    const ingred = ingredients.map(el=>{
    return <span key = {el.name} style = {{
        textTransform : 'capitalize',
        display : 'inline-block',
        margin : '0 8px',
        border : '1px solid #ccc',
        padding  : '5px'
    }}>{el.name}  {el.amount}</span>
    })

    return (
        <div className = {classes.Order}>
            <p>Ingredients : {ingred} </p>
            <p> Price <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order