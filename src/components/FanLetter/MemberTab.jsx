import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectMember } from "../../redux/modules/member";

const aespa = [
  { id: 1, name: "카리나" },
  { id: 2, name: "지젤" },
  { id: 3, name: "남지현" },
  { id: 4, name: "윈터" },
  { id: 5, name: "닝닝" },
];

function MemberTab() {
  const selectedMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const handleMemberTabButtonClick = (name) => () => {
    dispatch(selectMember(name));
  };

  return (
    <MemberTabWrapper>
      {aespa.map(({ id, name }) => {
        return (
          <MemberTabBtn
            type="button"
            key={id}
            onClick={handleMemberTabButtonClick(name)}
            $selected={selectedMember === name}
          >
            {name}
          </MemberTabBtn>
        );
      })}
    </MemberTabWrapper>
  );
}

export default MemberTab;

const MemberTabWrapper = styled.nav`
  display: flex;
  gap: 15px;
  padding: 20px 30px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
`;

const MemberTabBtn = styled.button`
  height: 40px;
  width: 90px;
  font-size: 17px;
  border-radius: 5px;
  background-color: ${({ $selected }) =>
    $selected ? "#4b3c57" : "rgba(255, 255, 255, 0.23)"};
  color: ${({ $selected }) => ($selected ? "white" : "black")};
  cursor: pointer;
`;
