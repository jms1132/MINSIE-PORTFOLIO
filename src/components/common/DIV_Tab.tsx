import { Theme } from '@/style/Theme';
import styled from 'styled-components';

export const DIV_Tab = styled.div`
  display: flex;
  ${Theme.Typography.subtitle2}
  ${Theme.Typography.bold}
  color: ${Theme.Color.gray600};
  box-sizing: border-box;
  border-bottom: 2px solid ${Theme.Color.gray100};
  margin-bottom: 8px;

  ${Theme.MediaQuery.mobile} {
    min-width: 100%;
    width: max-content;
  }

  .active {
    color: ${Theme.Color.gray900};
  }

  > .tab {
    cursor: pointer;
    box-sizing: border-box;
    padding: 16px 0;
    ${columnGap('18px')}
    &.active {
      position: relative;
      ::after {
        position: absolute;
        display: block;
        width: 100%;
        left: 0;
        bottom: -2px;
        content: '';
        border-bottom: 2px solid ${LoudTheme.Color.gray900};
      }
    }
  }
`;
