import React from 'react';
import Botao from '../Componentes/Botao';
import Cabecalho from '../Componentes/Cabecalho';
import Lista from '../Componentes/Lista';
import Rodape from '../Componentes/Rodape';
import styled from 'styled-components';

const PaginaConteiner = styled.div`
  width: 100%;
`;

export default function Pagina() {
  return (
    <Pagina>
      <Cabecalho />
      <main>
        <section>
          <Lista />
          <Botao />
        </section>
      </main>
      <Rodape />
    </Pagina>
  );
}
