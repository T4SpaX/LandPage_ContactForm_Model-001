import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  color: white;
  padding: 2rem 0;
  background: #084526;
  height: 300px;
  flex-direction:row;
  gap:20px;
  justify-content: center;
`

export const Content = styled.div`
  width: 280px;
  align-items: center;
  justify-content:center;
  font-family:sans-serif;
`
export const Subcontent = styled.div`
  background: black;
  display:flex;
  color:white;
  height: 80px;
  justify-content:space-around;
  align-items: center;
`
export const Anchor = styled.a`
  margin-bottom: 4px;
  justify-content: space-around;
  cursor: pointer;
  &:hover{
    color: #084;
  }
`
