import { HTMLAttributes, ReactElement } from 'react';
import styled, { CSSProp } from 'styled-components';

interface StyledLabelProps {
  styles?: CSSProp;
}

export interface LabelProps
  extends HTMLAttributes<HTMLDivElement>,
    StyledLabelProps {
  name: string;
}

const Label = (props: LabelProps): ReactElement => {
  return (
    <DIV_Label className="label" {...props}>
      {props.name}
    </DIV_Label>
  );
};

const DIV_Label = styled.div<StyledLabelProps>`
  border-radius: 8px;
  width: fit-content;
  padding: 4px 8px;

  ${({ styles }) => styles};
`;
export default Label;
