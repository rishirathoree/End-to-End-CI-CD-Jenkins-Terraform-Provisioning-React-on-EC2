import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import PrivateRoutes from "./lib/private-routes";
const Login04 = lazy(() => import("./pages/login/login-page"));
const Suspense01 = lazy(() => import("./components/suspense-ui"));
const Home = lazy(() => import("./pages/home/Home"));
const Settings = lazy(() => import("./pages/settings/settings-page"));
const Catalouge = lazy(() => import("./pages/catalogue/catalogue-page"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Suspense01/>}>
      <Routes>
        <Route path="/login" element={<Login04 />} />
        <Route element={<PrivateRoutes/>}>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/catalogue" element={<Catalouge />} />
          </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
