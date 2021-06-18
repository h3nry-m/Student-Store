import { Link } from "react-router-dom";
import "./DisplayProducts.css";
import Product from "../Product/Product"

export default function DisplayProducts({ products }) {
  return (
    <div className="DisplayProducts">
      <h2>Current Products</h2>
      {products.map((product, key) => (
          <Link key={product.id} to={`/${product.id}/`}>
                <Product product={product} />
            </Link>
      ))}
    </div>
  );
}
