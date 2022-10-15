import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {AiOutlineClockCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const FooterDiv = ()=>{
  return (
    <>
    <div>
      <div>
        <div>
          Nossas politicas:<br/><br/>   
            <a>politica de privacidade</a><br/><br/>
            <a>politica de segurança</a><br/><br/>
            <a>Sobre nos</a>
          </div>
      </div>
      <div>
        <div>
          Fale Conosco:<br/><br/>
          <AiOutlineMail/>{' '}email: 
          <a href="https://elluxus.atendimento@gmail.com"> elluxus.atendimento@gmail.com</a><br/><br/>
          <AiOutlineWhatsApp/>{' '}contato:<a href="https://wa.me/5531999570478" type="_blank" > 31 9 9957-0478</a><br/><br/>
          <AiOutlineClockCircle/>{' '}aberto de segunda a sexta de 08:00 as 18:00<br/>
          sabado de 08:00 a 12:00
        </div>
      </div>
    </div>
    <div>
      <div>
        <a href="https://github.com/T4SpaX">
        <AiFillGithub style={{
          width: '30px',
          height: '30px'
        }}/>{' '}Developed by - &lt; T4SpaX &gt; 
        </a>
      </div><br/> 
      <div>© 2022 Elluxus - Todos os Direitos Reservados</div> 
    </div>
    </>
  )
}

export default FooterDiv