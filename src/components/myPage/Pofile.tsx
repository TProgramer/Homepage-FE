import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import CheckIcon from '@mui/icons-material/Check';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { ProfileBox, Profile, ProfileImg, TypeText, Information, ProfileHeader, Name, Info, NameBox, ProfileImg_unset, DefaultInfo, Bio, Contact, Input, BioInput, ContactBox } from '../../styles/MyPage/header';

interface IPersonalType {
  id: number;
  name: string;
  major: string;
  grade: number;
  type: string;
  profileImg: string;
  team: string;
  bio: string;
  contact: {
    email: string;
    number: string;
    link: string;
  }
  activity: string[];
}
const personalData: IPersonalType[] = [
  {
    id: 0,
    name: '박인재',
    major: '건축공학과',
    grade: 2,
    type: 'Front-End',//Front-End, Back-End, DevOps, etc
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdkVemYyTTjjwW8ax1aJ-kHvwR6aK1VTPKRSbvlnIlMs340p0iFzcs_u878365DmbZvI&usqp=CAU',
    team: 'NL Homepage-FE Team',
    bio: 'This is Bio Container\nThis is Bio Container\nThis is Bio Container\nThis is Bio Container\nThis is Bio Container',
    contact: {
      email: 'qkrdlswo98@gmail.com',
      number: '010-3393-9410',
      link: 'https://wakatime.com/dashboard'
    },
    activity: []
  },
]

const MyProfile = () => {
  const [onoff, setOnoff] = useState<boolean>(false);
  const onClick = () => {
    setOnoff(!onoff);
  };
  const onSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 왜 작동안하는지 알아보고 해결하기
    setOnoff(!onoff);
  }
  const [bio, setBio] = useState<string>();
  const [mail, setMail] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [link, setLink] = useState<string>();
  const [team, setTeam] = useState<string>();
  const changeBio = (e: React.FormEvent<HTMLInputElement>) => {
    setBio(e.currentTarget.value);
    personalData[0].bio = bio; // 타입문제 해결하기
  };
  const changeMail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMail(e.currentTarget.value);
    personalData[0].contact.email = mail; // 타입문제 해결하기
  };
  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.currentTarget.value);
    personalData[0].contact.number = number; // 타입문제 해결하기
  };
  const changeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.currentTarget.value);
    personalData[0].contact.link = link; // 타입문제 해결하기
  };
  const changeTeam = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeam(e.currentTarget.value);
    personalData[0].team = team; // 타입문제 해결하기
  };
  return (
    <ProfileBox onoff={onoff}>
      <Profile>
        {
          personalData[0].profileImg !== ''
            ? <ProfileImg src={personalData[0].profileImg} />
            : <ProfileImg_unset>Add your Avatar</ProfileImg_unset>
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
        <DefaultInfo>
          <ContactBox>
            <Bio onoff={onoff}>
              {
                onoff
                  ? (
                    <BioInput type='textarea' required onChange={changeBio} placeholder={personalData[0].bio} />
                  )
                  : personalData[0].bio
              }
            </Bio>
            <Contact><EmailOutlinedIcon sx={{ fontSize: 20, marginRight: 1 }} />
              {
                onoff
                  ? (
                    <Input type='email' required onChange={changeMail} placeholder={personalData[0].contact.email} />
                  )
                  : personalData[0].contact.email
              }
            </Contact>
            <Contact><CallOutlinedIcon sx={{ fontSize: 20, marginRight: 1 }} />
              {
                onoff
                  ? (
                    <Input type='text' required onChange={changeNumber} placeholder={personalData[0].contact.number} />
                  )
                  : personalData[0].contact.number
              }
            </Contact>
            <Contact><InsertLinkOutlinedIcon sx={{ fontSize: 20, marginRight: 1 }} />
              {
                onoff
                  ? (
                    <Input type='url' onChange={changeLink} placeholder={personalData[0].contact.link} />
                  )
                  : <a href={personalData[0].contact.link} target='_blank'>{personalData[0].contact.link}</a>
              }
            </Contact>
            <Contact><GroupsOutlinedIcon sx={{ fontSize: 20, marginRight: 1 }} />
              {
                onoff
                  ? (
                    <Input type='text' onChange={changeTeam} placeholder={personalData[0].team} />
                  )
                  : personalData[0].team
              }
            </Contact>
          </ContactBox>
          <Button
            onClick={onClick}
            onSubmit={onSubmit}
            type='submit'
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
        </DefaultInfo>
      </Information>
    </ProfileBox >
  )
}
export default MyProfile;