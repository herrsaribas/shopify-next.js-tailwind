# Headless Shopify Storefront using Next.js, Shopify Storefront API, Tailwind CSS, and Vercel


![68747470733a2f2f63646e2e73686f706966792e636f6d2f732f66696c65732f312f303532342f343339302f363230372f66](https://user-images.githubusercontent.com/77645494/236155454-65b57bf1-2dfc-4b6a-88f6-705fc0f92bad.gif)


This is a production-ready headless Shopify storefront built with Next.js, Shopify Storefront API (GraphQL), Tailwind CSS, and deployed on Vercel. This project is based on the "Learn Shopify + Next.js + Tailwind CSS" course available at [www.BuildNextShop.com](http://www.BuildNextShop.com).

## Overview

The project demonstrates how to create a headless Shopify storefront using Next.js, a React framework, along with Tailwind CSS for styling. It leverages the Shopify Storefront API (GraphQL) to fetch product data and display it on the front-end. The project is optimized for deployment on Vercel, a cloud platform for static and serverless deployment.

## Features

- Fetch and display product data from Shopify using the Storefront API (GraphQL).
- Dynamically generate product pages based on the available products in the Shopify store.
- Responsive and mobile-friendly design with Tailwind CSS.
- Integrated search functionality to search for products.
- Shopping cart functionality to add products and manage the cart.
- Checkout process with Shopify's checkout system.

## Prerequisites

Before getting started with this project, make sure you have the following prerequisites:

- Node.js (v14 or later) and npm installed on your machine.
- A Shopify account with a store set up.
- Access to the Storefront API credentials (Storefront API key, Shopify store domain).

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install the dependencies:

```bash
npm install
```

3. Configure your Shopify Storefront API credentials:

   - Create a `.env.local` file in the root directory of the project.
   - Add the following environment variables to the `.env.local` file:

     ```plaintext
     SHOPIFY_STOREFRONT_API_TOKEN=your-storefront-api-token
     SHOPIFY_STORE_DOMAIN=your-shopify-store-domain
     ```

     Replace `your-storefront-api-token` with your Shopify Storefront API token, and `your-shopify-store-domain` with your Shopify store domain.

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and visit `http://localhost:3000` to see the application running locally.

## Deployment

To deploy the application to Vercel, follow these steps:

1. Create an account on Vercel (if you haven't already) at [vercel.com](https://vercel.com).

2. Install the Vercel CLI globally:

```bash
npm install -g vercel
```

3. Log in to Vercel via the CLI:

```bash
vercel login
```

4. Initialize the project:

```bash
vercel init
```

5. Follow the prompts to configure your project settings.

6. Deploy the project:

```bash
vercel
```

7. Vercel will provide you with a URL where your application is deployed.

## Customization

You can customize various aspects of the project to fit your specific requirements:

- **Styling**: The project uses Tailwind CSS for styling. You can modify the styles by editing the CSS classes in the components or by adding custom styles in the appropriate files.

- **Layout**: The project uses a default layout for the pages. You can modify the layout by editing the `Layout` component.

- **Components**: The project provides various reusable components such as `ProductCard`, `SearchBar`, `Cart`, etc. You can
