import { StyledProps } from '@/style/StyledProps';
import { Theme } from '@/style/Theme';
import { mobileMedia } from '@/style/deviceWidth';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface SummaryRowProps extends StyledProps {
  name: string;
  content: string | ReactNode;
}
const SummaryRow = (props: SummaryRowProps): ReactElement => {
  return (
    <DIV_SummaryRow styles={props.styles}>
      <div className="title">{props.name}</div>
      {typeof props.content == 'string' ? (
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: props.content || '' }}
        />
      ) : (
        <div className="content">{props.content}</div>
      )}
    </DIV_SummaryRow>
  );
};

const DIV_SummaryRow = styled.div<StyledProps>`
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
    word-break: keep-all;
    ${Theme.Typography.subtitle3};

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
      word-break: keep-all;
      gap: 5px;
    }
  }
  ${({ styles }) => styles && styles};
`;

export default SummaryRow;
