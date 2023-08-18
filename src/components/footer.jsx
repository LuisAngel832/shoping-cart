import './footer.css'
import { useFilters } from '../hooks/useFilters'
import Cart from './cart'
import useCart from '../hooks/useCart'

const Footer = ()=>{
    const {filters} = useFilters()
    const {cart} = useCart()

    return(
        <footer className="footer">
            {/* {
               JSON.stringify(filters,null, 2) 
            } */}


            {/* <h1>Prueva tecnica de React *</h1>
            <span>@LuisAngel</span>
            <h5>Shoping car con useContext & useReducer</h5> */}
        </footer>
    )

}

export default Footer