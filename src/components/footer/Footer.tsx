import { ReactElement } from 'react';
import styled from 'styled-components';
import Link from '../common/Link';

const Footer = (): ReactElement => {
  return (
    <DIV_Footer>
      <Link href="https://github.com/jms1132" target="_blank">
        <img src="./images/github-logo.svg" alt="" />
      </Link>
      © 2023. Minsie Chung. All rights reserved.
    </DIV_Footer>
  );
};

const DIV_Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 50px 0 80px;
  color: #909497;
  img {
    width: 30px;
  }
`;
export default Footer;