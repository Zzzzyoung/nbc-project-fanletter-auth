import Modal from "react-modal";
import styled from "styled-components";
import Button from "./Button";

// react-modal을 위한 appElement 설정
Modal.setAppElement("#root"); // 실제 root 요소의 ID로 변경해라

function CommonModal({ isOpen, confirmModal, cancelModal, modalTitle }) {
  return (
    <Modal isOpen={isOpen} style={ModalStyles}>
      <ModalContent>
        <p>{modalTitle}</p>
        <ModalBtnWrapper>
          <Button btnName="확인" onClick={confirmModal} />
          <Button btnName="취소" onClick={cancelModal} />
        </ModalBtnWrapper>
      </ModalContent>
    </Modal>
  );
}

export default CommonModal;

const ModalStyles = {
  content: {
    height: "250px",
    width: "470px",
    margin: "auto",
    borderRadius: "10px",
  },
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  & p {
    font-size: 18px;
  }
`;

const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
