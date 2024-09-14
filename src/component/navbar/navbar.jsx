import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    // โหลดธีมจาก localStorage เมื่อคอมโพเนนต์ทำการเรนเดอร์
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  function handleThemeChange(event) {
    const theme = event.target.value;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('selected-theme', theme); // เก็บธีมที่เลือกใน localStorage
  }

  return (
    <>
      <div className="navbar bg-base-100 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/Todo">To do list</Link>
              </li>
            </ul>
          </div>
          <Link to="/Home" className="btn btn-ghost text-xl">
            myPersonal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Todo">To do list</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-warning"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Setting
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="dropdown mb-72">
                <div tabIndex={0} role="button" className="btn btn-info w-full m-1">
                  Theme
                  <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
                >
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Dark"
                      value="default"
                      onChange={handleThemeChange}
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Light"
                      value="light"
                      onChange={handleThemeChange}
                    />
                  </li>
                  <hr />
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Cyberpunk"
                      value="cyberpunk"
                      onChange={handleThemeChange}
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Valentine"
                      value="valentine"
                      onChange={handleThemeChange}
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Aqua"
                      value="aqua"
                      onChange={handleThemeChange}
                    />
                  </li>
                </ul>
              </div>
              <br />
              <button className="btn btn-error"><Link to="/">Logout</Link></button>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
}
