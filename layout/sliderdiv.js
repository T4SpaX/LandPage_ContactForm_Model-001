import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import * as C from '../styles/layout_Styles/sliderdiv_Style';

export const SliderDiv = ({title,wtsappButton,height}) => {
  return (
    <C.SliderContainer
      style={{height:height}}
    >
      <C.SliderContent>
        <span style={{position:'fixed',zIndex:-1,
        width:`100%`,height:`100%`
      }}>
            <Image
              src="/imgs/banner2.jpg"
              objectFit={'cover'}
              layout='fill'
              priority
              alt="Imagem de ambiente por vidros"        
              />
        </span>
        <C.Title>{title}</C.Title>  
          {!wtsappButton ? 
            <div>
            <Link href='/produtos'>
            <C.Anchor
              style={{
                background:'transparent',
                boxShadow:'0px 0px 5px black',
                width:'166px',
                border:'1px solid #084923',
              }}>Produtos</C.Anchor>
              </Link>         
            <Link href='/contato'>
              <C.Anchor
                style={{
                  background:'#084923',
                  width:'166px',
                  border:'none',
                }}>Entre em Contato</C.Anchor> 
            </Link>
            </div> : 
              <C.Anchor href='https://wa.me/5531999570478'
                style={{
                  background: '#084923',
                  width:'165px',}}>
                  <C.WppIcon style={{
                    width:'30px',height:'30px',
                    marginRight:'7px'
                  }}/>WhatsApp
              </C.Anchor>             
          }
      </C.SliderContent>
    </C.SliderContainer>
  )
}
