import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { formattedCreatedAt } from "util/Date";
import UserImg from "../common/UserImg";

function FanLetterItem({ item }) {
  const { id, avatar, nickname, createdAt, content } = item;
  const navigate = useNavigate();

  return (
    <FanLetterItemWrapper
      onClick={() => {
        navigate(`/detail/${id}`);
      }}
    >
      <UserInfo>
        <UserImg item={avatar} />
        <UserText>
          <p>{nickname}</p>
          <time>{formattedCreatedAt(createdAt)}</time>
        </UserText>
      </UserInfo>
      <Content>{content}</Content>
    </FanLetterItemWrapper>
  );
}

export default FanLetterItem;

const FanLetterItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 50px;
  border: 1px solid white;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: 0.15s ease;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & p {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Content = styled.p`
  background-color: rgba(255, 255, 255, 0.23);
  border-radius: 10px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;
