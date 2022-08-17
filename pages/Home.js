import Head from 'next/head';
import Image from 'next/dist/client/image';
import { SliderDiv } from '../layout/sliderdiv';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import { Section } from '../layout/Section.js';
import FooterDiv from '../layout/Footer.js';

import * as C from '../styles/pages_Styles/Home_styles';

const Nav_bar = dynamic(()=>import("../layout/Nav_bar.js"),{ssr:false})

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Elluxus | Vidraçaria Online para você</title>
        <meta property="og:title" content="Vidraçaria Elluxus" />
        <meta property="og:url" content="elluxus.com/" />
        <meta property="og:locale" content="pt_br" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Nav_bar/>
      <SliderDiv
        title={'Encontre o melhor do seu Reflexo Aqui'}
      />
      <C.Main>
        <Section color='white'
          title='O melhor MVA'
          subTitle='é aqui mesmo o melhor MVA'
          text='lorem ipsum dolor color art live them.'
          reverb
          box
        />
          <Section color='#084526' height={300}
            title='faça seu orcamento com agente agora !! e sem compromisso'
            subTitle={'Sabia que o MVA e melhor que o MDF?'}
            text='lorem ipsum dolor colr art live htne'
          />
        <Section color='white'
          title='Sua vidraçaria aqui'
          subTitle='transparencia e simplicidade'
          text='lorem ipsum dolor cross rigid thor'
          reverb
          box
        />
      </C.Main>

      <FooterDiv/>
    </div>
  )
}
