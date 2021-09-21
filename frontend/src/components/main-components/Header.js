import React from "react";
import logo from "../../img/logo.png";
import { IoMdBriefcase } from "react-icons/io";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="inner-header">
            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12"></div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="logo">
                <a className="brand" href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12 cart">
              <div className="inner-cart">
                <a href="/cart">
                  <IoMdBriefcase />
                  <div className="price">
                    <span>₺</span> 39,97
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
