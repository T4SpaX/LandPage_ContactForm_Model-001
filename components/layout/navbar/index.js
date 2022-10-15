import React,{useState, useEffect} from 'react';
import Image from 'next/image.js';
import Link from 'next/link.js'
import LogoSvg from '../../../public/imgs/logoElluxos.svg';
//import ButtonNavbar from '../../Buttons/ButtonNavbar';

const Nav_bar = React.forwardRef(() => {
  const [openNav,setOpenNav] = useState(false)
  const [navbar,setNavbar] = useState(false);
  
  const changeBackground = ()=>{
    if(window.scrollY >= 80) {
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
      <div className={`
        flex w-[100%] fixed z-50 transition-all ease duration-[.4s]
        bg-[${navbar? 'white':'bg-gradient-to-b from-black'}]
      `}>
        <div className={`
          flex flex-row p-4 mx-auto my-0 justify-between
          itens-center md:flex-row
        `}>
          <Link href='/' active={navbar} passRef>
            <Image 
              src={LogoSvg}
              width={200}
              height={80}
              className='cursor-pointer'
              />   
          </Link> 

          {/*<ButtonNavbar active={navbar? true : undefined}
          handleToggle={handleToggle} openNav={openNav}
          />*/}

          <nav>
            <ul className={`
              flex decoration-none gap-8
            `}
            
            menu={openNav? true : undefined}
              active={navbar? true : undefined}
            >
              <li className={`
                flex w-20 justify-center p-6
                `} active={navbar? true : undefined}>
                <Link href='/' activeClassName='active' passRef>
                  <a className={`font-sans-serif 
                    bg-gradient-to-r from-[#D7B34C]
                  `}active={navbar? true : undefined}>Inicio</a> 
                </Link>
              </li>
              {/*<C.NavItem active={navbar? true : undefined}>
                <C.Item href={'/produtos'} passRef>
                  <C.textItem  active={navbar? true : undefined}>Produtos</C.textItem> 
           
                </C.Item>
                </C.NavItem>
              <C.NavItem active={navbar? true : undefined}>
                <C.Item href={'/servicos'} passRef>
                  <C.textItem  active={navbar? true : undefined}>Serviços</C.textItem> 
              
                </C.Item>
              </C.NavItem>*/}
              <li className={`flex w-20 justify-center`}
              active={navbar? true : undefined}>
                <Link href={'/contato'} to='/contato' passRef>
                  <a className={`p-6 font-sans-serif`} active={navbar? true : undefined}>Contatos</a>
                </Link>
              </li>
            </ul>
          </nav>
             
        </div> 
      </div>
    </>
  )
})
export default Nav_bar;