import React from "react";
import { FaArrowUp, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer_img py-5 px-3">
      <div className="container">
        <h4>Main Menu</h4>
        <div className="text-danger">
          <h6>Home</h6>
          <h6>About Us</h6>
          <h6>Services</h6>
          <h6>Contact Us</h6>
        </div>
      </div>
      <hr />
      <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between">
        <p>@ 2019 FANTASTIC FOTO.</p>
        <div className="d-flex gap-2 align-items-center">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
          <FaArrowUp />
        </div>
      </div>
    </section>
  );
};

export default Footer;
