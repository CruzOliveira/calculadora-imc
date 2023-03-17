import React from 'react';
import Botao from './Componentes/Corpo/Botao';
import Cabecalho from './Componentes/Cabecalho';
import Formulario from './Componentes/Corpo/Formulario';
import './stylesGlobal.css';

export default function App() {
  return (
    <>
      <Cabecalho />
      <Formulario />
      <Botao />
    </>
  );
}
