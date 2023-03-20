import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function createData(name, cpf, idade, dtNacimento, altura, peso, imc) {
  return { name, cpf, idade, dtNacimento, altura, peso, imc };
}

const rows = [createData()];

export default function BasicTable() {
  const navigation = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Cpf</TableCell>
            <TableCell align="right">Idade</TableCell>
            <TableCell align="right">Data de Nacimento</TableCell>
            <TableCell align="right">Altura</TableCell>
            <TableCell align="right">Peso</TableCell>
            <TableCell align="right">IMC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        margin={10}
      >
        <Button
          onClick={() => navigation('/')}
          variant="contained"
          size="large"
        >
          Voltar
        </Button>
      </Stack>
    </TableContainer>
  );
}
