import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { agencyTheme } from 'common/src/theme/agency';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, AgencyWrapper } from '../containers/Agency/agency.style';
import Navbar from '../containers/Agency/Navbar';
import BannerSection from '../containers/Agency/BannerSection';
import AboutUsSection from '../containers/Agency/AboutUsSection';
import WorkHistory from '../containers/Agency/WorkHistory';
import VideoSection from '../containers/Agency/VideoSection';
import QualitySection from '../containers/Agency/QualitySection';
import Footer from '../containers/AgencyDigital/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';

export default () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start head section */}
        <Head>
          <title>Rafco | Rafco Company</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="Rafco landing page" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of  head section */}
        {/* Start  wrapper section */}
        <AgencyWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <AboutUsSection />
          <WorkHistory />
          <QualitySection />
          <VideoSection />
          <Footer />
        </AgencyWrapper>
        {/* End of  wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
