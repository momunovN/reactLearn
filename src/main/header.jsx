import React from "react";
import "../main/main.scss";

import Logo from './images/Logo.svg'
import SearchIcon from "./images/SearchIcon.svg"
const Header = () => {
  return (
    <header className="header">
      <div class="head_inner">
        <div class="container">
          <div class="cont-inner">
            <div class="head_content">
              <div class="head_logo">
                <img src={Logo} alt="" />
              </div>
              <div class="head_menu">
                <a href="" class="head_link1">
                  Home
                </a>
                <a href="" class="head_link2">
                  About
                </a>
                <a href="" class="head_link3">
                  Pages
                </a>
                <a href="" class="head_link4">
                  Shop
                </a>
                <a href="" class="head_link5">
                  Projects
                </a>
                <a href="" class="head_link6">
                  News
                </a>
              </div>
            </div>
            <div class="head_search_btn">
              <div class="search-container">
                <input type="text" placeholder="Search..." class="inp_header" />
                <img src={SearchIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
