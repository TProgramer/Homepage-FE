import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { ProfileBox, Profile, ProfileImg, TypeText, DataBox, NickName, Name, NameBox, ProfileImg_unset } from '../../styles/MyPage/Header';
import { useState } from 'react';
interface IPersonalType {
  nickname: string;
  name: string;
  major: string;
  grade: number;
  type: string;
  profileImg: string;
}
const personalData: IPersonalType[] = [
  {
    nickname: 'CWCTBOY',
    name: '박인재',
    major: '공과대학 건축공학과',
    grade: 4,
    type: 'Front-End',
    profileImg: '',
  },
]

const MyProfile = () => {
  const [onoff, setOnoff] = useState<boolean>(false);
  const onClick = () => {
    setOnoff(!onoff);
  };//수정버튼 눌렀을 때 프로필사진, 닉네임, 타입, 바이오 등 바꿀수 있도록 만들기
  return (
    <ProfileBox>
      <Profile>
        {
          personalData[0].profileImg !== ''
            ? <ProfileImg />
            : <ProfileImg_unset>Add your Avatar</ProfileImg_unset>
        }
        <TypeText>{`<\ ${personalData[0]?.type} / >`}</TypeText>
      </Profile>
      <DataBox>
        <NameBox>
          <NickName>{personalData[0].nickname}</NickName>
          <Name>{personalData[0].name}</Name>
        </NameBox>
      </DataBox>
      <Button
        onClick={onClick}
        sx={{
          width: 80,
          height: 40,
          backgroundColor: '#9c88ff',
          ":hover": {
            backgroundColor: '#8c7ae6'
          }
        }} variant="contained">
        {
          !onoff ? <CreateIcon /> : <CheckIcon />
        }
      </Button>
    </ProfileBox>
  )
}
export default MyProfile;