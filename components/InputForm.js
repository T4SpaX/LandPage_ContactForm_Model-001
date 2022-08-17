import React,{useState} from 'react'
import * as C from '../styles/components_Styles/Input_styles.js'

const InputForm = () => {
  const [name, setName] = useState('')


  return (
    <>
      <C.Inputs
        value={name}
        onChange={({target})=>setName(target.value)}
      />
      <C.Labels>name</C.Labels>
    </>
  )
}

export default InputForm