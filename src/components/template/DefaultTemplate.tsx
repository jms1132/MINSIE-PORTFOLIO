import { mobileMedia, tabletMedia } from '@/style/deviceWidth';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import FooterLayout from '../layout/FooterLayout';
import HeaderLayout from '../layout/HeaderLayout';
import Toolbar from '../toolbar/Toolbar';

interface StyledDefaultTemplateContentProps {
  contentBackgroundColor?: string;
}

export interface DefaultTemplateProps
  extends StyledDefaultTemplateContentProps {
  children?: ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  disableScrollTop?: boolean;
}

const DefaultTemplate = (props: DefaultTemplateProps): ReactElement => {
  const header = props.hideHeader ? null : <Toolbar />;
  const footer = props.hideFooter ? null : <Footer />;

  return (
    <HeaderLayout header={header}>
      <DIV_Contents>{props.children}</DIV_Contents>
      <FooterLayout footer={footer} />
    </HeaderLayout>
  );
};

const DIV_Contents = styled.div`
  .content-max {
    margin: 0 auto;
    padding-left: 80px;
    padding-right: 80px;
    position: relative;
    max-width: 1440px;
    width: 100%;
  }
  ${tabletMedia} {
    .content-max {
      padding: 0 60px;
    }
  }
  ${mobileMedia} {
    .content-max {
      padding: 0 40px;
    }
  }
`;
export default DefaultTemplate;
