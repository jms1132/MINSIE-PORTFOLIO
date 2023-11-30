import { StyledProps } from '@/style/StyledProps';
import { tabletMedia } from '@/style/deviceWidth';
import { HTMLAttributes, ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

export interface HeaderLayoutProps
  extends StyledProps,
    HTMLAttributes<HTMLElement> {
  header?: ReactNode;
  children?: ReactNode;
}

const HeaderLayout = (props: HeaderLayoutProps): ReactElement => {
  return (
    <>
      <HEADER_Layout {...props}>{props.header || null}</HEADER_Layout>
      {props.children || null}
    </>
  );
};

const HEADER_Layout = styled.header<StyledProps>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 101;
  background-color: transparent;

  ${tabletMedia} {
  }
  ${({ styles }) => styles}
`;

export default HeaderLayout;
