import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>For Business</a>
      </li>
      <li>
        <a>For Investors</a>
      </li>
      <li>
        <a>Financing Rates</a>
      </li>
      <li>
        <details>
          <summary>Others</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className="bg-white">
      <div className="container mx-auto navbar text-[#00233F]">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
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
          {/* Mobile Menu Links */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-red-800"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <a className="btn btn-ghost text-xl">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </a>
      </div>

      {/* Navbar Center for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <button className="px-6 py-2 rounded-full text-white">Login</button>
        <button className="px-6 py-2 bg-blue-500 rounded-full text-white">Apply Now</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
