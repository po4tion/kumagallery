import React from 'react';
import styled from 'styled-components';
import Profileimg from '../../img/profile/profiles.jpg';

const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  margin: 0 auto;
  max-width: 1200px;
`;

const ProfileImage = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 400px;
  height: 600px;
  overflow: hidden;
  background-image: url(${Profileimg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Profiles = styled.div`
  margin-left: 80px;
`;

const Profilepara = styled.p`
  font-size: 1.5rem;
  font-family: 'Bazzi', sans-serif;
  line-height: 3rem;
  text-align: center;
`;

const Profile = () => {
  return (
    <ProfileBlock>
      <ProfileImage />
      <Profiles>
        <Profilepara>
          안녕하세요! <br />제 이름은 쿠마에요. <br />
          저는 2019년 6월 1일에 태어나, 현재는 1살이에요.
          <br />제 취미는 산책이구요!
          <br />
          소고기와 닭고기를 제일 좋아해요.
          <br />
          사료는 너무 맛이 없어요. 그래도 이틀에 한번은 먹는 편이에요!
          <br /> 또, 저는 아주 건강한 수컷이에요.
          <br /> 제 사진을 보고 싶으시면 쿠마스타그램으로 이동해주세요!
        </Profilepara>
      </Profiles>
    </ProfileBlock>
  );
};

export default Profile;
