import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as C from '../Styles/layout_Styles/Footer_Style.js';

const FooterDiv = ()=>{
  return (
    <>
    <C.Container>
      <C.Content>
        <div>
          Nossas politicas:<br/><br/>
          <C.Anchor>politica de privacidade</C.Anchor><br/><br/>
          <C.Anchor>politica de segurança</C.Anchor><br/>
        </div>
      </C.Content>
      <C.Content>
        <div>
          <C.Anchor>Sobre nos</C.Anchor><br/><br/>
          Fale Conosco:<br/><br/>
          email: 
          <C.Anchor href="https://elluxus.atendimento@gmail.com">elluxus.atendimento@gmail.com</C.Anchor><br/><br/>
          contato:<C.Anchor href="https://wa.me/5531999570478" type="_blank" > 31 9 9957-0478</C.Anchor><br/><br/>
          aberto das 08:00 as 18:00
        </div>
      </C.Content>
    </C.Container>
    <C.Subcontent>
      <div>
        <C.Anchor href="https://github.com/T4SpaX">
          Developed by T4SpaX
        </C.Anchor>
      </div><br/> 
      <div>Todos os Direitos Reservados Elluxus</div> 
    </C.Subcontent>
    </>
  )
}

export default FooterDiv