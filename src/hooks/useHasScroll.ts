/* eslint-disable @typescript-eslint/no-explicit-any */
import { debounce } from 'lodash';
import { RefObject, useEffect, useState } from 'react';

export default function useHasScroll(targetRef: RefObject<HTMLDivElement> | any) {
  const [hasScroll, setHasScroll] = useState<boolean>(true);
  
  useEffect(() => {
    if (!targetRef.current) {
      return;
    }

    setHasScroll(targetRef.current.scrollHeight > targetRef.current.clientHeight);

      const handleWindowResize = debounce(() => {
          if (targetRef.current) {
              setHasScroll(targetRef.current.scrollHeight > targetRef.current.clientHeight);
            }
        }, 500);
        
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [targetRef]);

  return hasScroll;
}

