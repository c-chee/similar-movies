import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import MainLayout from "../layouts/MainLayout";

export default function Router() {
    return (
        <BrowserRouter>
        <MainLayout>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </MainLayout>
        </BrowserRouter>
    );
}
