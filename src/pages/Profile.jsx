import Button from "components/common/Button";
import UserImg from "components/common/UserImg";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Profile() {
  const { avatar, nickname, userId } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");

  const clickEditDoneBtn = () => {
    if (!editingText) {
      return alert("수정된 부분이 없습니다.");
    }
    setIsEditing(false);
  };

  return (
    <StProfileContainer>
      <StProfileWrapper>
        <h2>프로필 수정</h2>
        <StProfileInfo>
          <UserImg size="large" src={avatar} />
          {isEditing ? (
            <input
              defaultValue={nickname}
              minLength={1}
              maxLength={10}
              autoFocus
              onChange={(e) => setEditingText(e.target.value)}
            />
          ) : (
            <StProfileNickname>{nickname}</StProfileNickname>
          )}
          <StProfileId>{userId}</StProfileId>
        </StProfileInfo>
        {isEditing ? (
          <>
            <StProfileButtonWrapper>
              <Button
                size="large"
                btnName="취소"
                onClick={() => setIsEditing(false)}
              />
              <Button size="large" btnName="완료" onClick={clickEditDoneBtn} />
            </StProfileButtonWrapper>
          </>
        ) : (
          <Button
            size="large"
            btnName="수정하기"
            onClick={() => setIsEditing(true)}
          />
        )}
      </StProfileWrapper>
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

const StProfileWrapper = styled.section`
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

  & input {
    padding: 4px;
    font-size: 18px;
  }
`;

const StProfileNickname = styled.span`
  margin-top: 10px;
  font-size: 23px;
  font-weight: 600;
`;

const StProfileId = styled.span`
  font-size: 18px;
`;

const StProfileButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
