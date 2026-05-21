import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Invoices from "./pages/Invoices";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/products"
        element={
          <DashboardLayout>
            <Products />
          </DashboardLayout>
        }
      />

      <Route
        path="/invoices"
        element={
          <DashboardLayout>
            <Invoices />
          </DashboardLayout>
        }
      />

      <Route
        path="/customers"
        element={
          <DashboardLayout>
            <Customers />
          </DashboardLayout>
        }
      />

      <Route
        path="/analytics"
        element={
          <DashboardLayout>
            <Analytics />
          </DashboardLayout>
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

    </Routes>
  );
}

export default App;