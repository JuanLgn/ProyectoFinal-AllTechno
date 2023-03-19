import './style.css'
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, getFirestore, doc, updateDoc } from 'firebase/firestore';

const Cart = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();

  const createOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();

    const querySnapshot = collection(db, 'orders');

    addDoc(querySnapshot, {
      buyer: {
        email: formValue.email,
        name: formValue.name,
        phone: formValue.phone,
      },
      products: cart.map((product) => {
        return {
          title: product.name,
          price: product.price,
          id: product.id,
          quantity: product.quantity,
        };
      }),
      total: total,
    })
    .then((response) => {
      console.log(response.id);
      alert(`La orden: ${response.id} ha sido creada`)
      updateStocks(db);
    })
    .catch( (error) => console.log(error))
  };

  const updateStocks = (db) => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, 'products', product.id);

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
      .then(() => {
        alert('El stock de los productos ha sido actualizado');
      })
      .catch((error) => console.log(error));
    });
  };

const handleInput = (event) => {
  setFormValue({
    ...formValue,
    [event.target.name]: event.target.value,
  });
};
return (
  <div className="cart-containerc">
    <div>
      {cart.map((product) => (
        <div className="div" key={product.id}>
            <img className='imgCart' src={`/img/${product.image}`} alt={product.name} width="100px"/>
            <h2 className='cartPdName'>{product.name}</h2>
            <h2 className='cartPdPrice'>${product.price}</h2>
            <h2 className='cartPdQuantity'>{product.quantity}</h2>
            <button onClick={() => removeItem(product.id)}>❌</button>
        </div>
      ))}
        {cart.length > 0 && <button className='clearCart' onClick={clear}>Vaciar carrito</button>}
        {cart.length > 0 && (
          <div className='divNoCart'>
            <Button onClick={() => navigate('/')} variant="outline-success">Continúa Comprando</Button>
            <span>El valor total de tu compra es: ${total} usd </span>
        </div>
      )}
    </div>
    <div>
    {cart.length === 0 && <h2 className='noProducts'>No hay productos en el carrito</h2>}
    {cart.length > 0 && <h2 className='tabla'>Completa la tabla</h2>}
    {cart.length > 0 && <form className="cartForm">
        <input
          name="name"
          type="text"
          placeholder="nombre "
          value={formValue.name}
          onChange={handleInput}
        />
        <input
          name="phone"
          type="text"
          placeholder="telefono "
          value={formValue.phone}
          onChange={handleInput}
        />
        <input
          name="email"
          type="email"
          placeholder="email "
          value={formValue.email}
          onChange={handleInput}
        />
        {cart.length > 0 && <Button className='orderButton' onClick={createOrder} variant="outline-success">Completar compra</Button>}
      </form>}
    </div>
  </div>
);
};

export default Cart;