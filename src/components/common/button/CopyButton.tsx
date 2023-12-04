import { ReactElement } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

interface CopyButtonProps {
  value: string;
  children: ReactElement | string;
}

const CopyButton = (props: CopyButtonProps): ReactElement | null => {
  if (!props.value || !props.value.length) {
    return null;
  }
  return <CopyToClipboard text={props.value}>{props.children}</CopyToClipboard>;
};

export default CopyButton;
