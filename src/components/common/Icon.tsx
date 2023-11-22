import { AssetType } from '@/assets/Assets';
import { StyledProps } from '@/style/StyledProps';
import { memo, ReactElement, ReactNode, SVGAttributes } from 'react';

import styled from 'styled-components';

interface StyledIconProps extends StyledProps {
  viewBox?: string;
  colorType?: 'fill' | 'stroke';
}
export interface IconProps extends SVGAttributes<SVGElement>, StyledIconProps {
  asset: AssetType;
  filters?: ReactNode;
}

const Icon = (props: IconProps): ReactElement => {
  if (!validateProps(props)) {
    return <></>;
  }

  const { colorType = 'fill' } = props.asset;

  return (
    <SVG_Icon
      {...props}
      viewBox={props.asset.viewBox}
      colorType={colorType}
      styles={[props.asset.colors, props.styles]}
    >
      {props.asset.icon}
      <defs>{props.filters}</defs>
    </SVG_Icon>
  );
};

const validateProps = (props: IconProps) => {
  try {
    if (props.asset.viewBox?.split(' ').length !== 4) {
      return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};

const SVG_Icon = styled.svg<StyledIconProps>`
  user-select: none;
  display: inline-block;
  fill: transparent;
  ${({ colorType }) => colorType}: currentColor;
  flex-shrink: 0;
  ${({ viewBox }) => {
    if (!viewBox) {
      return '';
    }

    const size = viewBox?.split(' ');
    return `
      width: ${size[2]}px;
      height: ${size[3]}px;
    `;
  }}
  ${({ styles }) => styles}
`;

export default memo(Icon);
