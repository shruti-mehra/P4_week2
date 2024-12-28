import React, { useEffect, useState } from 'react'

import productsData from "../../data/products.json"
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const filters = {
    categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics'],
    colors: ['all', 'black', 'gold', 'blue', 'silver', 'beige', 'green'],
    priceRanges: [
        {label: 'Under $50', min: 0, max: 50},
        {label: '$50 - $100', min: 50, max: 100},
        {label: '$100 - $200', min: 100, max: 200},
        {label: '$200 or above', min: 200, max: Infinity}
    ]
};

const ShopPage = () => {
    const [products, setProducts] = useState(productsData);
    const [filterState, setFilterState] = useState({
        categories: 'all',
        colors: 'all',
        priceRange : ''
    });

    // const [currentPage, setCurrentPage] = useState(1);
    // const [ProductsPerPage] = useState(8);

    // const { category, color, priceRange} = filterState;
    // const [minPrice, maxPrice] = priceRange.split('-').map(Number);

    // const {data: {products = [], totalPages, totalProducts} = {}, error, isLoading } = useFetchAllProductsQuery({
    //     category: category !== 'all' ? category: '',
    //      color: color !== 'all' ? color: '',
    //       minPrice: isNaN(minPrice) ? '' : minPrice,
    //       maxPrice: isNaN(maxPrice) ? '' : maxPrice,
    //       page :currentPage, 
    //       limit : ProductsPerPage,
    // })
const applyFilters = () => {
    let filteredProducts = productsData;

    if(filterState.category && filterState.category !== 'all'){
        filteredProducts = filteredProducts.filter(product => product.category=== filterState.category)
    }
    if(filterState.color && filterState.color !== 'all'){
        filteredProducts = filteredProducts.filter(product => product.color === filterState.color)
    }
    if(filterState.priceRange){
        const [minPrice, maxPrice] = filterState.priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice)
    }
    setProducts(filteredProducts)
}

useEffect(() => {
    applyFilters()
}, [filterState])

const clearFilters = () => {
    setFilterState({
        categories: 'all',
        colors: 'all',
        priceRange : ''
    })
} 
// if(isLoading) return <div>Loading...</div>
// if(error) return <div>Error leading products.</div>
  return (
    <>
      <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>Shop Page</h2>
        <p className='section__subheader'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odit doloremque placeat qui exercitationem commodi.</p>
     </section>

     <section className='section__container'>
<div className='flex flex-col md:flex-row md:gap-12 gap-8'>
    
    <ShopFiltering filters={filters} filtersState={filterState} setFiltersState={setFilterState} clearFilters={clearFilters} />




    <div>
        <h3 className='text-xl font-medium mb-4'>Products Available: {products.length}</h3>
        <ProductCards products={products}/>
    </div>
</div>
     </section>
    </>
  )
}

export default ShopPage
