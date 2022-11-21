import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Produtos } from "./pages/Produtos/Produtos";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
        </Routes>
    )
}