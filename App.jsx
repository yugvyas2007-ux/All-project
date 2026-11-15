import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./layouts/Layout";
import AuthLayout from "./layouts/AuthLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const { ProductList, ProductDetail } = {
  ProductList: lazy(() => import("./pages/Products").then((module) => ({ default: module.ProductList }))),
  ProductDetail: lazy(() => import("./pages/Products").then((module) => ({ default: module.ProductDetail }))),
};
const ShopNow = lazy(() => import("./pages/ShopNow").then((module) => ({ default: module.ShopNow })));
const OrderDetails = lazy(() => import("./pages/OrderDetails"));

const PageLoader = () => (
  <div className="p-6 text-center text-sm text-gray-600">Loading...</div>
);

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/shop" element={<PrivateRoute><ShopNow /></PrivateRoute>} />
                <Route path="/shopnow" element={<PrivateRoute><ShopNow /></PrivateRoute>} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/order" element={<OrderDetails />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
              </Route>

              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}


