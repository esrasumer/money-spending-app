import {moneyFormat} from '../helpers'

function Header({money,total}) {
  return (
    <div className="header">
      {total > 0 && money - total !== 0 && (  //paranın olduğunu kontrol eder
        <div>You have $ {moneyFormat( money - total)}  left to spend!</div>
      )}
      {total === 0 && (
           <div>  You have $ {moneyFormat(money)}  to spend!</div>
        ) }
        {money - total === 0 && (
          <div>You're out of money, moneyless people are empty people!</div>
        )}
    </div>
  )
}

export default Header