import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/icons/logo.png";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/volunteers">Volunteers</Link>
      </li>
      <li>
        <Link>Events</Link>
      </li>
      <li>
        <Link>Events</Link>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto border-b-2">
      <div className="navbar bg-">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img className="h-full" src={logo} alt="" />
            <span className="ml-2 fontNothingYouCouldDo">Charity</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://placeimg.com/80/80/people"
                  title={user?.uid ? `${user?.email}` : `User name not found`}
                  alt="img"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {!user?.uid ? (
                <>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Sign In</Link>
                  </li>
                </>
              ) : (
                <>
                  <div className="ml-4">
                    <p>{user?.dispalyName || "Name not found"}</p>
                    <p className="">{user?.email}</p>
                  </div>
                  <hr />
                  <li>
                    <Link>Settings</Link>
                  </li>

                  <li>
                    <Link>Edit Profile</Link>
                  </li>
                  <hr />
                  <li>
                    <Link onClick={handleLogOut}>Sign out</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
