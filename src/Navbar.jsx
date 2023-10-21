import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  const isAsifPage = location.pathname === "/asif";
  const isMahinPage = location.pathname === "/mahin";
  const isZubaerPage = location.pathname === "/zubaer";

  return (
    <nav className="bg-green-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 href="/" className=" text-2xl font-semibold">
          {props.title}
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className={` hover:underline hover:text-slate-900 ${
                location.pathname === "/" ? "text-slate-900 underline" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/asif"
              className={` hover:underline hover:text-slate-900 ${
                isAsifPage ? "text-slate-900 underline" : ""
              }`}
            >
              Asif
            </a>
          </li>
          <li>
            <a
              href="/mahin"
              className={` hover:underline hover:text-slate-900 ${
                isMahinPage ? "text-slate-900 underline" : ""
              }`}
            >
              Mahin
            </a>
          </li>
          <li>
            <a
              href="/zubaer"
              className={` hover:underline hover:text-slate-900 ${
                isZubaerPage ? "text-slate-900 underline" : ""
              }`}
            >
              Zubaer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
