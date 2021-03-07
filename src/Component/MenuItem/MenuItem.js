import React from "react";
import "./Menuitem.css";
import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, linkUrl, match, history }) => (
  <div
    style={{
      backgroundImage: `url(${imageUrl})  `,
    }}
    className="menu-item"
    onClick={() => history.push(`${match} ${linkUrl}`)}
  >
    <div className="content">
      <h1 className="title"> {title}</h1>
      <span className="subtitle">shopnow</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
