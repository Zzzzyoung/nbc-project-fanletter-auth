import FanLetterItem from "./FanLetterItem";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Pending from "../../assets/Pending.gif";
import { useGetFanLetters } from "hooks/useQuery";

function FanLetterList() {
  const selectedMember = useSelector((state) => state.member);

  // useQuery
  // FanLetter 가져오기
  const { data: fanLetters, isPending, error } = useGetFanLetters();

  if (isPending)
    return (
      <StPending>
        <img src={Pending} alt="Pending" />
        잠시만 기다려 주세요.
      </StPending>
    );
  if (error) return <StError>오류가 발생하였습니다.</StError>;

  const filteredFanLetterItem = fanLetters.filter((fanLetter) => {
    return fanLetter.writedTo === selectedMember;
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

const StPending = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 16px;

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
