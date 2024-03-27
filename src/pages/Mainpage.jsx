import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Mainpage.css'

function Mainpage(){
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
    .then((res) => {
      setProductList(res.data);
    })
    .catch((error) => {
      console.error('Ошибка при загрузке товаров:', error);
    });
  }, [])
  
  const addToBag = (product) => {
    let quantity = 1;
    let price = product.price;
    let id = product.id
    if(cartList.some(item => item.id === id)){
      let newCartList = cartList.map((product) => {
        if(product.id === id){
          product.price+=price;
          product.quantity++;
        }
        return product
      })
      setCartList(newCartList)
    }else{
      setCartList([...cartList, {...product, quantity: quantity}])
    }
    let newTotalPrice = totalPrice;
    newTotalPrice +=product.price;
    setTotalPrice(newTotalPrice)
  }

  localStorage.setItem('cartList',JSON.stringify(cartList));
  localStorage.setItem('totalPrice', totalPrice.toFixed(2));

  return(
        <div className='shop-window-div'>
          {productList.map((product) => {
            return(
                <div className='products-card-div'>
                  <div className='products-image-div'>
                    <img className='products-image-img' src={product.image}></img>
                  </div>
                  <div className='products-info-div'>
                    <Link to={`product/${product.id}`} className='products-name-span'>{product.title}</Link>
                    <span className='products-price-span'>${product.price}</span>
                    <button className='products-add-to-bag-button' onClick={() => {addToBag(product)}}>Add to Bag</button>
                  </div>
                </div>
            )
          })}  
        </div>
  )
}

export {Mainpage};