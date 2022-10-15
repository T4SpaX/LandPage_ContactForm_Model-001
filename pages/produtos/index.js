import React from 'react';
import Head from 'next/head'
import * as C from '../../styles/pages_Styles/Products_style'
import dynamic from 'next/dynamic';
import  FooterDiv  from '../../layout/Footer.js';
import WppButton from '../../components/Buttons/WppButton';

const Nav_bar = dynamic(()=>import("../../layout/Nav_bar.js"),{ssr:false});

const Products = () => {
  return (
    <>
    <Head>
      <title>Nossos Produtos | Elluxus</title>
      <meta property="og:title" content="Vidraçaria Elluxus" />
      <link rel="icon" href="/favicon-16x16.png" />
    </Head>
    <Nav_bar/>
    <WppButton/>
    <C.Main white>
      Em Breve !
    </C.Main>  
    <FooterDiv/>
    </>
  )
}
export default Products;
