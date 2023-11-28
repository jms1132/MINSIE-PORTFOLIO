import { useEffect } from 'react';

interface KeyDownHandler {
  onKeyDown: (e: KeyboardEvent) => void;
  key: KeyboardEvent['key'];
}

export interface KeyDownEventRegisterProps {
  handlers: KeyDownHandler[];
}

export const KeyDownEventRegister = (
  props: KeyDownEventRegisterProps
): null => {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      props.handlers.map((handler) => {
        if (e.key === handler.key) {
          handler.onKeyDown(e);
        }
      });
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [props]);

  return null;
};
