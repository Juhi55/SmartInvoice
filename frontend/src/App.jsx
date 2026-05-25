import { Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Invoices from "./pages/Invoices";
import Customers from "./pages/Customers";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Dashboard */}
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        }
      />

      {/* Products */}
      <Route
        path="/products"
        element={
          <DashboardLayout>
            <Products />
          </DashboardLayout>
        }
      />

      {/* Invoices */}
      <Route
        path="/invoices"
        element={
          <DashboardLayout>
            <Invoices />
          </DashboardLayout>
        }
      />

      {/* Customers */}
      <Route
        path="/customers"
        element={
          <DashboardLayout>
            <Customers />
          </DashboardLayout>
        }
      />

      {/* Analytics */}
      <Route
        path="/analytics"
        element={
          <DashboardLayout>
            <Analytics />
          </DashboardLayout>
        }
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* Register */}
      <Route
        path="/register"
        element={<Register />}
      />
      {/* Protected Dashboard */}
      <Route
  path="/"
  element={
    <ProtectedRoute>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </ProtectedRoute>
  }
/>

    </Routes>
  );
}

export default App;