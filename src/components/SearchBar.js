import React from "react";
import {
  Header,
  HeaderRow,
  Navigation,
  Drawer,
} from "react-mdl";

import { Link } from "react-router-dom";
import "../App.css";
function SearchBar() {
  return (
    <>
      <Header className="header-color" waterfall hideTop>
        <HeaderRow
          title={
            <Link
              style={{ textDecoration: "none", color: "white", shadow: "0" }}
              to="/"
            >
              硅谷码职业技术培训
            </Link>
          }
          scroll
        >
          <Navigation>
            <Link to="/">首页</Link>
            <Link to="/projects">课程计划</Link>
            <Link to="/About">大厂师资</Link>
            <Link to="/blog">免费资源</Link>
            <Link to="/contact">联系我们</Link>
          </Navigation>
        </HeaderRow>
      </Header>
      <Drawer
        title={
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/"
          ></Link>
        }
      >
        <Navigation>
          <Link to="/">首页</Link>
          <Link to="/projects">课程计划</Link>
          <Link to="/About">大厂师资</Link>
          <Link to="/blog">免费资源</Link>
          <Link to="/contact">联系我们</Link>
        </Navigation>
      </Drawer>
    </>
  );
}

export default SearchBar;
