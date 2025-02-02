import Main from "./pages/Main";
import { Routes, Route } from "react-router";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default AppRoutes;
