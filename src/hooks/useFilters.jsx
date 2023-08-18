import { useContext, useState } from "react"
import { FilterContext } from "../context/filters"
import {products as initialProducts} from "../Moocks/products.json"


export function useFilters() {
  const [products] = useState(initialProducts)
    const {filters, setFilters} = useContext(FilterContext)
    
    const filterProducts = () => {
      return products.filter(product => {
        return (
          product.price >= filters.mainprice &&
          (filters.category === 'all' ||
          product.category === filters.category)
        )
      })
    }
  
    return { filterProducts, setFilters, filters }
  }