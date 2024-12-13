import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav className="bg-zinc-100 w-full h-16  flex items-center px-4 gap-5 justify-center text-xl">
        <NavLink
          to="/"
          className={(e) => [
            e.isActive ? "text-rose-800" : "text-rose-400",
            e.isActive ? "font-bold" : "font-semibold",
          ].join(" ")}
        >
          Home
        </NavLink>
        <NavLink
          to="/user"
          className={(e) => [
            e.isActive ? "text-rose-800" : "text-rose-400",
            e.isActive ? "font-bold" : "font-semibold",
          ].join(" ")}
        >
          user
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => [
            e.isActive ? "text-rose-800" : "text-rose-400",
            e.isActive ? "font-bold" : "font-semibold",
          ].join(" ")}
        >
          about
        </NavLink>
      </nav>
    </>
  );
};

export default Nav;
