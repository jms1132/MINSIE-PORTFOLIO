import { useState } from 'react';

export interface ToastProps {
  isShowing: boolean;
  message: string;
}

export interface useToastReturnType {
  toastProps: ToastProps;
  showMessage: (v: string) => void;
}
const useToast = (): useToastReturnType => {
  const [toastProps, setToastProps] = useState<ToastProps>({
    isShowing: false,
    message: '',
  });

  const showMessage = async (message: string) => {
    let timeout: NodeJS.Timeout | null = null;
    setToastProps({
      isShowing: true,
      message,
    });

    timeout = setTimeout(
      () => setToastProps({ ...toastProps, isShowing: false }),
      1000
    );

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  };

  return {
    toastProps,
    showMessage,
  };
};

export default useToast;
