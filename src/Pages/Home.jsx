import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <Container class="image">
      <Header>
        <h1>Fresh. Unique. Memorable</h1>
      </Header>
      <button>View our collections</button>
    </Container>
  );
}

const Container = styled.div`
  background-color: #490d40;
  background: url(bgImg.jpg) no-repeat center center;
  padding: 250px 100px 0 100px;
  background-size: cover;
  height: 100vh;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;

  button {
    background-color: #38423b;
    color: #dee6b2;
    border: none;
    padding: 10px 15px;
    font-size: 1.1em;
    text-transform: uppercase;
    transition: background-color 1s ease 0s;
    cursor: pointer;

    &:hover {
      color: #38423b;
      background-color: #dee6b2;
    }
  }
`;

const Header = styled.div`
  padding: 7px;
  border: 1px solid #ecf0d1;
  width: max-content;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  h1 {
    padding: 20px;
    color: #ecf0d1;
    text-align: center;
    background-color: rgba(13, 13, 11, 0.6);
  }
`;
