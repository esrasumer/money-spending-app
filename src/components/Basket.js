import BasketItem from './BasketItem'

function Basket({ basket, products, total, resetBasket }) {
  return (
    <div className='basket-container container'>
      
      {basket.map(item => (
        <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
      ))}

      <div className='total'>
        Total: ${total}
      </div>
      <button className='basket-reset-btn' onClick={resetBasket}>Reset Card</button>

    </div>
  )
}
export default Basket