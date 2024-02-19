import FanLetterItem from "./FanLetterItem";
import styled from "styled-components";
import { useSelector } from "react-redux";

function FanLetterList() {
  const selectedMember = useSelector((state) => state.member);
  const fanLetters = useSelector((state) => state.fanLetters);

  const filteredFanLetterItem = fanLetters.filter((item) => {
    return item.writedTo === selectedMember;
  });

  return (
    <FanLetterListWrapper>
      {filteredFanLetterItem.length === 0 ? (
        <LetterNone>
          <p>✉️ {selectedMember}에게 남겨진 팬레터가 없습니다. </p>
          <p> 첫 번째 팬레터의 주인공이 되어주세요! ✉️</p>
        </LetterNone>
      ) : (
        filteredFanLetterItem.map((item) => (
          <FanLetterItem key={item.id} item={item} />
        ))
      )}
    </FanLetterListWrapper>
  );
}

export default FanLetterList;

const FanLetterListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  width: 660px;
  background-color: transparent;
  border-radius: 10px;
`;

const LetterNone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 18px;
    line-height: 1.8;
  }
`;
