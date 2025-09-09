import './men.css'
import product_data from '../assets/All_data'
import Item from '../Items/item.jsx'

const Men = ({category}) => {

    const filteredProducts = product_data.filter(product => product.category === 'men');
    return(
        <div className="men">
            <h1>Mens</h1>
            <hr/>
            <div className="men-item-grid">
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
export default Men