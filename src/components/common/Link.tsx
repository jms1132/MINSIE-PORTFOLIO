import LinkHoverStyle from '@/style/LinkHoverStyle';
import { StyledProps } from '@/style/StyledProps';
import { HoverDefaultstyle } from '@/style/common.style';
import { History } from 'history';
import { AnchorHTMLAttributes, MouseEventHandler, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

declare global {
  interface Window {
    REACT_APP_PREFIX_ADDRESS: RegExp;
  }
}

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    StyledProps {
  replace?: boolean;
  state?: History.LocationState;
  disabled?: boolean;
}

const Link = (props: LinkProps): ReactElement => {
  const { styles = LinkHoverStyle.opacity } = props;
  const navigate = useNavigate();
  const isReactRouter =
    window.REACT_APP_PREFIX_ADDRESS?.test(props.href || '') ||
    props.href?.startsWith('?');

  const handleClickLink: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (props.disabled) {
      e.preventDefault();
      return;
    }
    if (props.onClick) {
      props.onClick(e);
      return;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return;
    }
    if (props.target === '_blank') {
      return;
    }

    if (props.href) {
      if (isReactRouter) {
        props.replace
          ? navigate(props.href, {
              replace: true,
              state: props.state,
            })
          : navigate(props.href, {
              state: props.state,
            });
      } else if (!props.replace) {
        return;
      } else {
        window.location.replace(props.href || '');
      }

      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <A_Link styles={styles} {...props} onClick={handleClickLink}>
      {props.children}
    </A_Link>
  );
};

const A_Link = styled.a<StyledProps>`
  display: inline-block;
  &:disabled,
  &[disabled] {
    &:hover {
      opacity: 1;
    }
  }
  ${HoverDefaultstyle}
  ${({ styles }) => styles}
`;

export default Link;
