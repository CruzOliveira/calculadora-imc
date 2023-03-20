import PaginaPadrao from 'Componentes/PaginaPadrao';
import Home from 'pages/Home';
import TabelaUsuario from 'pages/TabelaUsuario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/tabela" element={<PaginaPadrao />}>
          <Route index element={<TabelaUsuario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
