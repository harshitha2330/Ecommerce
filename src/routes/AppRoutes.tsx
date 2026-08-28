import { lazy, Suspense, type ComponentType } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Loading from '../components/common/Loading'

const Login = lazy(() => import('../pages/auth/Login'))
const Register = lazy(() => import('../pages/auth/Register'))
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPassword'))
const ResetPassword = lazy(() => import('../pages/auth/ResetPassword'))
const Home = lazy(() => import('../pages/customer/Home'))
const Products = lazy(() => import('../pages/customer/Products'))
const ProductDetails = lazy(() => import('../pages/customer/ProductDetails'))
const SearchResults = lazy(() => import('../pages/customer/SearchResults'))
const CategoryProducts = lazy(() => import('../pages/customer/CategoryProducts'))
const Cart = lazy(() => import('../pages/customer/Cart'))
const Wishlist = lazy(() => import('../pages/customer/Wishlist'))
const Checkout = lazy(() => import('../pages/customer/Checkout'))
const OrderSuccess = lazy(() => import('../pages/customer/OrderSuccess'))
const MyOrders = lazy(() => import('../pages/customer/MyOrders'))
const OrderDetails = lazy(() => import('../pages/customer/OrderDetails'))
const Profile = lazy(() => import('../pages/customer/Profile'))
const Addresses = lazy(() => import('../pages/customer/Addresses'))
const AdminLogin = lazy(() => import('../pages/admin/AdminLogin'))
const Dashboard = lazy(() => import('../pages/admin/Dashboard'))
const ManageProducts = lazy(() => import('../pages/admin/ManageProducts'))
const ManageCategories = lazy(() => import('../pages/admin/ManageCategories'))
const ManageOrders = lazy(() => import('../pages/admin/ManageOrders'))
const ManageUsers = lazy(() => import('../pages/admin/ManageUsers'))
const ManageInventory = lazy(() => import('../pages/admin/ManageInventory'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Unauthorized = lazy(() => import('../pages/Unauthorized'))

const withSuspense = (Page: ComponentType) => (
  <Suspense fallback={<Loading />}>
    <Page />
  </Suspense>
)

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/login" element={withSuspense(Login)} />
      <Route path="/register" element={withSuspense(Register)} />
      <Route path="/forgot-password" element={withSuspense(ForgotPassword)} />
      <Route path="/reset-password" element={withSuspense(ResetPassword)} />
      <Route path="/home" element={withSuspense(Home)} />
      <Route path="/products" element={withSuspense(Products)} />
      <Route path="/products/:productId" element={withSuspense(ProductDetails)} />
      <Route path="/search" element={withSuspense(SearchResults)} />
      <Route path="/categories/:categoryId" element={withSuspense(CategoryProducts)} />
      <Route path="/cart" element={withSuspense(Cart)} />
      <Route path="/wishlist" element={withSuspense(Wishlist)} />
      <Route path="/checkout" element={withSuspense(Checkout)} />
      <Route path="/order-success" element={withSuspense(OrderSuccess)} />
      <Route path="/orders" element={withSuspense(MyOrders)} />
      <Route path="/orders/:orderId" element={withSuspense(OrderDetails)} />
      <Route path="/profile" element={withSuspense(Profile)} />
      <Route path="/addresses" element={withSuspense(Addresses)} />
      <Route path="/admin/login" element={withSuspense(AdminLogin)} />
      <Route path="/admin" element={withSuspense(Dashboard)} />
      <Route path="/admin/products" element={withSuspense(ManageProducts)} />
      <Route path="/admin/categories" element={withSuspense(ManageCategories)} />
      <Route path="/admin/orders" element={withSuspense(ManageOrders)} />
      <Route path="/admin/users" element={withSuspense(ManageUsers)} />
      <Route path="/admin/inventory" element={withSuspense(ManageInventory)} />
      <Route path="/unauthorized" element={withSuspense(Unauthorized)} />
      <Route path="*" element={withSuspense(NotFound)} />
    </Routes>
  )
}

export default AppRoutes
