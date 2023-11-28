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
  .title {
    width: 20%;
  }
`;

export default SummaryRow;
