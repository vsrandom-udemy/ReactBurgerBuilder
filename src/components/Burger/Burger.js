import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const burger = (props)=>{
    let transformedIngredients = Object.keys(props.ingredient).map(igKey=>{
        let arr = [...Array(props.ingredient[igKey])]
        // console.log(arr[0])
        return arr.map((_,idx)=>{
            return <BurgerIngredient key = {igKey+idx} type = {igKey}/>
        })
    })

    let flatArray = [];
    for( var i=0;i<transformedIngredients.length;i++)
    {
        let tempArray = transformedIngredients[i];
        for(var j=0;j<tempArray.length;j++)
        {
            flatArray.push(tempArray[j]);
        }
    }
    transformedIngredients = [...flatArray];
    if(transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please Start Adding Ingredients</p>
    }
    return (
        <div className = {classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}            
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default burger