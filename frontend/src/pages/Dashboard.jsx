function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">
        Welcome to SmartInvoice Pro
      </h1>

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Total Sales
          </h2>

          <p className="text-3xl mt-3">
            ₹25,000
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Products
          </h2>

          <p className="text-3xl mt-3">
            120
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Customers
          </h2>

          <p className="text-3xl mt-3">
            85
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold">
            Invoices
          </h2>

          <p className="text-3xl mt-3">
            250
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;