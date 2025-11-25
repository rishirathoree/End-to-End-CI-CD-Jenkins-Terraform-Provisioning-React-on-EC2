import Layout from "@/layout";
import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoutes: React.FC = () => {
    const token = localStorage.getItem("token");
    console.log(token,'token')
  let auth = { token };
  return auth.token ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
