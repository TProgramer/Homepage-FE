import {
  ModalContainer,
  Modal,
  CloseBtn,
  ThumbNail,
  Img,
  Title,
  Description
} from "../../styles/activity/activityModal";
import { IImageSrc } from "./Masonry";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ModalWindow = (
  {
    windowWidth,
    modal,
    setModal
  }: {
    windowWidth: number,
    modal: IImageSrc,
    setModal: (src?: IImageSrc) => IImageSrc
  }) => {
  const closeModalHandler = (src?: IImageSrc) => {
    setModal(
      {
        onoff: false,
        img: '',
        title: '',
        description: ''
      }
    );
  }
  return (
    <ModalContainer>
      <Modal windowWidth={windowWidth}>
        <CloseBtn>
          <ArrowBackIcon sx={{
            marginRight: '10px'
          }}
            onClick={() => { closeModalHandler() }}
          />
        </CloseBtn>
        <ThumbNail windowWidth={windowWidth}>
          <Img src={modal.img} />
        </ThumbNail>
        <Title>{modal.title}</Title>
        <Description>
          {modal.description}
        </Description>
      </Modal>
    </ModalContainer>
  )
}
export default ModalWindow;