import { Routes, Route } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Error } from "../pages/Error";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="cart" element={<Cart />} />
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
