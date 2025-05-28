import { Route, Routes } from "react-router-dom"
import Cart from "./pages/cart"
import Home from "./pages/home"
import NotFound from "./pages/notfound"
import Products from "./pages/products"
import ProductsDetails from "./pages/productsDetails"
import Layout from "./pages/layout"

const Path = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductsDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default Path