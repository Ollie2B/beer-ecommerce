import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import centsFormatter from '../helpers/centsFormatter'
import axios from 'axios'
import './ProductDetailsPage.css'

const ProductDetailsPage = (props) => {
  const { productParam } = useParams()
  const [productId, ...brandParts] = productParam.split('-')

  const [selectedSku, setSelectedSku] = useState(0)
  const [skusData, setSkusData] = useState({})
  
  const product = props.products.find((p) => p.id == productId)

  const fetchSkuDetails = async (sku, index) => {
    try {
      const skuResponse = await axios.get(`http://localhost:8000/api/stock-price/${sku}`)
      setSkusData(skuResponse.data)  
    } catch (error) {
      window.alert('Failed to load sku data')
    }
  }

  useEffect(() => {
    if(product) fetchSkuDetails(product.skus[selectedSku].code)
    const intervalId = setInterval(() => {
      if(product) fetchSkuDetails(product.skus[selectedSku].code)
    }, 5000)
    return () => clearInterval(intervalId)
  }, [selectedSku, props.products])

  if (!product) {
    return <p>Product not found</p>
  }

  return (
    <div>
      <Navbar />
      <div className="product-details-image-container">
        <img src={product.image} alt={product.name} className="product-details-image" />
      </div>
      <div className="product-details-description-container">
        <h1 className="product-details-name-price">
          <span>{product.brand}</span>
          <span className="highlight-text">{centsFormatter(skusData.price)}</span>
        </h1>
        <span className="description-text">Origin: {product.origin} | Stock: {skusData.stock}</span>
        <h3 className="section-title">Description</h3>
        <p className="description-text">{product.information}</p>
        <h3 className="section-title">Size</h3>
        <div className="product-details-options">
          {product.skus.map((e, i) =>
            <button className={selectedSku === i ? 'badged-option-active' : 'badged-option'} key={e.code} onClick={()=> setSelectedSku(i)}>
              {e.name}
            </button>
          )}
        </div>
        <div className="product-details-actions">
          <div className='product-details-cart-icon'>
            <img src='/icon-bag.svg' alt='cart'/>
          </div>
          <button className="product-details-addtocart-button">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
