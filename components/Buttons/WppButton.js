import React from 'react'
import {AiOutlineWhatsApp} from 'react-icons/ai';
import styled from 'styled-components';

function WppButton() {
  return (
    <>
      <a href='https://wa.me/5531999570478' target='_blank'>
        <Container>
          <AiOutlineWhatsApp style={{
            color:'white',
            width:'30px',
            height:'30px'
          }}/>
        </Container>
      </a>
    </>
  )
}

const Container = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  z-index: 1000;
  border-radius: 2rem;
  background:#25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 3px 3px 3px gray;
  &:hover{
    background: #075E54;
  }
` 
/*const Content = styled.div`
  position: relative;
  bottom: 40px;
  right: 10px;
  border-radius: 2rem;
  width: 30px;
  height: 25px;
  background: red;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
`*/

export default WppButton