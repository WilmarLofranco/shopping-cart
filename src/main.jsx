import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage.jsx'
import Shop from './Components/Shop/Shop.jsx'
import { Cart } from './Components/Cart/Cart.jsx'
import './index.css'
import { CartProvider } from './CartContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: "cart",
    element: <Cart />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
)
