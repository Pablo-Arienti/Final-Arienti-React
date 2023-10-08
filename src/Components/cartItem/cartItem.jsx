const CartItem = ({ nombre, price }) => { 
    return (
        <div className='cartCounter'>
            <div className='product1'>
                <h2 className='product__name'>{nombre}</h2>
                <p className='product__price'>Precio: $ {price}</p> 
            </div>
        </div>
    )
}

export default CartItem;
