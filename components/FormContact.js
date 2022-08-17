import React,{useState} from 'react';
import * as C from '../styles/layout_Styles/SectionContact_style.js';
//import InputForm from './InputForm.js';

export const FormContact = (
  {color,height,reverb,box}
  ) => {

    const [dataForm, setDataForm ] = useState({
      name:'',
      email:'',
      number:'',
      message:''
    })

    const SendContact = async (e)=>{
      e.preventDefault()
      console.log(dataForm)
    }

    const onChangeInput = ({target}) =>setDataForm({
      ...dataForm, 
      [target.name]:target.value
    })

  return (
    <C.Container style={{
      background:color,
      minHeight:height,
      boxShadow:color=='#084526'? '0px 4px 10px #1d1d1d':'none',
      zIndex:color=='#084526'? '2':'0',
      }} box={box} >
      <C.Content style={{
        height: color=='#084526' ? '200px':'600px'
      }} reverb={reverb}>

        {/*inicio formulario*/}
        <C.Form onSubmit={SendContact}>
          <C.InputDiv>
            <C.Inputs name="name" type='name' id="name" ariaLabel="Seu Nome"
              value={dataForm.name}
              onChange={onChangeInput}/>
            <C.Labels 
              htmlFor="name" 
              actRequire={dataForm.name}
              >Seu Nome</C.Labels>
          </C.InputDiv>

          <C.InputDiv>
            <C.Inputs name="email" type='email' id="email" ariaLabel="Seu E-mail"
              value={dataForm.email}
              onChange={onChangeInput}/>
            <C.Labels  
              htmlFor="email" 
              actRequire={dataForm.email}
              >Seu E-mail</C.Labels>
          </C.InputDiv>

          <C.InputDiv>
            <C.Inputs name="number" type='number' id="number" ariaLabel="Seu Numero"
              value={dataForm.number}
              onChange={onChangeInput}
              title="adicione o seu numero de contato com o DDD"
              />
            <C.Labels 
              htmlFor="number" 
              actRequire={dataForm.number}
              >Seu Numero</C.Labels>
          </C.InputDiv>

          <C.InputDiv>
            <C.TextArea name="message"
              ariaLabel="Sua Mensagem"
              id="message"
              value={dataForm.message}
              onChange={onChangeInput}/>
            <C.Labels 
              htmlFor="message" 
              actRequire={dataForm.message} 
              >Sua Mensagem</C.Labels>
          </C.InputDiv>

          <C.SendButton type="submit" >Enviar mensagem</C.SendButton>
        </C.Form>
        {/*fim formulario*/}
        <C.AreaContact>
        </C.AreaContact>
      </C.Content>
    </C.Container>
  )
}