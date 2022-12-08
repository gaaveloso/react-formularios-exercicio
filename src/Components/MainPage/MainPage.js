import React from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [formulario, onChange] = useForm({ nome: "", modulos: "", tecnologias: "", responsavel: ""})

  const handleClick = (event) => {
    console.log(formulario);
    event.preventDefault()
  }

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={formulario.nome}
          onChange={onChange}
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          name="modulos"
          value={formulario.modulos}
          onChange={onChange}
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          value={formulario.tecnologias}
          onChange={onChange}
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          name="responsavel"
          value={formulario.responsavel}
          onChange={onChange}
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage