import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-5 fixed">
      <h1 className="text-2xl font-bold mb-10">
        SmartInvoice
      </h1>

      <div className="flex flex-col gap-5 text-lg">
        <Link to="/">Dashboard</Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/invoices">
          Invoices
        </Link>

        <Link to="/customers">
          Customers
        </Link>

        <Link to="/analytics">
          Analytics
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;