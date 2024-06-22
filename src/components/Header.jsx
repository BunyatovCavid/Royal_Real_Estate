import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "animate.css";
import "../manager/lit.js";
import "@theme-toggles/react/css/Lightbulb.css";
import { Lightbulb } from "@theme-toggles/react";
import { LinkContainer } from "react-router-bootstrap";
import { GlobalThemeContext } from "./Context/ThemeContext.jsx";
import { useContext, useState } from "react";
import i18n from "./i18n/i18.jsx";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import AuthBtn from "./AuthBtn.jsx";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

const Header = () => {
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();
  const { darkMode, setDarkMode, toggleTheme } = useContext(GlobalThemeContext);
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const { t } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  const globe = <i class="fa-solid fa-globe"></i>;
  return (
    <>


      <Navbar expand="lg" className="bg-body-transparent" expanded={navbarExpanded}>
      <Container>
      <Navbar.Brand
                className="p2 mx-2 animate__animated animate__flip brand"
                data-item="Royal"
              >
                <span>Royal</span> <span ><img src="https://cdn.discordapp.com/attachments/1046180794676301857/1145067441630760960/logo.png" alt="" width={50}/></span>
              </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"
      onClick={() => setNavbarExpanded(!navbarExpanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to="/" onClick={() => setNavbarExpanded(false)}>
                  
                  <Nav.Link
                    className="m-2 nvitmm animate__fadeInDown animate__animated"
                    data-item={t("header.0")}
                  >
                    {t("header.0")}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about" onClick={() => setNavbarExpanded(false)}>
                  <Nav.Link
                    className="m-2 nvitmm animate__fadeInDown animate__animated"
                    data-item={t("header.1")}
                  >
                    {t("header.1")}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/products" onClick={() => setNavbarExpanded(false)}>
                  <Nav.Link
                    className="m-2 nvitmm animate__fadeInDown animate__animated"
                    data-item={t("header.2")}
                  >
                    {t("header.2")}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/blogs" onClick={() => setNavbarExpanded(false)}>
                  <Nav.Link
                    className="m-2 nvitmm animate__fadeInDown animate__animated"
                    href="#blog"
                    data-item={t("header.3")}
                  >
                    {t("header.3")}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact" onClick={() => setNavbarExpanded(false)}>
                  <Nav.Link
                    className="m-2 nvitmm animate__fadeInDown animate__animated"
                    data-item={t("header.4")}
                  >
                    {t("header.4")}
                  </Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/login" onClick={() => setNavbarExpanded(false)}>
                  <Nav.Link
                    className="m-2 nvitmm animate__fadeInDown animate__animated"
                    href=""
                    data-item={t("header.5")}
                  >
                     <AuthBtn/>
                  </Nav.Link>
                </LinkContainer>
                          

              <LinkContainer to="/basket" onClick={() => setNavbarExpanded(false)}>
            <button type="button" className="btn position-relative my-2 mx-2">
              <i className="fa-solid fa-cart-shopping" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
                <span className="visually-hidden"></span>
              </span>
            </button>
          </LinkContainer>


              <LinkContainer to="/wish" onClick={() => setNavbarExpanded(false)}>
            <button type="button" className="btn position-relative my-2 mx-2">
            <i class="fa-solid fa-heart fa-beat"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalWishlistItems / 2}
                <span className="visually-hidden"></span>
                </span>
            </button>
          </LinkContainer>

              {/* ------------------------------------V-LANGUAGE-V--------------------------------------------------- */}

              <DropdownButton variant="" className="db" id="dropdown-basic-button" title={globe}>
                    <Dropdown.Item
                      href="#/action-1"
                      className="lanflag"
                      onClick={() => handleClick("az")}
                    >
                      {" "}
                      <img
                        src="https://cdn.countryflags.com/thumbs/azerbaijan/flag-round-250.png"
                        alt=""
                      />{" "}
                      Azərbaycan
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-1"
                      className="lanflag"
                      onClick={() => handleClick("en")}
                    >
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
                        alt=""
                      />{" "}
                      İngilis-Dili
                    </Dropdown.Item>
                  </DropdownButton>

{/* ------------------------------------A-LANGUAGE-A--------------------------------------------------- */}




          </Nav>
        </Navbar.Collapse>
        <Nav.Link>
                <Lightbulb className="bulb">
                  {" "}
                  <button
                    className="bg-transparent border-0"
                    onClick={toggleTheme}
                  ></button>
                </Lightbulb>
                </Nav.Link>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
