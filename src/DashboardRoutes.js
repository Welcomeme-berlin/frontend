import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import ListApartment from "./pages/listApartment";
import RentApartment from "./pages/rentApartment";

const DashboardRoute = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rent-apartments" element={<RentApartment />} />
          <Route path="/list-apartments" element={<ListApartment />} />
          <Route path="/manage-apartments" element={<RentApartment />} />
          <Route path="/transactions" element={<ListApartment />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default DashboardRoute;
