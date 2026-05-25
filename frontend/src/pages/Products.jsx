import { useEffect, useState } from "react";

import axios from "axios";

function Products() {

  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    gst: "",
    stock: "",
    barcode: "",
  });



  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);

    } catch (error) {

      console.log(error);

    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);




  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };




  // ADD PRODUCT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/products",
        formData
      );

      alert("Product Added");

      fetchProducts();

      setFormData({
        name: "",
        price: "",
        gst: "",
        stock: "",
        barcode: "",
      });

    } catch (error) {

      console.log(error);

    }
  };




  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    try {

      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      alert("Product Deleted");

      fetchProducts();

    } catch (error) {

      console.log(error);

    }
  };




  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Product Management
      </h1>



      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-xl shadow mb-8 grid grid-cols-2 gap-4"
      >

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <input
          type="number"
          name="gst"
          placeholder="GST %"
          value={formData.gst}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <input
          type="text"
          name="barcode"
          placeholder="Barcode"
          value={formData.barcode}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />



        <button
          type="submit"
          className="bg-black text-white rounded-lg"
        >
          Add Product
        </button>

      </form>




      {/* PRODUCT TABLE */}
      <div className="bg-white p-5 rounded-xl shadow">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                Name
              </th>

              <th className="p-3 text-left">
                Price
              </th>

              <th className="p-3 text-left">
                GST
              </th>

              <th className="p-3 text-left">
                Stock
              </th>

              <th className="p-3 text-left">
                Barcode
              </th>

              <th className="p-3 text-left">
                Action
              </th>

            </tr>

          </thead>



          <tbody>

            {products.map((product) => (

              <tr
                key={product._id}
                className="border-b"
              >

                <td className="p-3">
                  {product.name}
                </td>

                <td className="p-3">
                  ₹{product.price}
                </td>

                <td className="p-3">
                  {product.gst}%
                </td>

                <td className="p-3">
                  {product.stock}
                </td>

                <td className="p-3">
                  {product.barcode}
                </td>

                <td className="p-3">

                  <button
                    onClick={() =>
                      deleteProduct(product._id)
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

export default Products;