import './style.css'
const Item = ({product}) => {
  return (
    <div className='item'>
      <img alt={product.name} src={product.img} width="100px"></img>
      <h2>{product.name}</h2>
      <h2>{product.price}</h2>
    </div>
  );
};

export default Item