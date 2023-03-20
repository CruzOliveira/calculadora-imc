/* eslint-disable no-unused-vars */
import { Stack, Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Formulario() {
  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [idade, setIdade] = useState();
  const [dtNaci, setDtNaci] = useState();
  const [altura, setAltura] = useState();
  const [peso, setPeso] = useState();
  const [imc, setImc] = useState();

  const calculateImc = () => {
    const imc = peso / (altura * altura);
    const formattedImc = imc.toFixed(2);
    setImc(formattedImc);
  };

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
        <TextField
          value={nome}
          onChange={(text) => setNome(text.target.value)}
          required
          id="outlined-required"
          label="Nome"
        />
        <TextField
          value={cpf}
          onChange={(text) => setCpf(text.target.value)}
          required
          id="outlined-required"
          label="CPF"
        />
        <TextField
          value={idade}
          onChange={(text) => setIdade(text.target.value)}
          required
          id="outlined-required"
          label="Idade"
        />
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <TextField
          value={dtNaci}
          onChange={(text) => setDtNaci(text.target.value)}
          required
          id="outlined-required"
          label="Data de Nacimento"
        />
        <TextField
          value={altura}
          onChange={(e) => setAltura(+e.target.value)}
          required
          id="outlined-required"
          label="Altura"
        />
        <TextField
          value={peso}
          required
          onChange={(e) => setPeso(+e.target.value)}
          id="outlined-required"
          label="Peso"
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin={10}
      >
        <Button onClick={calculateImc} variant="contained" size="large">
          CALCULAR
        </Button>
      </Stack>
    </Box>
  );
}
