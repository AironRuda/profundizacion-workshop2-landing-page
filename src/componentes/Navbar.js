import React from "react";
import NavbarList from "./NavbarList";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid ">
        <ul className="navbar-nav">{NavbarList()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
// {
//     {
//       <li class="nav-item">
//         <a class="nav-link active" aria-current="page" href="#">
//           {element}
//         </a>
//       </li>;
//     }
//   }
