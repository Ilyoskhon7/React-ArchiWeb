import React from "react";
import {
  BgWrap,
  Box,
  BoxWrap,
  OurService,
  OurSerWrap,
  P,
  Service,
  Services,
} from "../Styles/homeComStyle";
import planning from "../assets/planning.svg";
import interior from "../assets/interior.svg";
import exterior from "../assets/exterior.svg";
import { AboutWrap } from "../Styles/homeComStyle";
import About from "../assets/about-su-page.svg";

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

      <AboutWrap>
        <div>
          <div>
            <img src={About} alt="About" />
          </div>
          <div>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <p>Read more</p>
          </div>
        </div>
      </AboutWrap>
    </>
  );
};

export default HomeCom;
