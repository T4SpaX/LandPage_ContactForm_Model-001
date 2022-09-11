import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';
import {Sliderdiv} from '../layout/sliderdiv';
import {FormContact}  from '../components/FormContact';
import * as C from '../styles/pages_Styles/Contact_style';
import  FooterDiv  from '../layout/Footer.js';

const Nav_bar = dynamic(()=>import("../layout/Nav_bar.js"),{ssr:false});

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
      </C.Main>
      <FooterDiv/>
    </C.Container>
  )
}
export default Contact;