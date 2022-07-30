import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import products from './products.json'
import Product from './components/Product'
import Basket from './components/Basket'
function App() {
  const [money] = useState(128000000000)
  const [basket, setBasket] = useState([]) //initialState:[]
  const [total, setTotal] = useState(0)

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {   //acc:ilk değer sıfır. topladıkça artar.
      return acc + (item.amount * (products.find(product => product.id === item.id).price)) //tüm productlardan seçili product ı bulur.
    }, 0))   //burada total ücret hesaplanır.  ürün sayısı*ürün fiyatları 
  }, [basket])

  return (
    <>
      <Header total={total} money={money} />  {/* burada prop olarak toplam ücreti ve parayı gönderiyoruz*/}
      <div className="product_container">
        {products.map(product => (
          <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
        ))}
      </div>

      <Basket resetBasket={resetBasket} products={products} basket={basket} total={total} />
    </>
  );
}

export default App;
