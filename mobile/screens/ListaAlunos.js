import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert, TouchableOpacity } from 'react-native';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const navigation = useNavigation();

  async function fetchAlunos() {
    try {
      const res = await api.get('/alunos');
      setAlunos(res.data);
    } catch {
      Alert.alert('Erro', 'Falha ao buscar alunos');
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchAlunos);
    return unsubscribe;
  }, [navigation]);

  function confirmarDelete(id) {
    Alert.alert(
      'Confirmar',
      'Deseja excluir o aluno?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', style: 'destructive', onPress: () => handleDelete(id) }
      ]
    );
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/alunos/${id}`);
      fetchAlunos();
    } catch {
      Alert.alert('Erro', 'Falha ao excluir aluno');
    }
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Cadastrar Aluno" onPress={() => navigation.navigate('CadastroAluno')} />
      <FlatList
        data={alunos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text>ID: {item.id}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>Turma: {item.turma}</Text>
            <Text>Curso: {item.curso}</Text>
            <Text>Matrícula: {item.matricula}</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <TouchableOpacity onPress={() => navigation.navigate('CadastroAluno', { id: item.id })} style={{ marginRight: 10 }}>
                <Text style={{ color: 'blue' }}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => confirmarDelete(item.id)}>
                <Text style={{ color: 'red' }}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
