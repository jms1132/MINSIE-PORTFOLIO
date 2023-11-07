/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useState } from 'react';

interface useOnViewProps {
  target: React.RefObject<HTMLDivElement>;
  onlyOnce?: boolean;
  options?: IntersectionObserverInit;
  enabled?: boolean;
}

export default function useOnView({
  enabled = true,
  ...props
}: useOnViewProps): boolean | undefined {
  const [onView, setOnView] = useState<boolean | undefined>(undefined);

  useLayoutEffect(() => {
    if (!props.target.current || !enabled) {
      return;
    }

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!!props.onlyOnce && onView) {
          return;
        }
        setOnView((prev) => {
          if (!!props.onlyOnce && prev) {
            return prev;
          }
          return entry.isIntersecting;
        });
      });
    };

    const observer = new IntersectionObserver(callback, props.options);
    observer.observe(props.target.current);
    return () => {
      if (props.target.current) {
        observer.unobserve(props.target?.current);
      }
    };
  }, [enabled, props.target.current]);

  return onView;
}
