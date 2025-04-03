import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import home from "../../assets/home-outline.svg";
import shop from "../../assets/shopping-outline.svg";
import cartIcon from "../../assets/cart-outline.svg";
import styles from "./NavBar.module.css";
import { CartContext } from "../../CartContext";
import { useContext } from "react";

const Logo = () => {
    return (
    <div style={{display:'flex'}}>
        <img src={logo} alt="WL Brand Logo" style={{width:"80px", height:"auto"}}/>
        <h1>WillCart</h1>
    </div>
    )
}

const MiddleNav = () => {
    return (
    <div className={styles.nav} style={{display:"flex", gap:"20px", alignItems:"center", justifyContent:'center'}}>
        <NavLink to='/' className={styles.navlink} style={{display:'flex', alignItems:'center', textDecoration:'none'}}><img className={styles.icons} src={home} alt="Home Icon" style={{width:"56px", height:"auto"}}/>
        <h2>Home</h2>
        </NavLink>
        <NavLink to='/shop' className={styles.navlink} style={{display:'flex', alignItems:'center', textDecoration:'none'}}><img className={styles.icons} src={shop} alt="Shop Icon" />
        <h2>Shop</h2>
        </NavLink>
    </div>
    )
}

const Cart = () => {
    const {cart} = useContext(CartContext)

    return (
    <div className={styles.cartBtn} style={{position:'relative'}}>
        <NavLink to='/cart'><img style={{width:'50px'}} src={cartIcon} alt="Shopping cart" /></NavLink>
        {(cart.length > 0) && (
            <div style={{backgroundColor:'red', width:'20px', height:'20px', position:'absolute', top:'10px', right:'10px', borderRadius:'10px', textAlign:'center', color:'white'}}>
                {cart.length}
            </div>
        )}
    </div>
    )
}

export default function NavBar() {
    return (
        <div className={styles.navContainer}>
            <div>
                <Logo />
                <MiddleNav />
                <Cart />
            </div>
        </div>
    );
}