import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaAlunos from '../screens/ListaAlunos';
import CadastroAluno from '../screens/CadastroAluno';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListaAlunos">
        <Stack.Screen name="ListaAlunos" component={ListaAlunos} options={{ title: 'Lista de Alunos' }} />
        <Stack.Screen name="CadastroAluno" component={CadastroAluno} options={{ title: 'Cadastrar Aluno' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
