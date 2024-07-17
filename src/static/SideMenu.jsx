import styled from "styled-components"

const SideMenu = () => {
  return (
   <Container>
    <Wrapper>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Settings</h3>
        <h3>Contacts</h3>
    </Wrapper>
   </Container>
  )
}

export default SideMenu
const Container = styled.div`
display: flex;
justify-content: flex-end;

`
const Wrapper = styled.div`
height: 70vh;
width: 300px;
background-color: bisque;
color: purple;
`
// const Container = styled.div``