import {useState} from 'react'

function BasketItem({item,product}) {
  return (
    <div className='basket-item'>
        {product.title} * {item.amount}
    </div>
  )
}

export default BasketItem