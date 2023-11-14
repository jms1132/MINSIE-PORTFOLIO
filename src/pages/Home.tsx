import Contact from '@/components/Contact';
import Introduce from '@/components/Introduce';
import Portfolio from '@/components/Portfolio';
import Skill from '@/components/Skill';
import DefaultTemplate from '@/components/template/DefaultTemplate';
import { Theme } from '@/style/Theme';
import { ReactElement } from 'react';
import styled from 'styled-components';

const Home = (): ReactElement => {
  return (
    <MAIN_Home>
      <DefaultTemplate>
        <Introduce />
        <Skill />
        <Portfolio />
        <Contact />
      </DefaultTemplate>
    </MAIN_Home>
  );
};

const MAIN_Home = styled.main`
  .section {
    padding: 150px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .section-title {
      ${Theme.Typography.h1};
      ${Theme.Typography.extraBold};
      ${Theme.Typography.fontHeading};

      padding-bottom: 100px;
      position: relative;
      width: fit-content;
      &::after {
        content: '';
        background-image: url(./images/line.png);
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
`;
export default Home;
