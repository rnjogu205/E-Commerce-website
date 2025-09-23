import './men.css'
import product_data from '../assets/All_data'
import Item from '../Items/item.jsx'
import { Link } from 'react-router-dom'

const Men = () => {
  const filteredProducts = product_data.filter(product => product.category === 'men');

  return (
    <div className="men">
      <h1>Mens</h1>
      <hr />
      <div className="men-item-grid">
        {filteredProducts.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none", color: "inherit" }}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Men;