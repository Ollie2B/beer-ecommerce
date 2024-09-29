import React from 'react'
import ProductList from '../components/ProductList'
import Navbar from '../components/NavbarMenu'
import './ProductListingPage.css'

const ProductListingPage = (props) => {
  return (
    <>
      <Navbar />
      <div className="plp-container">
        <div className="description-text">Hi Mr. Michael,</div>
        <h1 className="plp-main-title">Welcome Back!</h1>
        <h2>Our Products</h2>
        <ProductList products={props.products} />
      </div>
    </>
  )
}

export default ProductListingPage
