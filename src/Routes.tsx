import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home, Catalog, Cart } from './pages';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/catalog" element={ <Catalog /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
    </Router>
  );
}