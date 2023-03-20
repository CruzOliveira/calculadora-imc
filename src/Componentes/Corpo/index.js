import { Stack, Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useState } from 'react';

export default function Formulario() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [idade, setIdade] = useState('');
  const [dtNaci, setDtNaci] = useState('');
  const [altura, setAltura] = useState([]);
  const [peso, setPeso] = useState([]);
  const [imc, setImc] = useState([]);

  const calculateImc = () => {
    const imc = peso / (altura * altura);
    setImc(imc);
  };
  console.log(imc);
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
          onChange={(e) => setNome(e.target.value)}
          required
          id="outlined-required"
          label="Nome"
        />
        <TextField
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
          id="outlined-required"
          label="CPF"
        />
        <TextField
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
          id="outlined-required"
          label="Idade"
        />
      </Stack>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <TextField
          value={dtNaci}
          onChange={(e) => setDtNaci(e.target.value)}
          required
          id="outlined-required"
          label="Data de Nacimento"
        />
        <TextField
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          required
          id="outlined-required"
          label="Altura"
        />
        <TextField
          value={peso}
          required
          onChange={(e) => setPeso(e.target.value)}
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
