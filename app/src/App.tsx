import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
const Suspense01 = lazy(() => import("./components/suspense-ui"));
const Home = lazy(() => import("./pages/home/Home"));
const Settings = lazy(() => import("./pages/settings/settings-page"));
const Catalouge = lazy(() => import("./pages/catalogue/catalogue-page"));

const App: React.FC = () => {
  return (
    <Suspense fallback={<Suspense01/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/catalogue" element={<Catalouge />} />
      </Routes>
    </Suspense>
  );
};

export default App;
