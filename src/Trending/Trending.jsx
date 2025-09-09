import './Trending.css'
import product_data from '../assets/Data.js'
import Item from '../Items/item.jsx'

const Trending = ({category}) => {

    const filteredProducts = product_data.filter(product => product.category === category);
    return(
        <div className="trending">
            <h2>Trending in {category === "men" ? "Men" : "Women"}</h2>
            <hr/>
            <div className="trending-item-grid">
                {filteredProducts.map((item)=> {
                return <Item 
                key={item.id} 
                id={item.id} 
                name={item.name}
                image={item.image} 
                price={item.price}/>})}
            </div>
        </div>
    )
}
export default Trending