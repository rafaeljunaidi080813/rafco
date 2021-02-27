import React from 'react';
import Fade from 'react-reveal/Fade';

import Container from 'common/src/components/UI/ContainerTwo';
import Image from 'common/src/components/Image';
import Link from 'common/src/components/Link';
import Heading from 'common/src/components/Heading';
import {
  Section,
  FooterTop,
  FooterWidget,
  FooterBottom,
  Copyright,
  FooterNav,
  Nav
} from './footer.style';
import data from 'common/src/data/AgencyModern';
import Logo from 'common/src/assets/image/Agency/logo.png';

const Footer = () => {
  return (
    <Section>
      <Container>
        <FooterTop>
          <FooterWidget>
            <Fade up delay={500}>
              <Heading as="h4" content="Connect" />
              <Nav>
                {data.social.map((item) => (
                  <Link key={item.id} href="#">
                    <Image src={item.icon} alt="Facebook" />
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>
          <FooterWidget>
            <Fade up delay={500}>
              <Heading as="h4" content="Contact" />
              <Nav>
                {data.contact.map((item) => (
                  <Link key={item.id} href="#">
                    <Image src={item.icon} alt="Facebook" />
                    {item.title}
                  </Link>
                ))}
              </Nav>
            </Fade>
          </FooterWidget>

          <FooterWidget>
            <Fade up delay={500}>
              <Heading as="h4" content="Alamat" />
                <Nav>
                  {data.alamat.map((item) => (
                    <Link key={item.id} href="#">
                      {item.title}
                    </Link>
                  ))}
                </Nav>
            </Fade>
          </FooterWidget>
        </FooterTop>
        <FooterBottom>
          <Copyright>
            <Image src={Logo} alt="Agency Digital" />
            &copy; {new Date().getFullYear()} Copyright all right reserved
          </Copyright>
        </FooterBottom>
      </Container>
    </Section>
  );
};

export default Footer;
