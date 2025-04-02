// Shop.jsx

import { useEffect, useState, useContext } from "react";
import styles from "./Shop.module.css";
import NavBar from "../Navbar/NavBar";
import { CartContext } from "../../CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({id, image, title, price, rate, count}) => {
    const { cart, addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    
    const isAlreadyInCart = cart.some((item) => item.id === id);

    const handleAddCartBtn = () => {
        if (!isAlreadyInCart) {
        addToCart({id, image, title, price});
        } else {
            navigate('/cart');
        }
    }

    return (
        <div className={styles.productCard} key={id}>
            <img src={image} />
            <h3>{title}</h3>
            <div style={{fontWeight:"bold"}}>${price}</div>
            <div className={styles.rating}>
                <span>⭐{rate}</span>
                <span>{count} sold</span>
            </div>
            <button className='addToCartBtn' onClick={handleAddCartBtn}>
                {isAlreadyInCart ? 'Go to Cart' : 'Add to Cart'}
            </button>
        </div>
    )
}

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error loading products:", error);
            }
        }
        fetchProducts();
    },[])

    return (
        <>
            <NavBar />
            <div className={styles.productContainer}>
                {products.map((product) => {
                    return (
                    <ProductCard 
                    key={product.id} 
                    id={product.id} 
                    image={product.image} 
                    title={product.title} 
                    price={product.price} 
                    rate={product.rating.rate} 
                    count={product.rating.count}
                    />
                    )
                })}
            </div>
        </>
    )
}


