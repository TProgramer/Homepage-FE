import { Dispatch, SetStateAction } from 'react';

interface IModalProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  item?: {
    url: string[];
    title: string;
    description: string;
  }
}

const ModalWindow = () => {
  return (
    null
  )
}
export default ModalWindow;