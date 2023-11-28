import { StyledProps } from '@/style/StyledProps';
import { KeyDownEventRegister } from '@/utils/Event';

import {
  HTMLAttributes,
  MouseEvent,
  ReactElement,
  ReactNode,
  useRef,
} from 'react';

import styled from 'styled-components';

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    StyledProps {
  open: boolean;
  /** default: true */
  closeOnClickOutside?: boolean;
  close?: () => void;
  closeButton?: ReactNode;
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

const Modal = ({
  closeOnClickOutside = true,
  ...props
}: ModalProps): ReactElement | null => {
  const clickedRef = useRef<EventTarget>();
  function handleClickClose(e: MouseEvent<HTMLElement>) {
    if (!closeOnClickOutside || clickedRef.current) {
      clickedRef.current = undefined;
      return;
    }
    e.stopPropagation();
    props.close && props.close();
  }

  return props.open ? (
    <>
      <KeyDownEventRegister
        handlers={[
          {
            onKeyDown: () => props.close && props.close(),
            key: 'Escape',
          },
        ]}
      />
      <DIV_Modal
        {...props}
        className={`modal-outer ${props.className || ''}`}
        onMouseUp={handleClickClose}
      >
        <div
          className={'modal-inner'}
          onMouseDown={(e) => {
            clickedRef.current = e.target;
          }}
          onMouseUp={(e) => {
            clickedRef.current = e.target;
          }}
        >
          {props.header && <header>{props.header}</header>}
          {props.closeButton && (
            <div className={'modal-close-btn'} onClick={props.close}>
              {props.closeButton}
            </div>
          )}
          {props.content && <main>{props.content}</main>}
          {props.footer && <footer>{props.footer}</footer>}
        </div>
      </DIV_Modal>
    </>
  ) : null;
};

const DIV_Modal = styled.div<StyledProps>`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);

  display: flex;
  align-items: center;
  justify-content: center;
  .modal-inner {
    display: flex;
    flex-direction: column;
  }

  ${({ styles }) => styles && styles};
`;

export default Modal;
