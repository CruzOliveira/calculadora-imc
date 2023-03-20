import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Volta() {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      margin={10}
    >
      <Button onClick={() => navigate('/')} variant="contained" size="large">
        Voltar
      </Button>
    </Stack>
  );
}
