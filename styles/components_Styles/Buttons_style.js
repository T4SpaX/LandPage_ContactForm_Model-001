import styled from 'styled-components';
import Link from 'next/link'

export const Button = styled.a`
  box-sizing: border-box;
  border: none;
  font-weight: bold;
  font-size: 16px;
  padding: 1rem;
  margin: 5px;
  border-radius: 0px;
  color: white;
  background-size:300%;
  text-shadow: 0px 0px 10px black;
  transition: all .4s;
  cursor: pointer;
  &:hover{
    background:linear-gradient(120deg,#084 50%,#0848 100%) !important;
    color: whitesmoke !important;
    border: white !important;
    background-position: 100%;
    transform: translate(0.4rem);
  }
  &:active{
    background:linear-gradient(120deg,#08484465 50%,#084831 100%) !important;
  }
`
export const Anchor = styled(Link)``