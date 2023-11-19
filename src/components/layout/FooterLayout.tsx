import { StyledProps } from '@/style/StyledProps';
import { HTMLAttributes, ReactElement, ReactNode } from 'react';

import styled from 'styled-components';

export interface FooterLayoutProps
  extends StyledProps,
    HTMLAttributes<HTMLElement> {
  footer?: ReactNode;
  children?: ReactNode;
}

const FooterLayout = (props: FooterLayoutProps): ReactElement => {
  return (
    <>
      {props.children || null}
      <FOOTER_Layout {...props}>{props.footer || null}</FOOTER_Layout>
    </>
  );
};

const FOOTER_Layout = styled.footer<StyledProps>`
  ${({ styles }) => styles}
`;

export default FooterLayout;
