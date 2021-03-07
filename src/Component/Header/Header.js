import React from "react";
import "./Header.css";
import { auth } from "../FireBase/Firebase";
import { Link } from "react-router-dom";

const Header = ({ currentUser }) => (
  <div className="header-container">
    <Link to="/">
      <div className="header-image"></div>
    </Link>

    <div className="navigation">
      <Link to="/">
        <ul>HomePage</ul>
      </Link>
      <Link to="/ShopPage">
        <ul>ShopPage</ul>
      </Link>
      {currentUser ? (
        <div className="navigation" onClick={() => auth.signOut()}>
          signOut
        </div>
      ) : (
        <Link to="/SignIn">
          <ul>SignIn</ul>
        </Link>
      )}
    </div>
  </div>
);

export default Header;
