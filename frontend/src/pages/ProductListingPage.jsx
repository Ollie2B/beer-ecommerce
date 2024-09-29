import React from 'react'
import ProductList from '../components/ProductList'
import Navbar from '../components/Navbar'

const ProductListingPage = (props) => {
  return (
    <div className="plp-container">
      <Navbar />
      <h3>Hi Mr. Michael,</h3>
      <h1>Welcome Back!</h1>
      <h2>Our Products</h2>
      <ProductList products={props.products} />
    </div>
  )
}

export default ProductListingPage
