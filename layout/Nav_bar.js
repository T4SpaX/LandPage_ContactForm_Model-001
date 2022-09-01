import React,{useState, useEffect} from 'react';
import Image from 'next/image.js';
import LogoSvg from '../public/imgs/logoElluxos.svg';
import ButtonNavbar from '../components/Buttons/ButtonNavbar';

import * as C from '../styles/layout_Styles/NavBar_Style';

const Nav_bar = () => {
  const [openNav,setOpenNav] = useState(false)
  const [navbar,setNavbar] = useState(false);
  
  const changeBackground = ()=>{
    if(window.scrollY >= 300) {
      setNavbar(true)
    }else(
      setNavbar(false)
    )
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeBackground)
  },[])

  const handleToggle = ()=>{
    setOpenNav(prev => !prev)
  }

  return (
    <>
      <C.NavContainer active={navbar? true : undefined}>
        <C.NavContent active={navbar? true : undefined}>
          <C.Logo href='/' active={navbar? true : undefined}>
            <Image 
              src={LogoSvg}
              width={200}
              height={80}
              style={{cursor:'pointer'}}
            />
          </C.Logo> 

          <ButtonNavbar active={navbar? true : undefined}
          handleToggle={handleToggle} openNav={openNav}
          />

          <C.NavList >
            <C.NavRow menu={openNav? true : undefined}
              active={navbar? true : undefined}
            >
              <C.Item href='/' activeClassName='active'>
                <C.NavItem active={navbar? true : undefined}>
                  <C.textItem  active={navbar? true : undefined}>Inicio</C.textItem> 
                </C.NavItem>
              </C.Item>
              <C.NavItem active={navbar? true : undefined}>
                <C.Item href={'/produtos'}>
                 <C.textItem  active={navbar? true : undefined}>Produtos</C.textItem> 
                </C.Item>
              </C.NavItem>
              <C.NavItem active={navbar? true : undefined}>
                <C.Item href={'/servicos'}>
                 <C.textItem  active={navbar? true : undefined}>Serviços</C.textItem> 
                </C.Item>
              </C.NavItem>
              <C.NavItem active={navbar? true : undefined}>
                <C.Item href={'/contato'}>
                  <C.textItem  active={navbar? true : undefined}>Contatos</C.textItem>
                </C.Item>
              </C.NavItem>
            </C.NavRow>
          </C.NavList>
             
        </C.NavContent> 
      </C.NavContainer>
    </>
  )
}
export default Nav_bar;