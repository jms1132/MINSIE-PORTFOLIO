import { ToastProps } from '@/hooks/useToast';
import { ReactElement } from 'react';
import styled from 'styled-components';

const Toast = (props: ToastProps): ReactElement => {
  return (
    <>
      {props.isShowing ? (
        <StyledToast className={props.isShowing ? 'active' : ''}>
          {props.message}
        </StyledToast>
      ) : null}
    </>
  );
};

const StyledToast = styled.div`
  position: fixed;
  bottom: 5%;
  left: 50%;
  z-index: 100;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  background-color: rgba(1, 1, 1, 0.7);
  &.active {
    animation-duration: 1.5s;
    animation-name: fadeout;
  }
  &:hover {
    transform: scale(1.05);
  }
  @keyframes fadeout {
    70% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`;

export default Toast;
