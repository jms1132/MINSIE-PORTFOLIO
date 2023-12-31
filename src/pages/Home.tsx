import Career from '@/components/part/Career';
import Introduce from '@/components/part/Introduce';
import Contact from '@/components/part/contact/Contact';
import Portfolio from '@/components/part/portfolio/Portfolio';
import Skill from '@/components/part/skill/Skill';
import DefaultTemplate from '@/components/template/DefaultTemplate';
import { Theme } from '@/style/Theme';
import { mobileMedia, tabletMedia } from '@/style/deviceWidth';
import { ReactElement } from 'react';
import styled from 'styled-components';

const Home = (): ReactElement => {
  return (
    <MAIN_Home>
      <DefaultTemplate>
        <Introduce />
        <Skill />
        <Career />
        <Portfolio />
        <Contact />
      </DefaultTemplate>
    </MAIN_Home>
  );
};

const MAIN_Home = styled.main`
  .section {
    padding-top: 150px;
    padding-bottom: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .section-title {
      ${Theme.Typography.h1};
      ${Theme.Typography.extraBold};
      font-family: 'Noto Sans';

      padding-bottom: 100px;
      position: relative;
      width: fit-content;
      &::after {
        content: '';
        background-image: url(./images/common/img-line.png);
        background-size: 100%;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -50px;
        right: -20px;
        display: inline-block;
        width: 130%;
        height: 110%;
      }
    }
  }

  ${tabletMedia} {
    .section {
      padding-top: 120px;
      padding-bottom: 120px;
      .section-title {
        padding-bottom: 80px;
      }
    }
  }
  ${mobileMedia} {
    .section {
      padding-top: 100px;
      padding-bottom: 100px;
      .section-title {
        padding-bottom: 60px;
      }
    }
  }
`;
export default Home;
