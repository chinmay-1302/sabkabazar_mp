import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignUpSection from './components/SignUpSection';
import Layout from './pages/Layout';
import Error from './components/Error';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/Login" element={ <Login /> } />
        <Route path="/productpage" element={ <ProductPage /> } />
        <Route path="/productpage" element={ <ProductPage /> } />
        <Route path="/searchresultspage" element={ <SearchResultsPage /> } />
        <Route path="/cartpage" element={ <CartPage /> } />
        <Route path="*" element={ <Error /> } />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
