import { useNavigate } from "react-router-dom";

function Topbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
  };



  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">

      <h1 className="text-2xl font-semibold">
        Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="bg-black text-white px-5 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  );
}

export default Topbar;