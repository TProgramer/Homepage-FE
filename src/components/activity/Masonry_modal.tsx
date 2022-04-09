import { Dispatch, SetStateAction } from 'react';
import { CloseBtn, Modal, ModalBox, Picture, DescriptionBox, DescTitle, Description, PictureBox } from '../../styles/Activity/activity_modal';

interface IModalProps {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  item?: {
    url: string[];
    title: string;
    description: string;
  }
}

const ModalWindow = (props: IModalProps) => {
  const onClick = () => {
    props.setModal(!props.modal)
  }
  return (
    <ModalBox>
      <Modal>
        <PictureBox>
          <Picture src={props.item?.url[0]} alt='활동사진' />
        </PictureBox>
        <DescriptionBox>
          <CloseBtn onClick={onClick}>Exit</CloseBtn>
          <DescTitle>Title : {props.item?.title}</DescTitle>
          <Description>{props.item?.description}</Description>
        </DescriptionBox>
      </Modal>
    </ModalBox>
  )
}
export default ModalWindow;