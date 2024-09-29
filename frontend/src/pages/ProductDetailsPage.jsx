import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import centsFormatter from '../helpers/centsFormatter'

const ProductDetailsPage = (props) => {
  const { productParam } = useParams()

  // Split the productParam into productId and productBrand
  const [productId, ...brandParts] = productParam.split('-')
  const productBrand = brandParts.join('-') // Join the rest back in case brand has hyphens

  const product = props.products.find((p) => p.id == productId)

   if (!product) {
     return <p>Product not found</p>
   }

  return (
    <div>
      <Navbar />
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div>
        <h2>{product.brand}</h2>
        <span>{centsFormatter(product.skus[0].price)}</span>
      </div>
      <div>
        <span>Origin: {product.origin} | Stock: {product.skus[0].stock}</span>
      </div>
      <div>
        <h3>Description</h3>
        <p>{product.information}</p>
      </div>
      <div>
        <h3>Size</h3>
        {product.skus.map((e) =>
          <button key={e.code}>
            {e.name}
          </button>
        )}
      </div>
      <div>
        <p>Icon</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDetailsPage
