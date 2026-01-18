import React from "react";
import {
  AboutLeft,
  AboutP,
  AboutRight,
  AboutWrapAll,
  AboutWrapp,
  BgWrap,
  Box,
  BoxWrap,
  FooterDiv,
  FooterWrap,
  FooterWrapAll,
  GridImgWrap,
  GridP,
  GridWrap,
  GridWrapAll,
  OurProjLeft,
  OurProjRight,
  OurProjWrap,
  OurProjWrapAll,
  OurService,
  OurSerWrap,
  P,
  ProfileLeft,
  ProfileP,
  ProfileRight,
  ProfileTexts,
  ProfileWrap,
  ProfileWrapAll,
  RightMini,
  Service,
  Services,
  Testimonial,
  TestimonialWrap,
} from "../Styles/homeComStyle";
import planning from "../assets/planning.svg";
import interior from "../assets/interior.svg";
import exterior from "../assets/exterior.svg";
import About from "../assets/about-su-page.svg";
import OurProj from "../assets/OurProjects.svg";
import grid1 from "../assets/grid-img-1.svg";
import grid2 from "../assets/grid-img-2.svg";
import grid3 from "../assets/grid-img-3.svg";
import grid4 from "../assets/grid-img-4.svg";
import grid5 from "../assets/grid-img-5.svg";
import grid6 from "../assets/grid-img-6.svg";
import profile1 from "../assets/profile-img-1.svg";
import profile2 from "../assets/profile-img-2.svg";
import Logo from "../assets/ArchiWeb.svg";
import facebook from "../assets/facebook-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import insta from "../assets/instagram-icon.svg";
import location from "../assets/map.svg";

const HomeCom = () => {
  return (
    <>
      <BgWrap>
        <BoxWrap>
          <Box>
            <h1>Best Solution For Your Home</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet
            </p>
          </Box>
        </BoxWrap>
      </BgWrap>

      <OurSerWrap>
        <OurService>
          <div>
            <h1>Our Services</h1>
          </div>
          <Services>
            <Service>
              <img src={planning} alt="planning" />
              <h3>Planning</h3>
              <P>
                Our Services Line one <br />
                Servive line two
              </P>
            </Service>
            <Service>
              <img src={interior} alt="interior" />
              <h3>Interior</h3>
              <P>
                Our Services Line one <br /> Servive line two
              </P>
            </Service>
            <Service>
              <img src={exterior} alt="exterior" />
              <h3>Exterior</h3>
              <P>
                Our Services Line one <br />
                Servive line two
              </P>
            </Service>
          </Services>
        </OurService>
      </OurSerWrap>

      <AboutWrapAll>
        <AboutWrapp>
          <AboutLeft>
            <img src={About} alt="About" style={{ width: 700, height: 500 }} />
          </AboutLeft>
          <AboutRight>
            <RightMini>
              <h1 style={{ fontSize: 50 }}>About Us</h1>
              <AboutP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </AboutP>
              <p style={{ fontSize: 25 }}>Read more</p>
            </RightMini>
          </AboutRight>
        </AboutWrapp>
      </AboutWrapAll>

      <OurProjWrapAll>
        <OurProjWrap>
          <OurProjLeft>
            <img src={OurProj} alt="OurProj" />
          </OurProjLeft>
          <OurProjRight>
            <p style={{ fontSize: 20 }}>All</p>
            <p style={{ fontSize: 20 }}>Furniture</p>
            <p style={{ fontSize: 20 }}>Design</p>
            <p style={{ fontSize: 20 }}>House</p>
          </OurProjRight>
        </OurProjWrap>
      </OurProjWrapAll>

      <GridWrapAll>
        <GridWrap>
          <GridImgWrap>
            <img src={grid1} alt="grid1" />
            <GridP>Our Services Line one Servive line two</GridP>
          </GridImgWrap>
          <GridImgWrap>
            <img src={grid2} alt="grid2" />
            <GridP>Our Services Line one Servive line two</GridP>
          </GridImgWrap>
          <GridImgWrap>
            <img src={grid3} alt="grid3" />
            <GridP>Our Services Line one Servive line two</GridP>
          </GridImgWrap>
          <GridImgWrap>
            <img src={grid4} alt="grid4" />
            <GridP>Our Services Line one Servive line two</GridP>
          </GridImgWrap>
          <GridImgWrap>
            <img src={grid5} alt="grid5" />
            <GridP>Our Services Line one Servive line two</GridP>
          </GridImgWrap>
          <GridImgWrap>
            <img src={grid6} alt="grid6" />
            <GridP>Our Services Line one Servive line two</GridP>
          </GridImgWrap>
        </GridWrap>
      </GridWrapAll>

      <TestimonialWrap>
        <Testimonial>
          <h1 style={{ fontSize: 50 }}>Testimonial</h1>
        </Testimonial>
      </TestimonialWrap>

      <ProfileWrapAll>
        <ProfileWrap>
          <ProfileLeft>
            <img src={profile1} alt="profile1" />
            <ProfileTexts>
              <h2>James Passaquindici Arcand</h2>
              <ProfileP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </ProfileP>
            </ProfileTexts>
          </ProfileLeft>
          <ProfileRight>
            <img src={profile2} alt="profile2" />
            <ProfileTexts>
              <h2>Abram Schleifer</h2>
              <ProfileP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </ProfileP>
            </ProfileTexts>
          </ProfileRight>
        </ProfileWrap>
      </ProfileWrapAll>

      <FooterWrapAll>
        <FooterWrap>
          <FooterDiv>
            <img src={Logo} alt="Logo" />
            <p style={{ width: 280 }}>
              Archiweb is an architectural consultant based in Berlin, Germany.
              We provide solutions for your architecture and residential design
            </p>
            <div>
              <img src={facebook} alt="facebook" />
              <img
                src={twitter}
                alt="twitter"
                style={{ marginLeft: 15, marginRight: 15 }}
              />
              <img src={insta} alt="insta" />
            </div>
          </FooterDiv>
          <FooterDiv>
            <h1>Articles</h1>
            <p>7 Tips for Kids</p>
            <p>Friendly Interior Design </p>
            <p>Smart Tips for Changing a Room</p>
            <p>Eco-friendly design</p>
          </FooterDiv>
          <FooterDiv>
            <h1>Links</h1>
            <p>Links</p>
            <p>Links</p>
            <p>Links</p>
          </FooterDiv>
          <FooterDiv>
            <img src={location} alt="locaton" />
          </FooterDiv>
        </FooterWrap>
      </FooterWrapAll>
    </>
  );
};

export default HomeCom;
