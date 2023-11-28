import { Theme } from '@/style/Theme';
import { mobileMedia } from '@/style/deviceWidth';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

interface SummaryRowProps {
  name: string;
  content: string | ReactNode;
}
const SummaryRow = (props: SummaryRowProps): ReactElement => {
  return (
    <DIV_SummaryRow>
      <div className="title">{props.name}</div>
      <div className="content">{props.content}</div>
    </DIV_SummaryRow>
  );
};

const DIV_SummaryRow = styled.div`
  display: flex;
  gap: 5px;
  .title {
    flex-shrink: 0;
    width: 30%;
    ${Theme.Typography.extraBold};
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    gap: 5px;
  }

  ${mobileMedia} {
    .title {
      ${Theme.Typography.extraBold};
      ${Theme.Typography.subtitle3};
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      word-break: break-all;
      gap: 5px;
    }
  }
`;

export default SummaryRow;
