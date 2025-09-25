import './women.css'
import product_data from '../assets/All_data.js'
import Item from '../Items/item.jsx'
import { Link } from 'react-router-dom'

const Women = ({category}) => {

    const filteredProducts = product_data.filter(product => product.category === 'women');
    return(
        <div className="women">
            <h1>Womens</h1>
            <hr/>
            <div className="women-item-grid">
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
    )
}
export default Women