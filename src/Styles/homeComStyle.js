import styled from "styled-components";
import bg from "../assets/bg.svg";

export const BgWrap = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 1440px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 150px 170px 150px 100px;
  font-size: larger;
  background: linear-gradient(
    91deg,
    rgba(244, 246, 245, 0.9) -7.89%,
    rgba(255, 255, 255, 0.9) 132.55%
  );
  width: 600px;
  height: 450px;
`;

export const OurSerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background: rgba(37, 77, 77, 0.2);
`;

export const OurService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Services = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
  width: 1440px;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const P = styled.p`
  text-align: center;
`;

export const AboutWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  border: 1px solid red;
`;
