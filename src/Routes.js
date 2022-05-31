import React from "react";
import LoginPage from "pages/LoginPage";
import ContactPage from "pages/ContactPage";
import SearchPage from "pages/SearchPage";
import Checkout from "pages/Checkout";
import Cart from "pages/Cart";
import GiftCard from "pages/GiftCard";
import BlogDetail from "pages/BlogDetail";
import Blog from "pages/Blog";
import CollectionDetails from "pages/CollectionDetails";
import CollectionList from "pages/CollectionList";
import ProductDetails from "pages/ProductDetails";
import ProductList from "pages/ProductList";
import CategorieswithSidebar from "pages/CategorieswithSidebar";
import HomepageV3 from "pages/HomepageV3";
import HomepageV2 from "pages/HomepageV2";
import HomepageV1 from "pages/HomepageV1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepagev1" element={<HomepageV1 />} />
        <Route path="/homepagev2" element={<HomepageV2 />} />
        <Route path="/homepagev3" element={<HomepageV3 />} />
        <Route
          path="/categorieswithsidebar"
          element={<CategorieswithSidebar />}
        />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/collectionlist" element={<CollectionList />} />
        <Route path="/collectiondetails" element={<CollectionDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/giftcard" element={<GiftCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/searchpage" element={<SearchPage />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
