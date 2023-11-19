import { ReactElement } from 'react';
import styled from 'styled-components';

const Footer = (): ReactElement => {
  return <DIV_Footer>© 2023. Minsie Chung. All rights reserved.</DIV_Footer>;
};

const DIV_Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0 80px;
  color: #909497;
`;
export default Footer;
