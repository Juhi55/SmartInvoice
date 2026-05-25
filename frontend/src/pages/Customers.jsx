import { useEffect, useState } from "react";

import axios from "axios";

function Customers() {

  const [customers, setCustomers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    gstNumber: "",
  });




  // FETCH CUSTOMERS
  const fetchCustomers = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/customers"
      );

      setCustomers(res.data);

    } catch (error) {

      console.log(error);

    }
  };



  useEffect(() => {
    fetchCustomers();
  }, []);




  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };




  // ADD CUSTOMER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/customers",
        formData
      );

      alert("Customer Added");

      fetchCustomers();

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        gstNumber: "",
      });

    } catch (error) {

      console.log(error);

    }
  };




  // DELETE CUSTOMER
  const deleteCustomer = async (id) => {
    try {

      await axios.delete(
        `http://localhost:5000/api/customers/${id}`
      );

      alert("Customer Deleted");

      fetchCustomers();

    } catch (error) {

      console.log(error);

    }
  };




  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Customer Management
      </h1>



      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-xl shadow mb-8 grid grid-cols-2 gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <input
          type="text"
          name="gstNumber"
          placeholder="GST Number"
          value={formData.gstNumber}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <button
          type="submit"
          className="bg-black text-white rounded-lg"
        >
          Add Customer
        </button>

      </form>




      {/* TABLE */}
      <div className="bg-white p-5 rounded-xl shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Email
              </th>

              <th className="p-3 text-left">
                Phone
              </th>

              <th className="p-3 text-left">
                GST
              </th>

              <th className="p-3 text-left">
                Action
              </th>

            </tr>

          </thead>



          <tbody>

            {customers.map((customer) => (

              <tr
                key={customer._id}
                className="border-b"
              >

                <td className="p-3">
                  {customer.name}
                </td>

                <td className="p-3">
                  {customer.email}
                </td>

                <td className="p-3">
                  {customer.phone}
                </td>

                <td className="p-3">
                  {customer.gstNumber}
                </td>

                <td className="p-3">

                  <button
                    onClick={() =>
                      deleteCustomer(customer._id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Customers;