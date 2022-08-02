import React from 'react'
import tshirt1 from "../../../assets/tshirt1.jfif";
import tshirt2 from "../../../assets/tshirt2.png";
import { FiTruck } from "react-icons/fi";


const Cart = () => {
  return (
    <div className="col-md-2">
      <span className="text-center">Your cart</span>
      <div className="input-group my-3">
        <img className="tshirt-img rounded-circle me-2" src={tshirt1} alt="" />
        <span className="small-font">
          T-shirt
          <br />
          Summer vibes
          <br />
          <p className="text-muted">#2344255</p>
        </span>
        <small className="small-font ms-2">
          $89.99
        </small>
      </div>
      <div className="input-group my-3">
        <img className="tshirt-img rounded-circle me-2" src={tshirt2} alt="tshirt2" />
        <span className="small-font">
          Basic Slim
          <br />
          Fit T-shirt
          <br />
          <p className="text-muted">#2344255</p>
        </span>
        <small className="small-font ms-4">
          $69.99
        </small>
      </div>

      <div className="input-group mt-2">
        <input type="button" className="btn btn-secondary rounded-5" disabled value="Total Cost  $159,98" />
      </div>

      <div className="d-flex mt-4">
        <span className="me-3"><FiTruck /></span>
        <p className="medium-font">You are $30.02 away from free shipping</p>
      </div>
    </div>
  )
}

export default Cart