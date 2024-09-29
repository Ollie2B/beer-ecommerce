import http from 'http';
import { parse } from 'url';

import products from './data/products.js';
import stockPrices from './data/stock-price.js';

const server = http.createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Set response headers for JSON
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
  res.setHeader('Content-Type', 'application/json');

  // Handle GET requests to /api/products
  if (method === 'GET' && path === '/api/products') {
    res.writeHead(200);
    res.end(JSON.stringify(products));

  // Handle GET requests to /api/stock-price/:sku
  } else if (method === 'GET' && path.startsWith('/api/stock-price/')) {
      const sku = path.split('/').pop();
      const stockItem = stockPrices[sku];

      if (stockItem) {
          res.writeHead(200);
          res.end(JSON.stringify(stockItem));
      } else {
          res.writeHead(404);
          res.end(JSON.stringify({ message: 'Stock not found' }));
      }

  // Handle invalid routes
  } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});