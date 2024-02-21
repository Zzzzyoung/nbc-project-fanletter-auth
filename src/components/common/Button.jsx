import styled from "styled-components";

function Button({ btnName, onClick = () => {} }) {
  return <StBtn onClick={onClick}>{btnName}</StBtn>;
}

export default Button;

const StBtn = styled.button`
  background-color: #4b3c57;
  color: white;
  padding: 8px 12px;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 13px;
  transition: background-color 0.3s ease;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.23);
    color: black;
  }
`;
