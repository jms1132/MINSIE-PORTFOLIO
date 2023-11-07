import { CSSProp, css } from 'styled-components';

export interface StyledProps {
  styles?: CSSProp;
}

export const fadeInUp = css`
  &.animate {
    transform: translate(0px);
    opacity: 1;
  }
  transition-property: transform, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease-in;
  transform: translateY(50px);
  opacity: 0;
`;
