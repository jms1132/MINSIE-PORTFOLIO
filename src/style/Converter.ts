import { Property } from 'csstype';
import { css, CSSProp } from 'styled-components';

export function columnGap(value: Property.Gap): CSSProp {
  return css`
    margin-right: ${value};
    &:last-child {
      margin-right: 0;
    }
  `;
}
