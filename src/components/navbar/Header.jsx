import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import "../../assets/css/main.css";
import Modal from "../../Modal";
import CartPage from "../../pages/CartPage";
import { useCart } from "../ContextReducer";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";
import logo from '../../assets/img/logo-tjp.png'
const Header = () => {
  let data = useCart();
  const [cartView, setCarView] = useState(false);
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const navigate = useNavigate();
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="0" 
      className={
        showMediaIcons ? "mobile-nav-active" : ""
      }>
        <header
          id="header"
          className="header d-flex relative-top align-items-center"
        >
          {/* <div className="container d-flex align-items-center justify-content-between"> */}
          <div className="container d-flex align-items-center justify-content-center">
           <div>
            <Link
              to="/"
              className="logo d-flex align-items-center"
            >
              {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
              {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
              <img src={logo}  alt="logo is loading"/>
            </Link>
            </div>
            <div>
            <nav id="navbar" className={
        showMediaIcons ? "navbar mobile-nav-active" : "navbar"
      }>
              <ul>
                <li>
                  <Link to="/" className="nav-link">HOME</Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">ABOUT</Link>
                </li>
                <li>
                  <Link to="/whyporridge" className="nav-link">WHY PORRIDGE</Link>
                </li>
                <li>
                  <Link to="/whysoups" className="nav-link">WHY SOUPS</Link>
                </li>
                {/* <li>
                  <Link to="/superfoodsmillet">SUPER FOODS MILLET</Link>
                </li> */}
                <li className="dropdown"><Link to="/superfoodsmillet" className="nav-link"><span>SUPER FOODS MILLET</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link to="/superfoodsmillet" className="nav-link">SUPER FOODS MILLET</Link></li>
              <li><Link to="/millettypes" className="nav-link">MILLETS AND THE TYPES</Link></li>
              <li><Link to="#" className="nav-link">YOUR HEALTH</Link></li>
              <li><Link to="#" className="nav-link">FAQS</Link></li>
            </ul>
          </li>
          <li className="dropdown"><Link to="offerings-main" className="nav-link"><span>OFFERINGS</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
            <ul>
              <li><Link to="offerings-main" className="nav-link">OFFERINGS</Link></li>
              <li><Link to="porridges" className="nav-link">PORRIDGES</Link></li>
              <li><Link to="soups" className="nav-link">SOUPS</Link></li>
              <li><Link to="#" className="nav-link">COMBOS</Link></li>
            </ul>
          </li>
                {/* <li>
                  <Link to="/offerings">OFFERINGS</Link>
                </li> */}
           
                <li>
                  <Link to="/blogspage" className="nav-link">BLOGS</Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">CONTACT US</Link>
                </li>           
              </ul>
              {/* {!localStorage.getItem("token") ? (
                <div className="d-flex">
                  <Link className="btn bg-light text-success mx-3" to="/signup">
                    Sign Up
                  </Link>
                  <Link className="btn bg-light text-success mx-1" to="/login">
                    LogIn
                  </Link>
                </div>
              ) : (
                <div className="d-flex">
                  <div
                    className="btn bg-white text-success mx-2"
                    onClick={() => {
                      setCarView(true);
                    }}
                  >
                    My Cart {"   "}
                    <Badge pill bg="danger">
                      {data.length}
                    </Badge>
                  </div>
                  {cartView ? (
                    <Modal
                      onClose={() => {
                        setCarView(false);
                      }}
                    >
                      <CartPage />
                    </Modal>
                  ) : null}
                  <div
                    className="btn bg-white text-danger mx-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                  <div>
                    {" "}
                    <Link
                      className="nav-link active fs-5"
                      aria-current="page"
                      to="/orderhistory"
                    >
                      MyOrders
                    </Link>
                  </div>
                </div>
              )} */}
            </nav>
            </div>
      
            {/* <Link className="btn-book-a-table" to="onlineorder">
              Order Online
            </Link> */}

            <div className="hamburger-menu">
              <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
