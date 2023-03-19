import './style.css'
const Item = ({product}) => {
  return (
    <div className='item'>
      <img className='imagen' alt={product.title} src={`/img/${product.image}`}></img>
      <h2 className='titulo'>{product.title}</h2>
      <h2 className='precio'>$ {product.price}</h2>
    </div>
  );
};

export default Item;