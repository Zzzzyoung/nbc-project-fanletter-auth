import styled from "styled-components";

function Button({ size, btnName, onClick = () => {} }) {
  return (
    <StBtn $size={size} onClick={onClick}>
      {btnName}
    </StBtn>
  );
}

export default Button;

const StBtn = styled.button`
  background-color: #4b3c57;
  color: white;
  padding: ${({ $size }) => ($size === "large" ? "9px 15px" : "8px 12px")};
  border: 1px solid black;
  border-radius: 5px;
  font-size: ${({ $size }) => ($size === "large" ? "16px" : "13px")};
  transition: background-color 0.3s ease;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.23);
    color: black;
  }
`;
