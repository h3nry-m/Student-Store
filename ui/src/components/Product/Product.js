import "./Product.css";

export default function Product({ product }) {
  return (
        <div className="productInfo">
            <span className="name"><strong>{product.name}</strong></span>
            <img src={product.image} alt={product.name}/>
            {/* <span className="description">{product.description}</span> */}
            <span className="price">${product.price}</span>
          </div>
  );
}
