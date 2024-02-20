import styled from "styled-components";

function Profile() {
  return (
    <StProfileContainer>
      <StProfileForm>
        <STProfileTitle>프로필 수정</STProfileTitle>
        <StProfileInfo>
          <StProfileFigure>
            <img alt="유저이미지" />
          </StProfileFigure>
          <StProfileNickname>닉네임</StProfileNickname>
          <StProfileId>유저아이디</StProfileId>
        </StProfileInfo>

        <StProfileButton>수정하기</StProfileButton>
      </StProfileForm>
    </StProfileContainer>
  );
}

export default Profile;

const StProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -50px auto;
  height: 100vh;
  background-image: linear-gradient(
    to right,
    #aee1f9,
    #b3c8ee,
    #b9afe5,
    #bd96da
  );
`;

const StProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 25px 30px;
  border: 1px solid white;
  border-radius: 10px;
  width: 400px;
  user-select: none;
`;

const STProfileTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin-top: 10px;
`;

const StProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  margin: 0px 10px;
`;

const StProfileFigure = styled.figure`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50%;
  }
`;

const StProfileNickname = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const StProfileId = styled.p``;

const StProfileButton = styled.button`
  padding: 10px;
  font-size: 18px;
  font-weight: 600px;
  background-color: #4b3c57;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: transparent;
  }
`;
