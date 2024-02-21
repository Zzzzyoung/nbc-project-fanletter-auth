import UserImg from "components/common/UserImg";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.auth);

  const editProfileHandler = (event) => {
    event.preventDefault();
  };

  return (
    <StProfileContainer>
      <StProfileForm onSubmit={editProfileHandler}>
        <h2>프로필 수정</h2>
        <StProfileInfo>
          <UserImg size="large" src={avatar} />
          <StProfileNickname>{nickname}</StProfileNickname>
          <StProfileId>{userId}</StProfileId>
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
  align-items: center;
  gap: 30px;
  padding: 30px 45px;
  border: 1px solid white;
  border-radius: 10px;
  width: 450px;
  user-select: none;

  & h2 {
    font-size: 32px;
    font-weight: 600;
    margin-top: 10px;
  }
`;

const StProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const StProfileNickname = styled.span`
  margin-top: 10px;
  font-size: 23px;
  font-weight: 600;
`;

const StProfileId = styled.span`
  font-size: 18px;
`;

const StProfileButton = styled.button`
  width: 100%;
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
