import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useNavigate} from 'react-router-dom';
function  Subtotal() {
    const history=useNavigate();
    const [{basket,user}, dispatch]= useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
                <p>
                    Subtotal ( 0 items):
                    <strong>{value}</strong>
                </p>
                <small 
                className='subtotal__gift'>
                    <input type="checkbox" />
                This orden contains a gift
                </small>
            </>
        )
        }
        displayType='text'
        value={getBasketTotal(basket)}
        decimalScale={2}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button onClick={e=> {
            if(!user) 
                history('/payment')
            }}>
            Proceed to Checkout
        </button>
    </div>
  )
}

export default Subtotal;