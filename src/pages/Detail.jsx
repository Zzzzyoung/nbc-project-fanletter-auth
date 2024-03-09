import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { formattedCreatedAt } from "util/Date";
import UserImg from "components/common/UserImg";
import Button from "components/common/Button";
import CommonModal from "components/common/CommonModal";
import { useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getFanLetters } from "hooks/queryFunctions";
import { deleteFanLetter, editFanLetter } from "hooks/mutationFunctions";
import Pending from "../assets/Pending.gif";
import { QUERY_KEYS } from "hooks/keys.constant";

function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTextArea, setEditedTextArea] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const myId = useSelector((state) => state.auth.userId);

  // useMutation
  const queryClient = useQueryClient();

  const deleteFanLetterMutation = useMutation({
    mutationFn: deleteFanLetter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FANLETTERS] });
    },
  });

  const editFanLetterMutation = useMutation({
    mutationFn: editFanLetter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.FANLETTERS] });
    },
  });

  // useQuery
  // FanLetter 가져오기
  const {
    data: fanLetters,
    isPending,
    error,
  } = useQuery({
    queryKey: [QUERY_KEYS.FANLETTERS],
    queryFn: getFanLetters,
  });

  if (isPending)
    return (
      <StPending>
        <img src={Pending} alt="Pending" />
        잠시만 기다려 주세요.
      </StPending>
    );
  if (error) return <StError>오류가 발생하였습니다.</StError>;

  if (fanLetters.length === 0) {
    return null;
  }

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
    deleteFanLetterMutation.mutate(id);
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
    editFanLetterMutation.mutate({ id, editedTextArea });
    setIsEditing(false);
    setEditedTextArea("");
    closeEditModal();
  };

  // 수정 모달창 취소
  const cancelEditModal = () => closeEditModal();

  const { avatar, nickname, createdAt, writedTo, content, userId } =
    fanLetters.find((fanLetter) => fanLetter.id === id);

  // 내가 쓴 글만 수정 및 삭제 가능
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
              <Button btnName="완료" onClick={clickEditDoneBtn} />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  font-weight: 600;
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

const StPending = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;
  background-image: linear-gradient(
    to right,
    #aee1f9,
    #b3c8ee,
    #b9afe5,
    #bd96da
  );

  & img {
    width: 80px;
    height: 80px;
  }
`;

const StError = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;
`;
