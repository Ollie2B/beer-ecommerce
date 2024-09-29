import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ProductCard.css'
import centsFormatter from '../helpers/centsFormatter'

const ProductCard = ({ product }) => {
  const formattedBrand = product.brand.toLowerCase().replace(/\s+/g, '-')
  const navigateTo = useNavigate()

  return (
    <div className="product-card">
      <span className='product-brand'>{product.brand}</span>
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      
      <div className='product-card-footer'>
        <span className='product-price'>{centsFormatter(product.skus[0].price)}</span>
        <button className='add-button' onClick={()=> navigateTo(`/product/${product.id}-${formattedBrand}`)}>
          <img src='/icon-plus.svg' alt='add'/>
        </button>
      </div>    
    </div>
  )
}

export default ProductCard
