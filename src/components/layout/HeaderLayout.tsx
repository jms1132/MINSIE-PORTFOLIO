import { StyledProps } from '@/style/Styled';
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
  background-color: transparent;
  z-index: 10;

  ${({ styles }) => styles}
`;

export default HeaderLayout;
