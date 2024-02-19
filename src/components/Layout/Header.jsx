import MemberTab from "../FanLetter/MemberTab";
import styled from "styled-components";
import logo from "assets/logo.png";

function Header() {
  return (
    <Container>
      <Title>
        <img src={logo} alt="logo" />
      </Title>
      <MemberTab />
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(
    to right,
    #aee1f9,
    #b3c8ee,
    #b9afe5,
    #bd96da
  );
`;

const Title = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
  }
`;
