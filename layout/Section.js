import React from 'react';
import Image from 'next/image.js';

import * as C from '../styles/layout_Styles/Section_style';

export const Section = (
  {color,height,text,title,subTitle,reverb,box,img,alt}
  ) => {
  return (
    <C.Container style={{
      background:color,
      minHeight:height,
      boxShadow:color=='#084526'? '0px 4px 10px #1d1d1d':'none',
      zIndex:color=='#084526'? '2':'0',
      paddingBottom: color=='#084526' ? '20px' : '90px'
      }} box={box} >
      <C.Content style={{
        height: color=='#084526' ? '300px':'400px',
        color:color=='#084526' ? 'white':'#4d4b4b'
      }} reverb={reverb}>
        <C.TextDiv>
          <C.Title>{title}</C.Title>
          <C.SubTitle>{subTitle}</C.SubTitle>
          <C.Text>{text}</C.Text>
        </C.TextDiv>
        {color=='#084526' ? '' :
        <C.SubContent>
          <Image
            src={img}
            objectFit={'cover'}
            layout='fill'
            style={{position:'relative !important',
              borderRadius:'2px'
            }}
            alt={alt}
          />
        </C.SubContent>}
      </C.Content>
    </C.Container>
  )
}
