# 🛍️ [Nimble Wear](https://nimble-wear.vercel.app)

**Nimble Wear** is an e-commerce platform where users can explore and purchase stylish clothing from Nimble. It offers a seamless shopping experience with advanced filtering, wishlist management, and a personalized user account systems.

## 🚀 Features

### 🛒 Shopping & Product Browsing
- Browse a wide range of **Nimble** clothing items.
- Advanced **filtering options** by price, color, and size.
- **Sorting functionality** for a better user experience.
- Discounts & special offers are highlighted.
- **Swiper.js** for interactive product carousels.
- **React Fast Marquee** for smooth scrolling banners.

### 🔄 Compare Products
- Select and compare multiple products side-by-side.
- View differences in price, materials, and specifications.
- Remove items from comparison when needed.

### 💳 Secure Checkout & Payments
- Seamless **cart management** and checkout process.
- **Stripe.js** integration for secure payments.
- **Real-time order confirmation** after checkout.

### 📜 User Account & Authentication
- **User registration & login** with "Remember Me" functionality.
- **Dashboard** to track orders and manage account details.
- **Profile management**, including name, email, and phone updates.
- Secure **password change & reset** functionality.
- **Redux Toolkit & Redux Persist** for state management.
- **React Toastify** for elegant notifications.

### ❤️ Wishlist
- Save products to a **wishlist** for future purchases.
- Easily access wishlist items from the user dashboard.

### 📦 Order Management
- View **order history** and details from the account dashboard.
- Track the status of your purchases.

### 📅 Date & Form Handling
- **Moment.js** for date and time formatting.
- **Formik & Yup** for form validation.

### 🔄 API & Data Management
- **JSON Server** for mock API data management.
- **React Select** for better dropdown selections.

## 🔧 Technologies Used
- **Frontend:** Next.js, React.js, Tailwind CSS, Swiper.js
- **State Management:** Redux Toolkit, Redux Persist
- **Backend:** Node.js, Express.js, JSON Server (for mock API)
- **Database:** MongoDB
- **Authentication:** JWT-based authentication
- **Payment Gateway:** Stripe.js, React Stripe.js
- **Validation & Forms:** Formik, Yup
- **UI Enhancements:** React Icons, React Toastify, React Fast Marquee
- **Date Management:** Moment.js

<!-- ## 📸 Screenshots
![Product Page](./screenshots/product-page.png)
![User Dashboard](./screenshots/user-dashboard.png) -->

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Rjk-Jami/Nimble-Clothing-Next.js

# Navigate to project directory
cd nimble-wear

# Install dependencies
npm install

# Create a .env.local file in the root of your project
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = "your-STRIPE-PUBLISHABLE-KEY"
NEXT_PUBLIC_SERVER_API = "your-server-api http://localhost:5000/api/v1"

# Run the development server
npm run dev
