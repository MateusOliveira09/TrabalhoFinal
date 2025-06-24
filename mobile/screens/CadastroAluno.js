import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import api from '../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CadastroAluno() {
  const [nome, setNome] = useState('');
  const [turma, setTurma] = useState('');
  const [curso, setCurso] = useState('');
  const [matricula, setMatricula] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    if (id) {
      api.get(`/alunos/${id}`).then(res => {
        setNome(res.data.nome);
        setTurma(res.data.turma);
        setCurso(res.data.curso);
        setMatricula(res.data.matricula);
      }).catch(() => Alert.alert('Erro', 'Aluno não encontrado'));
    }
  }, [id]);

  async function handleSave() {
    const alunoData = { nome, turma, curso, matricula };
    try {
      if (id) {
        await api.put(`/alunos/${id}`, alunoData);
      } else {
        await api.post('/alunos', alunoData);
      }
      navigation.goBack();
    } catch {
      Alert.alert('Erro', 'Falha ao salvar aluno');
    }
  }

  const inputStyle = { borderWidth: 1, marginBottom: 15, padding: 8 };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome} style={inputStyle} />

      <Text>Turma:</Text>
      <TextInput value={turma} onChangeText={setTurma} style={inputStyle} />

      <Text>Curso:</Text>
      <TextInput value={curso} onChangeText={setCurso} style={inputStyle} />

      <Text>Matrícula:</Text>
      <TextInput value={matricula} onChangeText={setMatricula} style={inputStyle} />

      <Button title={id ? 'Atualizar' : 'Cadastrar'} onPress={handleSave} />
    </View>
  );
}
