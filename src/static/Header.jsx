import { CgSearch } from "react-icons/cg";
import styled from "styled-components";
import { IoMenuSharp } from "react-icons/io5";
import SideMenu from "./SideMenu";
import { useState } from "react";

const Header = () => {

const [toggle, settoggle] = useState(false)

const handlClick = () => {
  settoggle(!toggle)
}




  return (
    <div>
    <Container>
      <Wrapper>
        <Holder>
          <p>Caring for a dog</p>
          <p> Breeds</p>
          <p> Blog</p>
        </Holder>
        <h2>Honden</h2>

        <HolderTwo>
          <p>Shop</p>
          <p>Services</p>
          <p>Adoption</p>
          <p>
            <CgSearch />
          </p>
        </HolderTwo>

        <SideNav onClick={handlClick}>
          <IoMenuSharp />
        </SideNav>
      </Wrapper>
    </Container>

    <div>{toggle ? <SideMenu/> : null} </div>

    </div>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
  h2 {
    font-size: 40px;
    font-family: Playwrite NL;
  }
`;
const Holder = styled.div`
  display: flex;
  p {
    margin: 10px;
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const HolderTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 10px;
    font-size: 14px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const SideNav = styled.div`
  font-size: 26px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;
