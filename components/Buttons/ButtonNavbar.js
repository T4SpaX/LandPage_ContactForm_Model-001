import React from 'react';
import styled from 'styled-components';
import {Close,Open} from '../layout/navbar/style';
//import {BiMenu} from 'react-icons/bi';
//import {BiX} from 'react-icons/bi';


export const Menu = styled.div`
  display: none;
  color: ${(props)=>props.active ? 'white':'#084526'};
  height: 40px;
  width: 45px;
  @media(max-width:800px){
    display: block;
  }
`
export const ButtonMenu = styled.div`
  display: flex;
  border: none;
  background: transparent;
  align-items: center;
  justify-content: center;
  transition: ease 1s;
`

export default function ButtonNavbar({active,handleToggle,openNav}) {
  return (
    <>
      <Menu>
        <ButtonMenu
        onClick={handleToggle}
        >{ openNav ? 
          <Close active={active}/> : <Open active={active}/> }</ButtonMenu>
      </Menu>
    </>
  )
}
