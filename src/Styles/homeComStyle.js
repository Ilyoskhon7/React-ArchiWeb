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

export const AboutWrapAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
`;

export const AboutWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
  margin: 0, 100px, 0, 100px;
  gap: 10px;
`;

export const AboutLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-right: -40px;
`;

export const AboutRight = styled.div`
  display: flex;
  flex: 1;
  align-items: start;
  justify-content: center;
  margin-left: -40px;
`;

export const RightMini = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 500px;
`;

export const AboutP = styled.p`
  width: 450px;
  height: 250px;
  font-size: 30px;
  margin-top: 30px;
  text-align: start;
`;

export const OurProjWrapAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const OurProjWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 70px;
`;

export const OurProjLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: start;
  margin-left: 60px;
`;

export const OurProjRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const GridWrapAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  align-items: center;
  justify-content: center;
  row-gap: 80px;
  column-gap: 100px;
  width: 1440px;
  margin-top: 70px;
`;

export const GridImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const GridP = styled.p`
  width: 180px;
  text-align: center;
`;

export const TestimonialWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Testimonial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
  margin: 90px 90px;
`;

export const ProfileWrapAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
`;

export const ProfileLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ProfileRight = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const ProfileTexts = styled.div`
  width: 350px;
`;

export const ProfileP = styled.div`
  width: 300px;
  text-align: start;
  margin-top: 10px;
`;

export const FooterWrapAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #2e2f32;
  margin-top: 100px;
`;

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1440px;
  height: 350px;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 20px;
  color: white;
`;
