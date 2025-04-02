// Cart.jsx

import NavBar from '../Navbar/NavBar.jsx';
import { useContext, useState } from 'react';
import { CartContext } from '../../CartContext.jsx';
import styles from './Cart.module.css';

const ProductContainer = ({id, image, title, price}) => {
    const [quantity, setQuantity] = useState(1);
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className={styles.addedProduct} key={id}>
            <img src={image} alt='Product Image'></img>
            <h3>{title}</h3>
            <div>
                <h3 style={{textAlign:'center'}}>${(price * quantity).toFixed(2)}</h3>
                <div className={styles.quantityChanger}>
                    <button className={styles.decrement} onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : prev)}> - </button>  
                    <input style={{width:'30px', textAlign:'center'}} type='text' pattern="[0-9]*" value={quantity} onChange={(event) => setQuantity(Number(event.target.value.replace(/[^0-9]/g, '')))} />
                    <button className={styles.increment} onClick={() => setQuantity((prev) => prev + 1)}> + </button>     
                </div>
                <button className='remove' style={{width:'100%'}} onClick={() => removeFromCart(id)}>Remove</button>
            </div>
        </div> 
    )
}


export const Cart = () => {
    const {cart} = useContext(CartContext);

    return (
        <>
        <NavBar />
        <div className={styles.cartContainer}>
        <h1>Cart</h1>
            {cart.length === 0 ? (<h2>Your cart is empty.</h2>) : (
                cart.map((product) => (
                     
                    <ProductContainer id={product.id} image={product.image} title={product.title} price={product.price} />
                    
                ))
            )}
        </div>
        </>
    )
}

