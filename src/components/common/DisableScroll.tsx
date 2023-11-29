import { ReactElement, useEffect, useRef } from 'react';

type Props = {
  enable: boolean;
};

const DisableScroll = (props: Props): ReactElement => {
  const scrollContainer = useRef<HTMLElement>(document.documentElement);
  useEffect(() => {
    if (props.enable) {
      scrollContainer.current.classList.add('overflow-hidden');
    }
    return () => {
      scrollContainer.current.classList.remove('overflow-hidden');
    };
  }, [props.enable]);
  return <></>;
};

export default DisableScroll;
