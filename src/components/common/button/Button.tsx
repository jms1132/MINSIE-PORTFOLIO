import { StyledProps } from '@/style/StyledProps';
import { ButtonHTMLAttributes, MouseEvent, ReactElement, useRef } from 'react';

import styled from 'styled-components';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyledProps {}

const Button = (props: ButtonProps): ReactElement => {
  const dataRef = useRef({ prevent: false });

  async function handleClick(e: MouseEvent<HTMLButtonElement>) {
    if (dataRef.current.prevent || !props.onClick) {
      return;
    }
    try {
      dataRef.current.prevent = true;
      await props.onClick(e);
    } finally {
      dataRef.current.prevent = false;
    }
  }

  return (
    <BUTTON_Button {...props} onClick={handleClick}>
      {props.children}
    </BUTTON_Button>
  );
};

const BUTTON_Button = styled.button<StyledProps>`
  ${({ styles }) => styles}
`;

export default Button;
