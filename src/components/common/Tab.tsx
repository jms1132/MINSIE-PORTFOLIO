import { Theme } from '@/style/Theme';
import { columnGap } from '@/style/common.style';
import { HTMLAttributes, ReactElement, ReactNode } from 'react';
import styled, { CSSProp } from 'styled-components';

interface StyledTabProps {
  styles?: CSSProp;
}

export interface TabProps
  extends HTMLAttributes<HTMLDivElement>,
    StyledTabProps {
  items: ReactNode[];
  activeIndex: number;
  itemClassName?: string;
  setActiveIndex: (index: number) => void;
}

const Tab = (props: TabProps): ReactElement => {
  return (
    <DIV_Tab className="tabs" {...props}>
      {props.items.map((item, index) => (
        <div
          className={`${index === props.activeIndex ? 'active' : ''} ${
            props.itemClassName || 'tab'
          }`}
          key={`tab-${index}`}
          onClick={() => props.setActiveIndex(index)}
        >
          {item}
        </div>
      ))}
    </DIV_Tab>
  );
};

const DIV_Tab = styled.div<StyledTabProps>`
  display: flex;
  ${Theme.Typography.subtitle2};
  ${Theme.Typography.extraBold};
  color: ${Theme.Color.gray600};
  box-sizing: border-box;
  border-bottom: 2px solid ${Theme.Color.gray100};
  margin-bottom: 8px;
  width: 100%;

  .active {
    color: ${Theme.Color.gray900};
  }

  > .tab {
    cursor: pointer;
    box-sizing: border-box;
    padding: 16px 8px;
    ${columnGap('18px')}
    flex-shrink: 0;
    &.active {
      position: relative;
      &::after {
        position: absolute;
        display: block;
        width: 100%;
        left: 0;
        bottom: -2px;
        content: '';
        border-bottom: 2px solid ${Theme.Color.gray900};
      }
    }
  }

  ${({ styles }) => styles};
`;

export default Tab;
