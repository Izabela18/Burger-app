import React, {Component} from 'react';
import Aux from '../../../hoc/aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {//igKey is salad, cheese, etc.//{props.ingredients[igKey]} is the value
            return(
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span>
                </li>);
        });
        return (
            <Aux>
                <h3>Your order</h3>
                 <p>Your delicious burger with the following ingredients: </p>
                 <ul>
                     {ingredientSummary}
                </ul>
                 <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );

    }
}

export default OrderSummary;