import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
export const ProfileBox = styled('div')`
  width: 850px;
  height: 480px;
  margin-top: 10px;
  padding: 20px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.13) 0px 5px 25px;
  border-radius: 10px;
  @media (max-width:850px) {
    width: 480px;
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
  margin: 0 20px 0 0;
`
const TEXT_ANIMATION = keyframes`
  0%, 100%{
    background-position: 200% 0%;
  }
  50%{
    background-position: 0% 200%;
  }
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
  line-height:65px;
  letter-spacing: 10px;
  text-align: center;
  text-transform: uppercase;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 400%;
  animation: ${TEXT_ANIMATION} 5s ease infinite;
  background-image: linear-gradient( 68.7deg,  rgba(29,173,235,1) 13.2%, rgba(137,149,250,1) 29.8%, rgba(229,109,212,1) 48.9%, rgba(255,68,128,1) 68.2%, rgba(255,94,0,1) 86.4% );
`
export const ProfileImg = styled('img')`
  width: 260px;
  height: 260px;
  margin: 0 0 7px 0;
  background-color: rgba(0,0,0,0.2);
  border-radius: 50%;
  `
export const TypeText = styled('span')`
  display: block;
  width: auto;
  color: #9c88ff; 
  font-weight: 600;
`
export const DataBox = styled('div')`
  width: 440px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 850px) {
    align-items: center;
    margin: 0 0 10px 0;
  }
`
export const NameBox = styled('div')`
  width: auto;
`
export const NickName = styled('span')`
  color: #9c88ff;
  font-size: 28px;
  font-weight: 600;
`
export const Name = styled('span')`
  opacity: 0.4;
  font-size: 18px;
  margin: 0 0 0 3px;
`