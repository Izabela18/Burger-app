import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    
    let transformedIngredients = Object.keys(props.ingredients)//strings of keys, eg. cheese, meat
    .map(igKey => {//igKey is cheese, meat, etc.
        return [...Array(props.ingredients[igKey])].map((_, i) => {//transforming string into an array with elements (values), 2 elements cheese
            return <BurgerIngredient key={igKey + i} type={igKey}  />//the lenghts of arrays is important, e.g 2 cheeses
        });
    })
    .reduce((arr, el)=> {//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
        return arr.concat(el)//arr is the initial array, el is a new element//concat() method is used to merge two or more arrays
    }, []);
    if(transformedIngredients.length ===0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;