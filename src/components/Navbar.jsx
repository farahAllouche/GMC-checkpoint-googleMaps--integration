import React, { useState } from "react";
import styled from "styled-components";

export default function Navbar() {
  const [navStatus, setNavStatus] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY > 100) setNavStatus(true);
    else setNavStatus(false);
  };
  window.addEventListener("scroll", changeNavColor);
  return (
    <Nav solid={navStatus}>
      <Container>
        <Logo>
          <a>
            <img src="Botanica.png"></img>
          </a>
        </Logo>
        <div id="navbar">
          <Links>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our services</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </Links>
        </div>
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  height: 80px;
  position: fixed;
  padding: 0 200px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background-color 1s ease 0s;

  background-color: ${(props) => (props.solid ? "#38423B" : "transparent")};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  color: red;
  li {
    padding: 10px;

    a {
      color: #ecf0d1;
      font-size: 1.5em;
      font-weight: 600;
    }
  }
`;

const Logo = styled.div`
  img {
    height: 80px;
  }
`;
