import { Routes, Route } from "react-router-dom"
import DashboardPage from "@/pages/dashboard/dashboard"

export default function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}
