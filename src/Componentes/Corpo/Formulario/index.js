import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

export default function Formulario() {
  return (
    <Box
      m={10}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <TextField required id="outlined-required" label="Nome" />
        <TextField required id="outlined-required" label="CPF" />
        <TextField required id="outlined-required" label="Idade" />
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <TextField required id="outlined-required" label="Data de Nacimento" />
        <TextField required id="outlined-required" label="Altura" />
        <TextField required id="outlined-required" label="Peso" />
      </Stack>
    </Box>
  );
}
