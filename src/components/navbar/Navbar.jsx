import React from "react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm">
        <div className="container-fluid mx-5">
          <a className="navbar-brand" href="#">
            <span style={{color:"orange"}}>E-</span>Shop
          </a>
          <div className="px-5">
            <ul className="navbar-nav nav-justified me-auto mb-lg-0">
              <li className="nav-item mx-4">
                <a className="nav-link" href="#">
                  Men
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#">
                  Women
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#">
                  Kids
                </a>
              </li>
            </ul>
          </div>
          <div className="m-2 fs-5">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <AiOutlineSearch />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <AiOutlineShoppingCart />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <AiOutlineUser />
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
