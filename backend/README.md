

# React Beer E-Commerce Challenge

Welcome to the **React Beer E-Commerce Challenge**! This is the backend project and showcases a small part of a store web app for mobile devices. The app consists of two main endpoints:

1. **Get Products**: Returns a list of all products and their details.
2. **Get Stock and price by SKU**: Returns price and stock information for a given product size variant (identified by SKU).

The app uses a **Node.js** backend that serves product and stock information via API endpoints, and a **React** frontend that consumes these APIs.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)

---

## Project Structure
```
├── data # Node.js backend code <br/>
│   ├── products # data returned by get /products
│   └── stock-price # data returned by get /stock-price/:sku
└── server # main entry point and endpoints definition<br/>
```

---

## Prerequisites

Ensure that you have the following installed:

- **Node.js** (version 20.17.0 or higher)
- **npm** (Node package manager)
- **Git** (optional but recommended)

---

## Running the app

To get the backend server running:

1. **Navigate to the backend directory**:
```cd backend```

2. **Install dependencies**:
```npm install```

3. **Run the server**:
```npm start``` 
The server will run at http://localhost:8000 by default.

---

## API endpoints
```GET /api/products```
Returns a list of all products and their details.

```GET /api/stock-price/:sku```
Returns price and stock information for a given product size variant (identified by SKU).
