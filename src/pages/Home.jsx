import FanLetterForm from "components/FanLetter/FanLetterForm";
import FanLetterList from "components/FanLetter/FanLetterList";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <Header />
      <HomeMain>
        <FanLetterForm />
        <FanLetterList />
      </HomeMain>
      <Footer />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to right,
    #aee1f9,
    #b3c8ee,
    #b9afe5,
    #bd96da
  );
`;

const HomeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
