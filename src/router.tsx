import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CartPage } from "./pages/CartPage";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
}
