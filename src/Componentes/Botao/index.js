import { Button, Stack } from '@mui/material';
import React, { useState } from 'react';

export default function Botao() {
  const [imc, setImc] = useState();

  const calc = (peso, altura, imc) => {
    imc(peso / (altura * altura));
  };
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Button onClick={calc} variant="contained" size="large">
        CALCULAR
      </Button>
    </Stack>
  );
}
