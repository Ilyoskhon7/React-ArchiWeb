import React from "react";
import Logo from "./assets/ArchiWeb-logo.svg";
import {
  MiniRight,
  NavAllWrap,
  NavLeft,
  NavLink,
  NavRight,
  NavWrap,
} from "./Styles/navbarStyle";
import { Link } from "react-router-dom";
import HomeCom from "./Components/home";
const NavbarCom = () => {
  return (
    <NavAllWrap>
      <NavWrap>
        <NavLeft>
          <Link to={"/"}>
            <img src={Logo} alt="Archi-logo" />
          </Link>
        </NavLeft>

        <NavRight>
          <MiniRight>
            <NavLink to={"/home"}>
              <p>Home</p>
            </NavLink>
            <NavLink to={"/projects"}>
              <p>Projects</p>
            </NavLink>
            <NavLink to={"/about"}>
              <p>About</p>
            </NavLink>
            <NavLink to={"/contact"}>
              <p>Contact</p>
            </NavLink>
          </MiniRight>
        </NavRight>
      </NavWrap>
    </NavAllWrap>
  );
};

export default NavbarCom;
