import './checkout-item.styles.scss';

const CheckoutItem = ({item, removeItemFromCart, addItemToCart, deleteProductFromCart}) => {
    const {name, imageUrl, quantity, price} = item;  
    const removeItemHandler = () => removeItemFromCart(item);
    const addItemHandler = () => addItemToCart(item)
    const deleteProductHandler = () => deleteProductFromCart(item)
    
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            
            <span className='quantity'>
                <div onClick={removeItemHandler} className='arrow'>&#10094;</div> 
                <span className='value'>{quantity}</span> 
                <div onClick={addItemHandler} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={deleteProductHandler} className='remove-button'>&#10060;</div>   
            <hr />
        </div>
        )

};

export default CheckoutItem;