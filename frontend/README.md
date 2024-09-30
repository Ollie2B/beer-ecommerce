# React Beer E-Commerce Challenge (Frontend)

Welcome to the **React Beer E-Commerce Challenge**! This is the frontend project and showcases a small part of a store web app for mobile devices. The app consists of two main pages:

1. **Product Listing Page**: Displays a list of products.
2. **Product Details Page**: Shows detailed information for each product, including price and inventory for different size variants.

The app uses a **Node.js** backend that serves product and stock information via API endpoints, and a **React** frontend that consumes these APIs.

## Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Running the App](#running-the-app)

---

## Project Structure
```
├──public # icons and assets
├── src # main
│   ├── components # react components
│   │   ├── Navbar # navigation component, with back and options buttons
│   │   ├── NavbarMenu # navigation component, with menu button and user icon
│   │   ├── ProductCard # product miniature for main list
│   │   └── ProductList # main list of products
│   ├── helpers # utilities
│   │   └── centsFormatter # convert prices
│   └── pages # react pages
│       ├── ProductDetailsPage # displays product details, options and actions
│       └── ProductListingPage # displays list of products, with name and price
├── App # React app
├── main # React main
├── style # global styles
├── eslint.config # setup linter
└── vite.config # setup vite
```

---

## Prerequisites

Ensure that you have the following installed:

- **Node.js** (version 20.17.0 or higher)
- **npm** (Node package manager)
- **Git** (optional but recommended)

---

## Running the App
> [!NOTE]
>   
> . Ensure that the backend server is running before starting the frontend, as the frontend relies on the backend APIs for fetching product and stock information. <br>
> 
> . For any unimplemented actions, such as adding products to the cart, an alert will be displayed as per the challenge requirements.

To get the frontend running:

1. **Navigate to the frontend directory**:
```cd frontend```

2. **Install dependencies**:
```npm install```

3. **Run the server**:
```npm run dev``` 
The server will run at http://localhost:5173 by default.