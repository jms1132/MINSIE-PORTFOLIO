import { Property } from 'csstype';
import { CSSProp, css } from 'styled-components';

export const HoverDefaultstyle = css`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ScrollbarDefaultStyle = css`
  &::-webkit-scrollbar-corner {
    background-color: inherit;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #bfc6d2;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }
`;

export const fadeInUp = css`
  &.animate {
    transform: translate(0px);
    opacity: 1;
  }
  transition-property: transform, opacity, box-shadow;
  transition-duration: 1s;
  transition-timing-function: ease-in;
  transform: translateY(50px);
  opacity: 0;
`;

export const HideScrollbarStyle = css`
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export function columnGap(value: Property.Gap): CSSProp {
  return css`
    margin-right: ${value};
    &:last-child {
      margin-right: 0;
    }
  `;
}
