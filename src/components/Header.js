import {moneyFormat} from '../helpers'

function Header({money,total}) {
  return (
    <div className="header">
      {total > 0 && money - total !== 0 && (  //paranın olduğunu kontrol eder
        <div>Harcayacak $ {moneyFormat( money - total)}  paranız kaldı!</div>
      )}
      {total === 0 && (
           <div>  Harcamak için $ {moneyFormat(money)}  paranız var!</div>
        ) }
        {money - total === 0 && (
          <div>Paran bitti, parasız insan boş insandır!</div>
        )}
    </div>
  )
}

export default Header