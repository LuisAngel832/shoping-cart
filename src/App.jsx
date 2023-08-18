import { useFilters } from "./hooks/useFilters"
import Products  from "./components/products.jsx"
import Header from "./components/header"
import Footer from "./components/footer"
import Cart from "./components/cart"
import { CartProvider } from "./context/cart"



function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts()

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProducts} />
      <Footer/>
    </CartProvider>
  )
}

export default App
