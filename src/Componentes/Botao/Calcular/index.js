import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Calcular() {
  const navigate = useNavigate();

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      margin={10}
    >
      <Button
        onClick={() => navigate('/tabela')}
        variant="contained"
        size="large"
      >
        CALCULAR
      </Button>
    </Stack>
  );
}
