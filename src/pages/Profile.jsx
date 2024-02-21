import Button from "components/common/Button";
import UserImg from "components/common/UserImg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { __editProfile } from "../redux/modules/authSlice";
import styled from "styled-components";
import { __updateFanLetter } from "../redux/modules/fanLetterSlice";

function Profile() {
  const dispatch = useDispatch();
  const { avatar, nickname, userId } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");
  const [editingImg, setEditingImg] = useState(avatar);
  const [selectedImg, setSelectedImg] = useState(avatar);

  const handleEditingImg = (e) => {
    const file = e.target.files[0];
    setEditingImg(file);
    setSelectedImg(URL.createObjectURL(file)); // 이미지 파일의 로컬 URL 생성
  };

  const clickEditDoneBtn = () => {
    if (!editingText && selectedImg === avatar) {
      return toast.warning("수정된 부분이 없습니다.");
    }
    const checkEdit = window.confirm("수정하시겠습니까?");
    if (checkEdit) {
      // 프로필 변경

      // 이미지파일을 FormData에 담는 방법
      const formData = new FormData();
      // avatar와 nickname 중 하나 또는 모두 변경 가능
      if (selectedImg !== avatar) {
        formData.append("avatar", editingImg);
      }
      if (editingText) {
        formData.append("nickname", editingText);
      }

      dispatch(__editProfile(formData));
      dispatch(__updateFanLetter({ editingText, editingImg }));
      setIsEditing(false);
      toast.success("프로필 수정이 완료 되었습니다.");
    }
  };

  return (
    <StProfileContainer>
      <StProfileWrapper>
        <h2>프로필 수정</h2>
        <StProfileInfo>
          {isEditing ? (
            <>
              <label>
                <UserImg size="large" item={selectedImg} />
                <input
                  type="file"
                  onChange={handleEditingImg}
                  accept="image/jpg,image/png,image/jpeg"
                />
              </label>
              <input
                defaultValue={nickname}
                minLength={1}
                maxLength={10}
                autoFocus
                onChange={(e) => setEditingText(e.target.value)}
              />
            </>
          ) : (
            <>
              <UserImg size="large" item={selectedImg} />
              <StProfileNickname>{nickname}</StProfileNickname>
            </>
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

  & label > input {
    display: none;
  }

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
