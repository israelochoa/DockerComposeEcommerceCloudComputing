import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';
function Payment() {
    const [{basket,user},dispatch]=useStateValue();
  return (
    <div 
    className='payment'>
        <div 
        className='payment__container'>
            <h1>
                Checkout (<Link to="/checkout">{basket.length} items</Link>)
            </h1>
            <div 
            className='payment__section'>
                <div 
                className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div 
                className='payment__address'>
                    <p>Hello {user ? user.email:"Guest"}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>
            <div 
            className='payment__section'>
                <div 
                className='payment__title'>
                    <h3>Review items and Delivery</h3>
                </div>
                <div 
                className='payment__items'>
                    {basket.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.range}
                        />
    
                    ))}
                </div>
            </div>
            <div 
            className='payment__section'>
                <div 
                className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div 
                className='payment__detail'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment