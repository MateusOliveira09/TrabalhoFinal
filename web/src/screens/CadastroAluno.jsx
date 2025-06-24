import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

export default function CadastroAluno() {
  const [nome, setNome] = useState('');
  const [turma, setTurma] = useState('');
  const [curso, setCurso] = useState('');
  const [matricula, setMatricula] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api.get(`/alunos/${id}`).then(res => {
        setNome(res.data.nome);
        setTurma(res.data.turma);
        setCurso(res.data.curso);
        setMatricula(res.data.matricula);
      }).catch(() => alert('Aluno não encontrado'));
    }
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    const alunoData = { nome, turma, curso, matricula };
    try {
      if (id) {
        await api.put(`/alunos/${id}`, alunoData);
      } else {
        await api.post('/alunos', alunoData);
      }
      navigate('/');
    } catch {
      alert('Erro ao salvar aluno');
    }
  }

  return (
    <div>
      <h2>{id ? 'Editar' : 'Cadastrar'} Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br />
          <input value={nome} onChange={e => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Turma:</label><br />
          <input value={turma} onChange={e => setTurma(e.target.value)} required />
        </div>
        <div>
          <label>Curso:</label><br />
          <input value={curso} onChange={e => setCurso(e.target.value)} required />
        </div>
        <div>
          <label>Matrícula:</label><br />
          <input value={matricula} onChange={e => setMatricula(e.target.value)} required />
        </div>
        <button type="submit">{id ? 'Atualizar' : 'Cadastrar'}</button>
      </form>
    </div>
  );
}
