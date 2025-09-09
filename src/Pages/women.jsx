import './women.css'
import product_data from '../assets/All_data.js'
import Item from '../Items/item.jsx'

const Women = ({category}) => {

    const filteredProducts = product_data.filter(product => product.category === 'women');
    return(
        <div className="women">
            <h1>Womens</h1>
            <hr/>
            <div className="women-item-grid">
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
export default Women