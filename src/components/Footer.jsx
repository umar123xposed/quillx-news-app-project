import React from 'react'
import quillx from '../assets/quillx.png'

export default function Footer() {
  return (
    <>
      


      <footer className="text-center bg-dark text-lg-start mt-xl-5 pt-4">

<div className="container p-4">

  <div className="row">

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <h5 className="text-uppercase text-danger mb-4">OUR WORLD</h5>

      <ul className="list-unstyled mb-4">
        <li>
          <a href="#!" className="text-light">About us</a>
        </li>
        <li>
          <a href="#!" className="text-light">Collections</a>
        </li>
        <li>
          <a href="#!" className="text-light">Environmental philosophy</a>
        </li>
        <li>
          <a href="#!" className="text-light">Artist collaborations</a>
        </li>
      </ul>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <h5 className="text-uppercase text-danger mb-4">Assistance</h5>

      <ul className="list-unstyled">
        <li>
          <a href="#!" className="text-light">Contact us</a>
        </li>
        <li>
          <a href="#!" className="text-light">Size Guide</a>
        </li>
        <li>
          <a href="#!" className="text-light">Shipping Information</a>
        </li>
        <li>
          <a href="#!" className="text-light">Returns & Exchanges</a>
        </li>
        <li>
          <a href="#!" className="text-light">Payment</a>
        </li>
      </ul>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <h5 className="text-uppercase text-danger mb-4">Careers</h5>

      <ul className="list-unstyled">
        <li>
          <a href="#!" className="text-light">Jobs</a>
        </li>
      </ul>
    </div>

    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <h5 className="text-uppercase text-danger mb-4">Sign up to our newsletter</h5>

      <div className="form-outline form-white mb-4">
        <input type="email" id="form5Example2" className="form-control" />
        <label className="form-label text-light" htmlFor="form5Example2">Email address</label>
      </div>

      <button type="submit" className="btn btn-outline-danger btn-block">Subscribe</button>
    </div>

  </div>

</div>

<div className="text-center p-3 text-light border-top border-light">
  © 2024 Copyright:
  <span className="text-light"> <img src={quillx} alt="" /></span>
</div>

</footer>



    </>
  )
}
