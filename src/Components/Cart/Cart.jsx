// Cart.jsx

import NavBar from '../Navbar/NavBar.jsx';
import { useContext, useState } from 'react';
import { CartContext } from '../../CartContext.jsx';
import styles from './Cart.module.css';
import { Link } from 'react-router-dom';

const ProductContainer = ({id, image, title, price, quantity, updateQuantity, removeFromCart}) => {

    return (
        <div className={styles.addedProduct}    >
            <img src={image} alt='Product Image'></img>
            <h3>{title}</h3>
            <div>
                <h3 style={{textAlign:'center'}}>${(price).toFixed(2)}</h3>
                <div className={styles.quantityChanger}>
                    <button className={styles.decrement} onClick={() => updateQuantity(id, Math.max(1, quantity - 1))}> - </button>  
                    <input 
                        style={{width:'30px', textAlign:'center'}} 
                        type='text' 
                        pattern="[0-9]*" 
                        value={quantity} 
                        onChange={(event) => {
                            const newValue = event.target.value.replace(/[^0-9]/g, "");
                            if (newValue !== "") {
                                updateQuantity(id, Math.max(1, Number(newValue))); 
                            }
                        }
                    }  
                    />
                    <button className={styles.increment} onClick={() => updateQuantity(id, quantity + 1)}> + </button>     
                </div>
                <button className='remove' style={{width:'100%'}} onClick={() => removeFromCart(id)}>Remove</button>
            </div>
        </div> 
    )
}


export const Cart = () => {
    const {cart, setCart, removeFromCart, resetCart } = useContext(CartContext);
    const [isCheckOut, setIsCheckOut] = useState(false);

    const updateQuantity = (id, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map((product) =>
                product.id === id ? { ...product, quantity: newQuantity } : product
            )
        );
    };
    
    const subTotal = cart.reduce((total, product) => total + product.price * product.quantity, 0)

    return (
        <>
        <NavBar />
        <div className='container' style={{display:'flex', margin:'0 auto', maxWidth:'1200px', position:'relative'}}>
        <div className={styles.cartContainer}>
        <h1>Cart</h1>
            {cart.length === 0 ? (<h2>Your cart is empty.</h2>) : (
                cart.map((product) => (
                                       
                    <ProductContainer 
                    key={product.id} 
                    id={product.id} 
                    image={product.image} 
                    title={product.title} 
                    price={product.price} 
                    quantity={product.quantity}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                    />
                )                  
            )
            )}
        </div >
        <div className={styles.billContainer} style={{display:'flex', flexDirection:'column', flex:'2'}}>
            <h1>BILL</h1>
            <div>
                <span>Subtotal</span>
                <span>${(subTotal).toFixed(2)}</span>
            </div>
            <div>
                <span>Shipping</span>
                <span>$19.99</span>
            </div>
            <div>
                <span>Platform Fee</span>
                <span>$1.99</span>
            </div>
            <div>
                <span>Discount</span>
                <span>0%</span>
            </div>
            <div style={{fontSize:'xx-large', marginTop:'10px'}}>
                <span>Total</span>
                <span>${(subTotal + 19.99 + 1.99).toFixed(2)}</span>
            </div>
            <button 
                style={{ marginTop:'40px', border:"none", backgroundColor:'rgb(51, 95, 238)', color:'white', borderRadius:'5px'}}
                onClick={() => {
                    resetCart();
                    setIsCheckOut(true);
                }}
                ><h2>CHECKOUT</h2>
            </button>
        </div>
        {isCheckOut && (
            <div style={{marginTop:'30px', display:'flex', gap:'20px', flexDirection:'column', justifyContent:'center', alignItems:'center', zIndex:"5", width:'100%', height:'100%', position:'absolute', top:'0', left:'0', backgroundColor:'white'}}>
                <h1>THANKS FOR SHOPPING!</h1>
                <Link to="/shop"><button style={{backgroundColor:'rgb(51, 95, 238)', color:'white', border:'none', borderRadius:"5px", padding:'10px 40px', font:'x-large bold'}}>Shop Again</button></Link>
            </div>
        )}
        </div>
        </>
    )
}

