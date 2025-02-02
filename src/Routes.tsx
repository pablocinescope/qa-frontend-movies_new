import { Routes, Route } from "react-router";
import { ForbiddenPage, Main } from "./pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<ForbiddenPage />} />
    </Routes>
  );
}

export default AppRoutes;
