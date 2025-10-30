import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.config";
import AuthContext from "../../Context/AuthContext";
import { Icon } from "@iconify/react";

const UserMenu = () => {
  const { currentUser, loading } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-end p-5">
      {loading ? (
        // Spinner while loading
        <div className="w-8 h-8 border-4 border-[#53310e] border-t-[#f7e1b5] rounded-full animate-spin"></div>
      ) : currentUser ? (
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 bg-[#53310e] text-[#f7e1b5] px-3 py-1 rounded-md hover:bg-[#40230b] transition-colors  cursor-pointer"
          >
            <Icon icon="mi:user" />
            {currentUser.email.split("@")[0]} {/* show name/email */}
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-[#fff8f0] border-2 border-[#53310e] rounded-md shadow-lg">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-[#53310e] hover:bg-[#ffe5c2] transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="bg-[#53310e] text-[#f7e1b5] px-4 py-1 rounded-md hover:bg-[#40230b] transition-colors"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default UserMenu;
