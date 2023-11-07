import { ReactElement, ReactNode } from 'react';
import Toolbar from '../toolbar/Toolbar';
import HeaderLayout from '../layout/HeaderLayout';



interface StyledDefaultTemplateContentProps {
  contentBackgroundColor?: string;
}

export interface DefaultTemplateProps
  extends StyledDefaultTemplateContentProps {
  children?: ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  hideFamilyGNB?: boolean;
  disableScrollTop?: boolean;
}

const DefaultTemplate = (props: DefaultTemplateProps): ReactElement => {
  const header = props.hideHeader ? null : (
    <Toolbar mobileColored={false} />
  );

  return <HeaderLayout header={header}>{props.children}</HeaderLayout>;
};

export default DefaultTemplate;
