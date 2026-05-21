function Topbar() {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">
        Dashboard
      </h1>

      <button className="bg-black text-white px-5 py-2 rounded-lg">
        Logout
      </button>
    </div>
  );
}

export default Topbar;