import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);

  async function fetchAlunos() {
    try {
      const res = await api.get('/alunos');
      setAlunos(res.data);
    } catch (err) {
      alert('Erro ao buscar alunos');
    }
  }

  useEffect(() => {
    fetchAlunos();
  }, []);

  async function handleDelete(id) {
    if (window.confirm('Confirmar exclusão?')) {
      try {
        await api.delete(`/alunos/${id}`);
        fetchAlunos();
      } catch {
        alert('Erro ao excluir');
      }
    }
  }

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <Link to="/cadastro">Cadastrar Aluno</Link>
      <table border="1" cellPadding="8" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Turma</th>
            <th>Curso</th>
            <th>Matrícula</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nome}</td>
              <td>{a.turma}</td>
              <td>{a.curso}</td>
              <td>{a.matricula}</td>
              <td>
                <Link to={`/editar/${a.id}`}>Editar</Link> |{' '}
                <button onClick={() => handleDelete(a.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
