import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav style={{ padding: 10, background: '#ddd', marginBottom: 20 }}>
      <Link to="/" style={{ marginRight: 10 }}>Listar Alunos</Link>
      <Link to="/cadastro">Cadastrar Aluno</Link>
    </nav>
  );
}
