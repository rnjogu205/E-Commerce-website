import { useParams } from "react-router-dom";
import product_data from "../assets/All_data";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const Product = () => {
  const { productId } = useParams(); 
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);


  const product = product_data.find((p) => p.id.toString() === productId);

  if (!product) {
    return <h2>Product not found</h2>; 
  }

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />

      <div className="product-details">
        <div className="size-options">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className={`size-option ${selectedSize === size ? "active" : ""}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          className="add-to-cart"
          onClick={() => selectedSize && addToCart(product, selectedSize)}
          disabled={!selectedSize}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;