import './Item.css'
import {useCart} from '../Context/CartContext';

function Item(props){
    const {addToCart} = useCart();
    return(
        <div className="item-card">
            <img src={props.image} alt="" className="item-image"/>
            <h3 className="item-name">{props.name}</h3>
            <p className="item-price">${props.price} CAD</p>
        </div>
    )
}
export default Item