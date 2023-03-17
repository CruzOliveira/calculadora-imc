import { Button, Stack } from '@mui/material';
import React from 'react';

export default function Botao() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Button variant="contained" size="large">
        CALCULAR
      </Button>
    </Stack>
  );
}
