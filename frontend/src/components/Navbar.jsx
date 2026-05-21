import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black text-white p-4 flex gap-6 text-lg">
      <Link to="/">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/invoices">Invoices</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Navbar;