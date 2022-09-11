import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as C from '../styles/layout_Styles/Footer_Style';
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {AiOutlineClockCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const FooterDiv = ()=>{
  return (
    <>
    <C.Container>
      <C.Content>
        <div>
          Nossas politicas:<br/><br/>
            <C.Anchor>politica de privacidade</C.Anchor><br/><br/>
            <C.Anchor>politica de segurança</C.Anchor><br/><br/>
            <C.Anchor>Sobre nos</C.Anchor>
          </div>
      </C.Content>
      <C.Content>
        <div>
          Fale Conosco:<br/><br/>
          <AiOutlineMail/>{' '}email: 
          <C.Anchor href="https://elluxus.atendimento@gmail.com"> elluxus.atendimento@gmail.com</C.Anchor><br/><br/>
          <AiOutlineWhatsApp/>{' '}contato:<C.Anchor href="https://wa.me/5531999570478" type="_blank" > 31 9 9957-0478</C.Anchor><br/><br/>
          <AiOutlineClockCircle/>{' '}aberto de segunda a sexta de 08:00 as 18:00<br/>
          sabado de 08:00 a 12:00
        </div>
      </C.Content>
    </C.Container>
    <C.Subcontent>
      <div>
        <C.Anchor href="https://github.com/T4SpaX">
        <AiFillGithub style={{
          width: '30px',
          height: '30px'
        }}/>{' '}Developed by - &lt; T4SpaX &gt; 
        </C.Anchor>
      </div><br/> 
      <div>© 2022 Elluxus - Todos os Direitos Reservados</div> 
    </C.Subcontent>
    </>
  )
}

export default FooterDiv