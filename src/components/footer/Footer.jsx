import React from "react";
import { BiArrowBack } from "react-icons/bi";
import '../utilityStyle.css'

const Footer = () => {
  return (
    <div>
      <footer id="sticky-footer" className="pb-3 text-dark-50">
        <div className="d-flex justify-content-between align-items-center mx-5">
          <div>
            <a className="nav-link mx-3" href="#">
              <BiArrowBack />
              <span className="m-2"> Back</span>
            </a>
          </div>
          <div className="" href="#">
            <button className="btn-1 m-2">
              CONTINUE SHOPPING
            </button>
            <button className="btn-2 m-2">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
