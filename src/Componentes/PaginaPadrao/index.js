import Cabecalho from 'Componentes/Cabecalho';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao() {
  return (
    <div>
      <Cabecalho />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
