import { Link } from 'react-router-dom'
import NavBar from '../Navbar/NavBar'
import img1 from '../../assets/carousel-img/img1.jpg'
import img2 from '../../assets/carousel-img/img2.jpg'
import img3 from '../../assets/carousel-img/img3.jpg'
import Carousel from '../Carousel/Carousel.jsx'
import styles from './Homepage.module.css'

const images = [img1, img2, img3];

function Homepage() {
  return (
    <>
      <NavBar />
      <div className={styles.homepage}>
      <Carousel images={images} interval={3000} />
      <h2>Will's Cart – Your One-Stop Shop!</h2>
      <i><h3 style={{textAlign:'center'}}>Discover a wide range of products, from trendy clothing to the latest electronics, home essentials, and more. At Will's, we bring you quality, variety, and great deals—all in one place. Shop with confidence and find everything you need, effortlessly!
      </h3></i>
      <Link to='shop'><button>Shop Now!</button></Link>
      </div>
    </>
  )
}

export default Homepage
