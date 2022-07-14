import React from "react";
import "./shop.styles.scss";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import CategroyPage from "../categroyPage/categroyPage.component";
import CollectionOverview from "../../components/collection-overview/Collection-overview.components";

const Shop = () => {
  const location = useLocation();
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path={`/`} element={<CollectionOverview />} />
        <Route exact path={`/:categoryId`} element={<CategroyPage />} />
      </Routes>
    </div>
  );
};

export default Shop;
