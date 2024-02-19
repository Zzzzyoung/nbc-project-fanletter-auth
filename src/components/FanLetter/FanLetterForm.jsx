import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import Button from "../common/Button";
import CommonModal from "../common/CommonModal";
import { useDispatch } from "react-redux";
import { addFanLetter } from "../../redux/modules/fanLetters";

function FanLetterForm() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleNickNameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleMember = (event) => {
    setMember(event.target.value);
  };

  // 모달이 열리면 body에 overflow: hidden; 스타일 적용
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  // 제출하기
  // 제출 모달창 열기
  const openModal = () => setIsModalOpen(true);
  // 제출 모달창 닫기
  const closeModal = () => setIsModalOpen(false);

  // 팬레터 제출하기
  const submitFanLetter = (event) => {
    event.preventDefault();

    // 유효성 검사
    if (!nickname.trim()) {
      return alert("닉네임을 입력하세요.");
    } else if (nickname.trim() && !content.trim()) {
      return alert("내용을 입력하세요.");
    } else if (!member) {
      return alert("멤버를 입력하세요.");
    } else {
      openModal();
    }
  };

  // 제출 모달창 확인
  const confirmSubmitModal = () => {
    const newFanLetter = {
      createdAt: new Date(),
      nickname,
      avatar: null,
      content,
      writedTo: member,
      id: uuid(),
    };

    dispatch(addFanLetter(newFanLetter));
    setNickname("");
    setContent("");
    setMember("");
    closeModal();
  };

  // 제출 모달창 취소
  const cancelSubmitModal = () => closeModal();

  return (
    <Form onSubmit={submitFanLetter}>
      <FormInput>
        <label>닉네임 :&nbsp;</label>
        <input
          type="text"
          name="nickname"
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
          autoFocus
          value={nickname}
          onChange={handleNickNameChange}
        />
      </FormInput>
      <FormInput>
        <label>내용 :&nbsp;</label>
        <textarea
          name="content"
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
          value={content}
          onChange={handleContentChange}
        />
      </FormInput>
      <FormSelect>
        <label>TO.</label>
        <div>
          <select
            id="member"
            name="writedTo"
            value={member}
            onChange={handleMember}
          >
            <option value={""}>멤버를 선택하세요.</option>
            <option value="카리나">카리나</option>
            <option value="지젤">지젤</option>
            <option value="남지현">남지현</option>
            <option value="윈터">윈터</option>
            <option value="닝닝">닝닝</option>
          </select>
        </div>
      </FormSelect>
      <FormBtn>
        <Button btnName="펜레터 등록" />
      </FormBtn>

      <CommonModal
        isOpen={isModalOpen}
        confirmModal={confirmSubmitModal}
        cancelModal={cancelSubmitModal}
        modalTitle="펜레터를 등록하시겠습니까?"
      />
    </Form>
  );
}

export default FanLetterForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px;
  padding: 30px 30px 25px 30px;
  width: 600px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
`;

const FormInput = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & label {
    width: 80px;
  }

  & input {
    width: 100%;
    height: 30px;
    padding-left: 10px;
  }

  & textarea {
    width: 100%;
    height: 85px;
    padding-top: 10px;
    padding-left: 10px;
    resize: none;
  }
`;

const FormSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & label {
    width: 65px;
  }

  & select {
    width: 150px;
    height: 28px;
    padding-left: 5px;
    cursor: pointer;
  }
`;

const FormBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;
