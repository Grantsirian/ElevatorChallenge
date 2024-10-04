import { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import DefaultLayout from './layouts/defaultLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DefaultLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/product-list' element={<ProductListPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
