import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ProductListingPage from './pages/ProductListingPage'
import ProductDetailsPage from './pages/ProductDetailsPage'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products
        const productsResponse = await axios.get('http://localhost:8000/api/products');
        const products = productsResponse.data;

        // Loop through products and fetch stock-price for each
        const updatedProducts = await Promise.all(
          products.map(async (element) => {
            try {
              const skuResponse = await axios.get(
                `http://localhost:8000/api/stock-price/${element.skus[0].code}`
              );
              element.skus[0].price = skuResponse.data.price;
              element.skus[0].stock = skuResponse.data.stock;
            } catch (error) {
              window.alert('Failed to fetch SKU', error.message);
            }
            return element;
          })
        );

        // Update state with the final list of products
        setProducts(updatedProducts);
      } catch (error) {
        window.alert('Failed to fetch products', error.message);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Fetch products
  //       const productsResponse = await axios.get('http://localhost:8000/api/products');
  //       const products = productsResponse.data;

  //       // Loop through products and fetch stock-price for each sku in the product
  //       const updatedProducts = await Promise.all(
  //         products.map(async (product) => {
  //           try {
  //             // Fetch price and stock for each SKU in the current product
  //             const updatedSkus = await Promise.all(
  //               product.skus.map(async (sku) => {
  //                 try {
  //                   const skuResponse = await axios.get(
  //                     `http://localhost:8000/api/stock-price/${sku.code}`
  //                   );
  //                   // Update SKU with price and stock data
  //                   return {
  //                     ...sku,
  //                     price: skuResponse.data.price,
  //                     stock: skuResponse.data.stock,
  //                   };
  //                 } catch (error) {
  //                   window.alert(`Failed to fetch SKU data for code ${sku.code}:`, error.message);
  //                   return sku; // Return the original sku if fetching fails
  //                 }
  //               })
  //             );

  //             // Update the product's SKUs
  //             return { ...product, skus: updatedSkus };
  //           } catch (error) {
  //             window.alert('Failed to fetch SKU data:', error.message);
  //             return product; // Return the original product if fetching fails
  //           }
  //         })
  //       );

  //       // Update state with the final list of products
  //       setProducts(updatedProducts);
  //     } catch (error) {
  //       window.alert('Failed to fetch products:', error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductListingPage products={products} />} />
        <Route path="/product/:productParam" element={<ProductDetailsPage products={products} />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App
