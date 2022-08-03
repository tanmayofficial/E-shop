import React, { useState } from "react";
import Cart from "../cart/Cart";
import PaymentMethods from "../payment method/PaymentMethods";
import Login from "../../login/Login";
import Signup from "../../signup/Signup";
import "./shippingAndPayment.css";


const ShippingAndPayment = () => {
  const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    const toggleLogin = () => {
        setLoginModal(!loginModal);
    }
    const toggleSignup = () => {
        setSignupModal(!signupModal);
    }


  return (
    <div className="container m-3 px-5">
      <h5 className="my-5">Shipping and Payment</h5>
      <span>
        <button className="btn-2 mx-2 px-4" onClick={toggleLogin}>LOG IN</button>
        <button className="btn-1 mx-2" onClick={toggleSignup}>SIGN UP</button>
      </span>
      <form>
        <div className="row my-4">
          <div className="col-md-6">
            <span className="">Shipping information</span>
            <div className="input-group my-3">
              <input
                className="form-control rounded-pill mx-2"
                type="email"
                placeholder="Email"
              />
              <input
                className="form-control rounded-pill mx-2"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="input-group my-3">
              <input
                className="form-control rounded-pill mx-2"
                type="text"
                placeholder="First name"
              />
              <input
                className="form-control rounded-pill mx-2"
                type="text"
                placeholder="City"
              />
            </div>
            <div className="input-group my-3">
              <input
                className="form-control rounded-pill mx-2"
                type="text"
                placeholder="Last name"
              />
              <input
                className="form-control rounded-pill mx-2"
                type="text"
                placeholder="Postal Code / ZIP"
              />
            </div>
            <div className="input-group my-3">
              <input
                className="form-control rounded-pill mx-2 px-4"
                type="number"
                placeholder="Phone number"
              />
              <select
                className="form-select rounded-pill mx-2 text-muted"
                placeholder="Poland"
              >
                <option defaultValue>Poland</option>
                <option value="1">India</option>
                <option value="2">Australia</option>
                <option value="3">USA</option>
                <option value="4">UK</option>
              </select>
            </div>
          </div>
          <PaymentMethods />
          <Cart />
          <Login loginModal={loginModal} toggleLogin={toggleLogin} />
          <Signup signupModal={signupModal} toggleSignup={toggleSignup} />
        </div>
      </form>
    </div>
  );
};

export default ShippingAndPayment;
