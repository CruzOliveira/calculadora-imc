import React from 'react';
import Botao from '../Componentes/Botao';
import Cabecalho from '../Componentes/Cabecalho';
import Lista from '../Componentes/Lista';
import Rodape from '../Componentes/Rodape';

export default function Pagina() {
  return (
    <>
      <Cabecalho />
      <main>
        <section>
          <Lista />
          <Botao />
        </section>
      </main>
      <Rodape />
    </>
  );
}
