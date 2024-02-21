import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { formattedCreatedAt } from "util/Date";
import UserImg from "components/common/UserImg";
import Button from "components/common/Button";
import CommonModal from "components/common/CommonModal";
import { useSelector, useDispatch } from "react-redux";
import {
  __getFanLetter,
  __deleteFanLetter,
  __editFanLetter,
} from "../redux/modules/fanLetterSlice";

function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTextArea, setEditedTextArea] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { fanLetters, isLoading } = useSelector((state) => state.fanLetters);
  const myId = useSelector((state) => state.auth.userId);

  // 삭제하기
  // 삭제 모달창 열기
  const openModal = () => setIsModalOpen(true);
  // 삭제 모달창 닫기
  const closeModal = () => setIsModalOpen(false);

  // 삭제하기
  const clickDeleteBtn = () => {
    openModal();
  };

  // 삭제 모달창 확인
  const confirmDeleteModal = () => {
    dispatch(__deleteFanLetter(id));
    navigate("/");
    closeModal();
  };

  // 삭제 모달창 취소
  const cancelDeleteModal = () => closeModal();

  // 수정하기
  // 수정 모달창 열기
  const openEditModal = () => setIsEditModalOpen(true);

  // 수정 모달창 닫기
  const closeEditModal = () => setIsEditModalOpen(false);

  // 수정 완료하기
  const clickEditDoneBtn = () => {
    if (!editedTextArea) {
      return alert("수정된 부분이 없습니다.");
    }

    openEditModal();
  };

  // 수정 모달창 확인
  const confirmEditModal = () => {
    dispatch(__editFanLetter({ id, editedTextArea }));
    setIsEditing(false);
    setEditedTextArea("");
    closeEditModal();
  };

  // 수정 모달창 취소
  const cancelEditModal = () => closeEditModal();

  useEffect(() => {
    dispatch(__getFanLetter());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const { avatar, nickname, createdAt, writedTo, content, userId } =
    fanLetters.find((fanLetter) => fanLetter.id === id);
  const myContent = userId === myId;

  return (
    <Container>
      <DetailFanLetterItemWrapper>
        <UserHeader>
          <UserInfo>
            <UserImg item={avatar} size="large" />
            <p>{nickname}</p>
          </UserInfo>
          <time>{formattedCreatedAt(createdAt)}</time>
        </UserHeader>
        {isEditing ? (
          <>
            <UserMain>
              <ToWhom>To. {writedTo}</ToWhom>
              <EditContent
                defaultValue={content}
                maxLength={100}
                autoFocus
                onChange={(event) => setEditedTextArea(event.target.value)}
              />
            </UserMain>
            <BtnWrapper>
              <Button btnName="수정완료" onClick={clickEditDoneBtn} />
              <Button btnName="취소" onClick={() => setIsEditing(false)} />
            </BtnWrapper>
          </>
        ) : (
          <>
            <UserMain>
              <ToWhom>To. {writedTo}</ToWhom>
              <UserContent>{content}</UserContent>
            </UserMain>
            {myContent && (
              <BtnWrapper>
                <Button btnName="수정" onClick={() => setIsEditing(true)} />
                <Button btnName="삭제" onClick={clickDeleteBtn} />
              </BtnWrapper>
            )}
          </>
        )}
      </DetailFanLetterItemWrapper>

      <CommonModal
        isOpen={isModalOpen}
        confirmModal={confirmDeleteModal}
        cancelModal={cancelDeleteModal}
        modalTitle="삭제하시겠습니까?"
      />

      <CommonModal
        isOpen={isEditModalOpen}
        confirmModal={confirmEditModal}
        cancelModal={cancelEditModal}
        modalTitle="수정하시겠습니까?"
      />
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    #aee1f9,
    #b3c8ee,
    #b9afe5,
    #bd96da
  );
`;

const DetailFanLetterItemWrapper = styled.section`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
  color: black;
  height: 500px;
  width: 820px;
  padding: 0px 10px;
`;

const UserHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 30px;
  user-select: none;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 32px;
  font-weight: 600;

  & p {
    width: 400px;
  }
`;

const UserMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  margin: 40px 40px 20px 40px;
`;

const ToWhom = styled.p`
  font-size: 23px;
  font-weight: 500;
  user-select: none;
`;

const EditContent = styled.textarea`
  padding: 20px 30px;
  height: 202px;
  background-color: rgba(255, 255, 255, 0.23);
  border: 1px solid white;
  border-radius: 10px;
  line-height: 2rem;
  font-size: 20px;
  resize: none;
`;

const UserContent = styled.p`
  padding: 20px 30px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.23);
  border: 1px solid white;
  border-radius: 10px;
  line-height: 2rem;
`;

const BtnWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 25px;
  margin-right: 40px;
`;
