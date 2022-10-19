import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {AiOutlineClockCircle} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const FooterDiv = ()=>{
  return (
    <>
    <div className={`flex text-gray-800 px-0 py-8 bg-white
      h-[300px] flex-row gap-4 justify-center shadow-sm 
      border-t border-[#D7B34C] md:h-auto md:flex-colunm
    `}>
      <div className='flex w-[300px] itens-center justify-center
        font-sans-serif text-gray-800'>
        <div>
            Nossas politicas:<br/><br/>   
            <a className='mb-4 justify-around 
            cursor-pointer underline underline-offset-4 
            hover:text-[#D7B34C]'>politica de privacidade</a><br/><br/>
            <a className='mb-4 justify-around 
            cursor-pointer underline underline-offset-4 
            hover:text-[#D7B34C]'>politica de segurança</a><br/><br/>
            <a className='mb-4 justify-around 
            cursor-pointer underline underline-offset-4 
            hover:text-[#D7B34C]'>Sobre nos</a>
          </div>
      </div>
      <div className='flex w-[300px] itens-center justify-center
        font-sans-serif text-gray-800'>
        <div>
          Fale Conosco:<br/><br/>
          <AiOutlineMail/>{' '}email: 
          <a className='mb-4 justify-around 
            cursor-pointer underline underline-offset-4 
            hover:text-[#D7B34C]' href="https://elluxus.atendimento@gmail.com"> elluxus.atendimento@gmail.com</a><br/><br/>
          <AiOutlineWhatsApp/>{' '}contato:<a className='mb-4 justify-around 
            cursor-pointer underline underline-offset-4 
            hover:text-[#D7B34C]' href="https://wa.me/5531999570478" type="_blank" > 31 9 9957-0478</a><br/><br/>
          <AiOutlineClockCircle/>{' '}aberto de segunda a sexta de 08:00 as 18:00<br/>
          sabado de 08:00 a 12:00
        </div>
      </div>
    </div>
    <div className='flex bg-whitesmoke text-gray-800 h-20
      justify-around itens-center border-t border-[#D7B34C]
      md:my-0 md:mx-4'>
      <div className='flex flex-row'>
        <AiFillGithub className='flex w-6 h-6 mr-2'/>
        <a className='mb-4 justify-around 
          cursor-pointer hover:text-[#D7B34C]' href="https://github.com/T4SpaX">
          {' '}Developed by - &lt; T4SpaX &gt; 
        </a>
      </div><br/> 
      <div>© 2022 Elluxus - Todos os Direitos Reservados</div> 
    </div>
    </>
  )
}

export default FooterDiv