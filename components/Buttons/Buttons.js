import React from 'react';
import * as C from '../styles/components_Styles/Buttons_style';

              {/*<Buttons
              text='Produtos'
              textColor='white'
              color='transparent'
              border='1px solid #084526'
              width={170} />*/}
const Buttons = ({text,textColor,color,border,width}) => {
  return (
    <C.Button
      style={{
        background:color,
        width:width,
        border:border,
        color: textColor
      }}
    >
        {text}
    </C.Button>
   
  )
}
export default Buttons;