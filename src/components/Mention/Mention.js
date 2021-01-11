import React from 'react';
import styled from 'styled-components';
import '../../fonts/fonts.css';

const Mention = () => {
  const MentionBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
  `;

  const MetionStory = styled.h2`
    font-family: 'Wemakeprice-Bold', sans-serif;
  `;

  return (
    <MentionBlock>
      <MetionStory>쿠마와의 소중한 추억을 기록하기 위한 사진첩</MetionStory>
    </MentionBlock>
  );
};

export default Mention;
