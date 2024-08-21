import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import SideMenu from "../static/SideMenu";

const HomePage = () => {
  const [dog, setDog] = useState([]);
  const getDog = async () => {
    await axios
      .get("https://dog.ceo/api/breeds/image/random ")
      .then((res) => setDog(res.data));
  };

  useEffect(() => {
    getDog();
  }, []);
  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <Container>
      <Wrapper>
        <General>
          <HolderTwo>
            <img src={dog.message} alt="image" />
          </HolderTwo>
          <Holder>
            <h3>18 Yorkie crossbreeds that are too cute </h3>
          
          </Holder>
            <button onClick={reloadPage}>Refresh</button>
        </General>
      </Wrapper>
    </Container>
  );
};

export default HomePage;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 90%;
  img {
    height: 500px;
    width: 700px;
    /* outline:none; */
    object-fit: cover;
    border: 1px solid #ddd;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
const Holder = styled.div`

`;
const HolderTwo = styled.div``;

const General = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  button{
height: 35px;
border: none;
width: 100px;
font-weight: 500;
cursor: pointer;

}
`;
