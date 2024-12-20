import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import FavoritePage from "./pages/FavoritesPage/FavoritesPage";
import CamperDetails from "./components/CamperDetails/CamperDetails";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound/NotFound";
import './App.css';
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));


function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/catalog/:id" element={<CamperDetails/>} />
        <Route path="*"  element={<NotFound />} /> 
       

      </Routes>
      <ToastContainer />
    </SharedLayout>
  );
}

export default App;