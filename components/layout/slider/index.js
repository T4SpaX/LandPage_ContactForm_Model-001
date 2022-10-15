import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const Sliderdiv = ({title,wtsappButton,height}) => {
  return (
    <div
      style={{height:height}}
    >
      <div>
        <span style={{position:'fixed',zIndex:-1,
        width:`100%`,height:`100%`
      }}>
        </span>
        <h1>{title}</h1>  
          {!wtsappButton ? 
            <div>
            <Link href='/produtos'>
            <a
              style={{
                background:'transparent',
                boxShadow:'0px 0px 5px black',
                width:'166px',
                border:'1px solid #084923',
              }}>Produtos</a>
              </Link>         
            <Link href='/contato'>
              <a
                style={{
                  background:'#084923',
                  width:'166px',
                  border:'none',
                }}>Entre em Contato</a> 
            </Link>
            </div> : 
              <a href='https://wa.me/5531999570478' target='_blank'
                style={{
                  background: '#084923',
                  width:'165px',}}>
                  <C.WppIcon style={{
                    width:'30px',height:'30px',
                    marginRight:'7px'
                  }}/>WhatsApp
              </a>             
          }
      </div>
    </div>
  )
}
