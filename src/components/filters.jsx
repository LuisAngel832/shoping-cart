import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

const Filters = ()=>{
    const {filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()


    const handleChangePrice = (e) => {
        setFilters(prevState =>({
            ...prevState,
            mainprice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState =>({
            ...prevState,
            category: e.target.value
        }))
    }

    return(
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId}>Precio  partir de: </label>
                <input onChange={handleChangePrice} type="range"  id={minPriceFilterId} min='0'
                max='1000' value={filters.mainprice} />
                <span>${filters.mainprice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria </label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
        )
}

export default Filters