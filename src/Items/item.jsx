import './Item.css'

function Item(props){
    return(
        <div className="item-card">
            <img src={props.image} alt="" className="item-image"/>
            <h3 className="item-name">{props.name}</h3>
            <p className="item-price">${props.price} CAD</p>
            <button className="add-btn">Add to Cart</button>
        </div>
    )
}
export default Item