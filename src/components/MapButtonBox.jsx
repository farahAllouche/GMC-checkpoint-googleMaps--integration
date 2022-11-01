import React from "react";
import styled from "styled-components";
import { Autocomplete } from "@react-google-maps/api";
import { FaLocationArrow } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function MapButtonBox({ center, googleMap }) {
  return (
    <Box>
      <Row>
        <InputGroup>
          <label>Origin :</label>
          <Autocomplete>
            <Input type="text" />
          </Autocomplete>
        </InputGroup>
        <Button>Let's Go</Button>
        <IconContext.Provider
          value={{ color: "#38423b", className: "global-class-name" }}
        >
          <Icon onClick={() => googleMap.panTo(center)}>
            <FaLocationArrow />
          </Icon>
        </IconContext.Provider>
      </Row>
      <Row></Row>
    </Box>
  );
}

const Box = styled.div`
  background-color: white;
  border-radius: 5px;
  font-family: initial;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: #dee6b2;
  padding: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  position: absolute;
  top: 90px;
  right: 5%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #38423b;
  border-radius: 3px;
  outline: none;
  height: 28px;
  color: #38423b;
  &:focus {
    border: 2px solid #38423b;
  }
`;

const Button = styled.button`
  padding: 8px;
  border-radius: 3px;
  border: 1px solid #dee6b2;
  outline: none;
  color: #38423b;
  background-color: #38423b;
  color: #dee6b2;
  cursor: pointer;
  &:hover {
    border: 1px solid #38423b;
  }
`;

const Icon = styled.div`
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #38423b;
    background-color: white;
  }
`;
