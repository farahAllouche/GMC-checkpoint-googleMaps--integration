import React from "react";
import styled from "styled-components";
import Location from "../Location";

export default function Contact() {
  return (
    <Container>
      <InfoBox>
        <h2>BOUQUET Florist </h2>
        <p>Boulevard Colonel Krim Belkacem, Alger Ctre , Algérie</p>
        <p>Phone: 262-646-4777</p>
        <a href="mailto:sarah@bouquet.com">Email: sarah@bouquet.com</a>
      </InfoBox>
      <MapBox>
        <Location />
      </MapBox>
    </Container>
  );
}

const Container = styled.div`
  background-color: #dee6b2;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  font-family: "Cairo", sans-serif;
  padding: 0 200px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  h2 {
    font-family: "Dancing Script", cursive;
    padding: 20px 0;
  }
  p,
  a {
    padding: 5px 0;
    color: black;
  }
`;

const MapBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;
