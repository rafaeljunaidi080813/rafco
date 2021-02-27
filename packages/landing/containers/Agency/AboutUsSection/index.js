import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Card from 'common/src/components/Card';
import Image from 'common/src/components/Image';
import FeatureBlock from 'common/src/components/FeatureBlock';
import AboutUsSectionWrapper from './aboutUsSection.style';
import Container from 'common/src/components/UI/Container';

import data from 'common/src/data/Agency';

import GroupImage1 from 'common/src/assets/image/agency/group/group-image1.jpg';
import GroupImage2 from 'common/src/assets/image/agency/group/group-image2.jpg';
import GroupImage3 from 'common/src/assets/image/agency/group/group-image3.jpg';

const AboutUsSection = ({
  row,
  col,
  title,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  description,
  textArea,
  featureTitle,
  btnStyle
}) => {
  return (
    <AboutUsSectionWrapper id="AboutUsSection">
      <Container>
        <Box {...sectionHeader}>
          <Text content="Tentang Kami" {...sectionSubTitle} />
          <Heading
            content=""
            {...sectionTitle}
          />
        </Box>
      </Container>
      <Box className="row" {...row}>
        <Box className="col" {...col}>
          <Card className="group-gallery">
            <Box className="col1">
              <Fade top delay={30}>
                <Image src={GroupImage1} alt="Feature Image" />
              </Fade>
              <Fade left delay={60}>
                <Image src={GroupImage3} alt="Feature Image" />
              </Fade>
            </Box>
            <Box className="col2">
              <Fade bottom delay={90}>
                <Image src={GroupImage2} alt="Feature Image" />
              </Fade>
            </Box>
          </Card>
        </Box>
        <Box className="col" {...col}>
          <Box {...textArea}>
            <FeatureBlock
              title={<Heading content="Profesional dan kreatif" {...title} />}
              description={
                <div>
                  <Text
                    content="Terdiri dari profesional muda, usia antara 20-30 tahun, yang selalu memiliki ide-ide kreatif dan solutif untuk menjawab setiap permasalahan yang dihadapi klien."
                    {...description}
                  />
                </div>
              }
            />
          </Box>
          <Box {...textArea}>
            {data.aboutus.map((feature, index) => (
              <FeatureBlock
                key={`feature_point-${index}`}
                icon={<i className={feature.icon} />}
                iconPosition="left"
                title={<Heading content={feature.title} {...featureTitle} />}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </AboutUsSectionWrapper>
  );
};

AboutUsSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  textArea: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object
};

AboutUsSection.defaultProps = {
  // About us section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap'
  },
  // About us section col default style
  col: {
    width: [1, '100%', '50%']
  },
  // About us section text area default style
  textArea: {
    maxWidth: '490px',
    pl: '40px'
  },
  // About us section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '30px'
  },
  // About us section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px'
  },

  // feature title default style
  featureTitle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em'
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500'
  },
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px']
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px'
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0'
  }
};

export default AboutUsSection;
