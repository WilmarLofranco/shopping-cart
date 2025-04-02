import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import home from "../../assets/home-outline.svg"
import shop from "../../assets/shopping-outline.svg"
import cart from "../../assets/cart-outline.svg"
import styles from "./NavBar.module.css"

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
    return (
    <div className={styles.nav}>
        <NavLink to='/cart' className={styles.navlink}><img className={styles.icons} src={cart} alt="Shopping cart Icon" /></NavLink>
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