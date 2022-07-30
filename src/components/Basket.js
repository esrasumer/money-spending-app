import BasketItem from './BasketItem'

function Basket({ basket, products, total, resetBasket }) {
  return (
    <div className='basket-container container'>
      
      {basket.map(item => (
        <BasketItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
      ))}

      <div className='total'>
        Toplam: ${total}
      </div>
      <button className='basket-reset-btn' onClick={resetBasket}>Sepeti Sıfırla</button>

    </div>
  )
}
export default Basket