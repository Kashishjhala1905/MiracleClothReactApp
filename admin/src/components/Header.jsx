import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("miracle_admin_auth");
    navigate("/");
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center md:justify-end">
      
      {/* Mobile Menu btn if needed */}
      <div className="md:hidden">
        {/* You can add a menu icon here if you want */}
      </div>

      {/* Mobile Logout Button */}
      <button
        onClick={handleLogout}
        className="md:hidden px-4 py-2 text-sm bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
      >
        Logout
      </button>
    </header>
  );
}
