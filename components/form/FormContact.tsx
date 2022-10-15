import React,{FormEvent, useState} from 'react';
import * as C from './style.js/index.js.js';
//import InputForm from './InputForm.js';
export const FormContact = () => {
    const initialState = {
      name:'',
      email:'',
      number:'',
      message:'',
      date: new Date().toLocaleDateString()
    }

    const [dataForm, setDataForm ] = useState(initialState) 

    const SendContact = async (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      
      const response = await fetch('api/submit',{
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(dataForm)
      });
      
      const content = await response.json()
      alert("Sua mensagem foi enviada com sucesso Por favor envie somente uma mensagem")
      setDataForm(initialState)
    }

    const onChangeInput = ({target}) =>setDataForm({
      ...dataForm, 
      [target.name]:target.value
    })

  return (
    <C.Container>
      <C.Content>

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
            <C.Inputs name="number" type='tel' id="number" ariaLabel="Seu Numero"
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
