import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({detail}) => {
  const navigate = useNavigate();
  const  { addItem } = useContext(CartContext);
  const [count, setCount] = useState(detail?.stock === 0 ? 0 : 1);
  return ( 
  <div style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        padding: "20px", 
        flexDirection: "column"
    }}
    >
        <img src={`/img/${detail.image}`} alt={detail.title} width="200px"/>
        <h2 className="nameh2">{detail.title}</h2>
        <h3>{detail.price}</h3>
        <h3>Description: {detail.description}</h3>
        <h3>Stock: {detail.stock}</h3>
        <ItemCount count={count} setCount={setCount} />
        <Button onClick={() => navigate('/')} variant="outline-success">Continúa Comprando</Button>

        <Button disabled={count > detail.stock ? true: false} onClick={() => addItem( detail, count)} variant="outline-success">Agregar al carrito</Button>
        
        <Button onClick={() => navigate('/cart')} variant="outline-success">Completar mi compra</Button>
    </div>
  );
};

export default ItemDetail;
