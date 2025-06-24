import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaAlunos from './screens/ListaAlunos';
import CadastroAluno from './screens/CadastroAluno';
import Menu from './components/Menu';

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<ListaAlunos />} />
        <Route path="/cadastro" element={<CadastroAluno />} />
        <Route path="/editar/:id" element={<CadastroAluno />} />
      </Routes>
    </BrowserRouter>
  );
}
