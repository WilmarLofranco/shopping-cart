import { useEffect, useState } from "react";
import styles from "./Shop.module.css"
import NavBar from "../Navbar/NavBar";

const ProductCard = ({image, title, price, rate, count}) => {
    return (
        <div className={styles.productCard}>
            <img src={image} />
            <p>{title}</p>
            <div style={{fontWeight:"bold"}}>${price}</div>
            <div className={styles.rating}>
                <span>⭐{rate}</span>
                <span>{count} sold</span>
            </div>
            <button>Add to Cart</button>
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


