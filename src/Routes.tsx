import { Routes, Route } from "react-router";
import { ForbiddenPage, Main } from "./pages";
import Layout from "./components/Layout";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>  
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ForbiddenPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
