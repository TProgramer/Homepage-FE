import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import {
  ProfileBox,
  Profile,
  ProfileImg,
  TypeText,
  Information,
  ProfileHeader,
  Name,
  Info,
  NameBox,
  ProfileImg_unset,
  Bio,
  Contact,
  Input,
  BioInput,
  ContactBox,
  Button
} from '../../styles/myPage/header';

interface IPersonalType {
  readonly id: number;
  readonly name: string;
  readonly major: string;
  type: 'FrontEnd' | 'BackEnd' | 'DevOps'
  grade: number;
  profileImg: string;
}
const personalData: IPersonalType[] = [
  {
    id: 0,
    name: '박인재',
    major: '건축공학과',
    type: 'FrontEnd',
    grade: 2,
    profileImg: '',//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdkVemYyTTjjwW8ax1aJ-kHvwR6aK1VTPKRSbvlnIlMs340p0iFzcs_u878365DmbZvI&usqp=CAU
  },
]
const iconStyle: {
  fontSize: number;
  marginRight: number;
} = {
  fontSize: 20,
  marginRight: 1
};

const MyProfile = () => {
  const [onoff, setOnoff] = useState<boolean>(false);
  const onClick = () => {
    setOnoff(!onoff);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }
  const [bio, setBio] = useState<string>('This is Bio Container\nThis is Bio Container\nThis is Bio Container\nThis is Bio Container\nThis is Bio Container');
  const [mail, setMail] = useState<string>('qkrdlswo98@gmail.com');
  const [number, setNumber] = useState<string>('010-3393-9410');
  const [link, setLink] = useState<string>('https://wakatime.com/dashboard');
  const [team, setTeam] = useState<string>('NL Homepage-FE Team');
  const changeBio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };
  const changeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.target.value);
  };
  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };
  const changeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };
  const changeTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeam(e.target.value);
  };
  return (
    <>
      <ProfileBox onoff={onoff}>
        <Profile>
          {
            onoff
              ? <ProfileImg_unset><AddBoxIcon sx={{ fontSize: 35, color: 'black', opacity: 0.3, cursor: 'pointer' }} /></ProfileImg_unset>
              : (personalData[0].profileImg !== ''
                ? <ProfileImg src={personalData[0].profileImg} />
                : <ProfileImg_unset>Add your Avatar</ProfileImg_unset>)
          }
          <TypeText>{`<\ ${personalData[0]?.type} / >`}</TypeText>
        </Profile>
        <Information>
          <ProfileHeader>
            <NameBox>
              <Name>{personalData[0].name}</Name>
              <Info>{`${personalData[0].major} ${personalData[0].grade}학년`}</Info>
            </NameBox>
          </ProfileHeader>
          <ContactBox onSubmit={onSubmit}>
            <Bio>
              {
                onoff
                  ? (
                    <BioInput type='textarea' onChange={changeBio} value={bio} />
                  )
                  : bio
              }
            </Bio>
            <Contact><EmailOutlinedIcon sx={iconStyle} />
              {
                onoff
                  ? (
                    <Input type='email' onChange={changeMail} value={mail} />
                  )
                  : mail
              }
            </Contact>
            <Contact><CallOutlinedIcon sx={iconStyle} />
              {
                onoff
                  ? (
                    <Input type='text' onChange={changeNumber} value={number} />
                  )
                  : number
              }
            </Contact>
            <Contact><InsertLinkOutlinedIcon sx={iconStyle} />
              {
                onoff
                  ? (
                    <Input type='url' onChange={changeLink} value={link} />
                  )
                  : <a href={link} target='_blank'>{link}</a>
              }
            </Contact>
            <Contact><GroupsOutlinedIcon sx={iconStyle} />
              {
                onoff
                  ? (
                    <Input type='text' onChange={changeTeam} value={team} />
                  )
                  : team
              }
            </Contact>
            <Button
              onClick={onClick}
              type={!onoff ? 'button' : 'submit'}
            >
              {
                !onoff ? <CreateIcon /> : <CheckIcon />
              }
            </Button>
          </ContactBox>
        </Information>
      </ProfileBox >
    </>
  )
}
export default MyProfile;