/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: blue;
  display: flex;
  justify-content: center;
`;
const ConteinerCabecalho = styled.div``;

export default function Cabecalho() {
  return (
    <HeaderContainer>
      <ConteinerCabecalho>
        <h1>Cal+Imc</h1>
      </ConteinerCabecalho>
    </HeaderContainer>
  );
}
