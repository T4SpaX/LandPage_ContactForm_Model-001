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
        <meta property="Description" content="Vidraçaria Elluxus ,Vidros e aluminio
        MVA e mais, fazemos instalaçoes ou compre seu produto , o melhor em Vidros para Você" />
        <meta property="og:title" content="Vidraçaria Elluxus" />
        <meta property="og:url" content="elluxus.com/" />
        <meta property="og:locale" content="pt_br" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Nav_bar/>
      <SliderDiv
        title={'Encontre o melhor em Vidros Aqui e Faça seu Orçamento !!'}
      />
      <C.Main>
        <Section color='white'
          title='O melhor do MVA'
          subTitle='Saiba porque o MVA é melhor que o MDF'
          text='Instalacões em MVA vidro e aluminio onde o MVA substitui o MDF
          duram muito mais tempo para você alem de preservar o meio ambiente!'
          img={'/imgs/mva.jpg'}
          alt="imagem de um MVA - Moveis em vidro e aluminio"
          reverb
          box
        />
        <Section color='#084526' height={300}
          title='faça seu orcamento com agente agora !! e sem compromisso'
          subTitle={'Sabia que o MVA e melhor que o MDF?'}
          text='lorem ipsum dolor colr art live htne'
        />
        <Section color='white'
          title='Sua vidraçaria Online aqui'
          subTitle='transparencia e simplicidade'
          text='Faça um orçamento conosco via whatsapp ou email rapido atendimento e tire suas duvidas conosco!'
          img={'/imgs/vidracaria-1.jpg'}
          alt="imagem de ambiente e reflexos em vidros"
          reverb
          box
        />
      </C.Main>

      <FooterDiv/>
    </div>
  )
}
