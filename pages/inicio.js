import Head from 'next/head';
import Image from 'next/dist/client/image';
import dynamic from 'next/dynamic';

import { Sliderdiv } from '../layout/sliderdiv';
import { Section } from '../layout/Section.js';
import FooterDiv from '../layout/Footer.js';

import WppButton from '../components/Buttons/WppButton';
import Buttons from '../components/Buttons/Button';

import styles from '../styles/Home.module.css';

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
      <Sliderdiv
        title={'Encontre o melhor em Vidros Aqui e Faça seu Orçamento !!'}
      />
      <C.Main>
        <WppButton/>
        <Section color='white'
          title='O melhor do MVA'
          subTitle='Saiba porque o MVA é melhor que o MDF e nao fique de Fora, Instale Agora!'
          text='Instalacões em MVA vidro e aluminio substituiem 
            a madeira usada no MDF que estraga e se deteriora com o tempo, 
            O MVA durará muito mais tempo alem de preservar o meio Ambiente👍'
          img={'/imgs/mva.jpg'}
          alt="imagem de um MVA - Moveis em vidro e aluminio"
          reverb
          box
        />
            <Section color='white'
          title='Sua vidraçaria Online aqui'
          subTitle='transparencia e simplicidade'
          text='Faça um orçamento conosco via whatsapp ou email e tire suas duvidas conosco!'
          img={'/imgs/vidracaria-1.jpg'}
          alt="imagem de ambiente e reflexos em vidros"
          box
        />
        <Section color='#084526' height={300}
          title='Faça seu Orçamento Conosco agora ! !'
          subTitle={'Instalações em areas externas e internas, Vidros em Geral , porta, janela, guardacorpo, corrimes, box, faxadas e MVA.'}
          text='Entregamos e Instalamos para você faça seu pedido ou orçamento e lhe responderemos por whatsapp o seu orçamento 👍'
        />
        <Buttons/>
      </C.Main>
      <FooterDiv/>
    </div>
  )
}
