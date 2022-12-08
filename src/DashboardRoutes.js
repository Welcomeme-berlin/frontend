import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";

const DashboardRoute = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default DashboardRoute;
