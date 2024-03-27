import { useState } from 'react';
import './Cartpage.css'
import { Link } from 'react-router-dom';

function Cartpage(){

    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cartList')));
    const [totalPrice, setTotalPrice] = useState(localStorage.getItem('totalPrice'))

    const removeCart = (product) => {
        let id = product.id;
        let prices = product.price;

        let newCartList = cartList.filter((product) => product.id !== id);

        setCartList(newCartList);

        let newTotalPrice = totalPrice - prices;

        setTotalPrice(newTotalPrice.toFixed(2))
    }


    return(
        <div className='cart-div'>
            <div className="cart-window-div">
                {cartList.map((product) => (
                        <div className='cart-products-card-div'>
                          <div className='cart-products-image-div'>
                            <img className='cart-products-image-img' src={product.image}></img>
                          </div>
                          <div className='cart-products-info-div'>
                            <span className='cart-products-name-span'>{product.title}</span>
                            <span className='cart-products-quantity-span'>{product.quantity}</span>
                            <span className='cart-products-price-span'>${product.price}</span>
                            <button className='cart-products-remove-button' onClick={() => {removeCart(product)}}>Remove</button>
                          </div>
                        </div>
                ))}
            </div>
            <div className='cart-order-div'> 
                <span className='cart-total-price-span'>Total Price: ${totalPrice}</span>
                <Link to='/check-out'>
                  <button className='cart-order-button'>Order</button>
                </Link>
                
            </div>
        </div>
        
    )
}

export {Cartpage};