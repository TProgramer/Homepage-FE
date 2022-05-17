import styled from "@emotion/styled";
const REACTIVE_HEADER_PIXEL = '850px';

export const ProfileBox = styled('div') <{ onoff: boolean }>`
  width: 850px;
  height: ${props => !props.onoff ? 320 : 350};
  padding: 15px;
  display: flex;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 25px;
  border-radius: 10px;
  position: relative;
  @media (max-width: ${REACTIVE_HEADER_PIXEL}) {
    width: 480px;
    height: 680px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`
export const Profile = styled('div')`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px 0 10px;
`
export const ProfileImg_unset = styled('div')`
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 7px 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border-radius: 50%;
  font-weight: 600;
  font-size: 15px;
`
export const ProfileImg = styled('img')`
  width: 260px;
  height: 260px;
  margin: 0 0 7px 0;
  border-radius: 50%;
  `
export const TypeText = styled('span')`
  display: block;
  width: auto;
  color: #9c88ff; 
  font-weight: 600;
`
export const Information = styled('div')`
  width: 550px;
  height: 100%;
  margin: 0 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: ${REACTIVE_HEADER_PIXEL}) {
    width: 480px;
    align-items: center;
  }
`
export const ProfileHeader = styled('div')`
  width: 550px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 15px 0;
    @media (max-width:${REACTIVE_HEADER_PIXEL}) {
    width: 480px;
    justify-content: space-around;
  }
`
export const NameBox = styled('div')`
  width: auto;
`
export const Name = styled('span')`
  color: #9c88ff;
  font-size: 28px;
  font-weight: 600;
`
export const Info = styled('span')`
  opacity: 0.4;
  font-size: 15px;
  margin: 0 0 0 3px;
`
export const DefaultInfo = styled('div')`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: ${REACTIVE_HEADER_PIXEL}) {
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 15px;
    width: 95%;
  }
`
export const ContactBox = styled('form')`
  width: 300px;
  @media (max-width: ${REACTIVE_HEADER_PIXEL}) {
    display: flex;
    flex-direction: column;
  }
  `
export const Bio = styled('p')`
  width: 100%;
  min-height: 30px;
  color: rgba(0,0,0,0.6);
  margin: 0 0 15px 0;
  padding: 0 0 10px 0;
`
export const Contact = styled('div')`
  color: rgba(0, 0, 0, 0.3);
  width: auto;
  margin: 0 0 7px 0;
  display: flex;
  align-items: center;
`
export const BioInput = styled('input')`
  display: block;
  word-wrap: break-word;
  width: 270px;
  height: 120px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  transition: all 0.1s linear;
  color: rgba(0, 0, 0, 0.7);
  &:focus{
    outline: none;
    border: 2px solid #9C88FF;
}
`
export const Input = styled('input')`
  width: 240px;
  height: 25px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  transition: all 0.1s linear;
  color: rgba(0, 0, 0, 0.7);
  &:focus{
    outline: none;
    border-bottom: 2px solid #9C88FF;
}
`
export const Button = styled('button')`
  width: 80px;
  height: 40px;
  background-color: #9c88ff;
  border: none;
  border-radius: 6px;
  color: white;
  position: absolute;
  top: 86.5%;
  left: 90%;
  &:hover {
    background-color: #8c7ae6;
  }
  @media (max-width: ${REACTIVE_HEADER_PIXEL}) {
    top: 93%;
    left: 82%;
  }
`