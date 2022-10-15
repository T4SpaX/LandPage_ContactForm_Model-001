import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import {Sliderdiv} from '../../components/layout/slider';
import {FormContact}  from '../../components/form/FormContact';
import FrameMaps from '../../components/googlemapsframe'
import * as C from './_style';
import  FooterDiv  from '../../components/layout/footer/index';

const Nav_bar = dynamic(()=>import("../../components/layout/navbar/index"),{ssr:false});


const Contact = ()=>{
  return (
    <C.Container>
      <Head>
        <title>Entre em Contato Conosco | Elluxus</title>
        <meta property="og:title" content="Vidraçaria Elluxus" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Nav_bar/>
      
      <Sliderdiv
          title={'Entre em Contato Conosco Pelo WhatsApp!'}
          height={359}
          wtsappButton
        />
      <C.Main white>
        <C.TitlePage>Mande uma mensagem e faça um orçamento!</C.TitlePage>
        <FormContact />
        
        <FrameMaps/>
      </C.Main>
      <FooterDiv/>
    </C.Container>
  )
}
export default Contact;