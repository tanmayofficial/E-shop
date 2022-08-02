import React from 'react';
import paypal from "../../../assets/paypal.png";
import visa from "../../../assets/visa.png";
import mastercard from "../../../assets/mastercard.png";
import maestro from "../../../assets/maestro.png";
import discover from "../../../assets/discover.png";
import ideal from "../../../assets/ideal-logo.png";
import inpost from "../../../assets/inpost.png";
import dpd from "../../../assets/dpd.png";
import dhl from "../../../assets/dhl.png";
import fedex from "../../../assets/fedex.png";


const PaymentMethods = () => {
  return (
    <div className="col-md-4">
      <span className="text-center">Payment method</span>
      <div className="input-group my-3">
        <a
          href="#"
          className="btn btn-outline-secondary rounded-pill px-3 mx-1"
        >
          <img className="payment-method-logo" src={paypal} alt="paypal" />
        </a>
        <a
          href="#"
          className="btn btn-outline-secondary rounded-pill px-3 mx-1"
        >
          <img className="payment-method-logo" src={visa} alt="paypal" />
        </a>
        <a
          href="#"
          className="btn btn-outline-secondary rounded-pill px-3 mx-1"
        >
          <img className="payment-method-logo" src={mastercard} alt="paypal" />
        </a>
      </div>
      <div className="input-group my-3">
        <a
          href="#"
          className="btn btn-outline-secondary rounded-pill px-3 mx-1"
        >
          <img className="payment-method-logo" src={maestro} alt="paypal" />
        </a>
        <a
          href="#"
          className="btn btn-outline-secondary rounded-pill px-3 mx-1"
        >
          <img className="payment-method-logo" src={discover} alt="paypal" />
        </a>
        <a
          href="#"
          className="btn btn-outline-secondary rounded-pill px-3 mx-1"
        >
          <img className="payment-method-logo" src={ideal} alt="paypal" />
        </a>
      </div>
      <span className="text-center">Delivery method</span>
      <div className="input-group my-3">
        <a
          href="#"
          className="btn btn-outline-secondary rounded-4 px-3 mx-1"
        >
          <img className="payment-method-logo" src={inpost} alt="paypal" />
          <small className="ms-2">$20.00</small>
        </a>
        <a
          href="#"
          className="btn btn-outline-secondary rounded-4 px-3 mx-1"
        >
          <img className="payment-method-logo" src={dpd} alt="paypal" />
          <small className="ms-2">$12.00</small>
        </a>
      </div>
      <div className="input-group my-3">
        <a
          href="#"
          className="btn btn-outline-secondary rounded-4 px-3 mx-1"
        >
          <img className="payment-method-logo" src={dhl} alt="paypal" />
          <small className="ms-2">$15.00</small>
        </a>
        <a
          href="#"
          className="btn btn-outline-secondary rounded-4 px-3 mx-1"
        >
          <img className="payment-method-logo" src={fedex} alt="paypal" />
          <small className="ms-2">$10.00</small>
        </a>
      </div>
    </div>
  )
}

export default PaymentMethods