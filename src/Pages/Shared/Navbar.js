import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import navImg from "../../Assets/navPhoto.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <section>
      {/* mobile nav */}

      <div className="d-block d-md-none d-flex justify-content-between align-items-center mx-3">
        <img className="w-25" src={navImg} alt="" />
        <FaBars
          style={{ fontSize: "20px" }}
          className="text-danger"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        />
      </div>

      {/* pc nav */}
      <div className="d-none d-md-block">
        <div className="d-md-flex justify-content-center align-items-center">
          <img className="img-fluid" src={navImg} alt="" />
        </div>

        <div className="container">
          <hr className=" d-none d-md-block" />
          <FaBars
            style={{ fontSize: "25px" }}
            className="d-lg-none text-danger"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          />
        </div>
      </div>

      <div
        style={{ backgroundColor: "#262626", width: "150px" }}
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="d-flex justify-content-end mt-3 me-3">
          <FaTimes
            className="text-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div class="offcanvas-body text-white">
          <ul
            className="nav justify-content-start gap-2"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <li>
              <Link className="link_sidebar" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="link_sidebar">Pre Wedding</Link>
            </li>
            <li>
              <Link className="link_sidebar">Wedding</Link>
            </li>
            <li>
              <Link className="link_sidebar">Fashion</Link>
            </li>
            <li>
              <Link to="/contactus" className="link_sidebar">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="d-none d-lg-block">
        <ul className="nav justify-content-center gap-5">
          <li>
            <Link className="link" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="link">Pre Wedding</Link>
          </li>
          <li>
            <Link className="link">Wedding</Link>
          </li>
          <li>
            <Link className="link">Fashion</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
