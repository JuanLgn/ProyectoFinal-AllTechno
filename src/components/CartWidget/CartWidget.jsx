import './style.css'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext)
  const [ total, setTotal] = useState(0);
  console.log(cart);

  useEffect(() => {
    setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0))
  }, [cart])
  return (
    <Link to={'/cart'}>
    <div>
        <img className="img-carrito" src="/img/carrito.png" alt="Carrito" />
        {total}
    </div>
    </Link>
  );
};

export default CartWidget;