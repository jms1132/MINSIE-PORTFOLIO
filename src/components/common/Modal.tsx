import { StyledProps } from '@/style/StyledProps';
import { mobileMedia, tabletMedia } from '@/style/deviceWidth';
import { KeyDownEventRegister } from '@/utils/Event';
import { MouseEvent, ReactElement, ReactNode, useRef } from 'react';
import styled from 'styled-components';

export interface ModalProps extends StyledProps {
  open: boolean;
  /** default: true */
  closeOnClickOutside?: boolean;
  close?: () => void;
  closeButton?: ReactNode;
  header?: ReactNode;
  content?: ReactNode | string;
  footer?: ReactNode;
  className?: string;
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
        styles={props.styles}
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
  z-index: 102;
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
    .modal-close-btn {
      transform: translateX(100%);
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      width: 48px;
      height: 48px;
      cursor: pointer;
      &::after {
        content: '닫기';
        display: block;
        position: absolute;
        color: rgb(233, 235, 237);
        bottom: -12px;
        transform: translateY(100%);
      }
    }
  }

  ${tabletMedia} {
    .modal-inner {
      .modal-close-btn {
        width: 36px;
        height: 36px;
      }
    }
  }

  ${mobileMedia} {
    .modal-inner {
      .modal-close-btn {
        height: initial;
        width: initial;
        &::after {
          all: unset;
        }
      }
    }
  }
  ${({ styles }) => styles && styles};
`;

export default Modal;
