import styled from "styled-components";

import React from "react";
import { Link } from "react-router-dom";

export const NavAllWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1440px;
  margin-top: 10px;
  height: 60px;
  background-color: white;
`;

export const NavLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: start;
  padding-left: 100px;
  cursor: pointer;
`;

export const NavRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MiniRight = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
