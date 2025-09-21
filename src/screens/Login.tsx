import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // se o usuário já estiver logado, redirecionar
    (async () => {
      const token = await AsyncStorage.getItem('@investsmart_token');
      if (token) navigation.navigate('HomeStack');
    })();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Informe email e senha');
      return;
    }

    // Simulação de login - substituir pela chamada à sua API em C#
    try {
      // exemplo: chamar API e receber token
      const fakeToken = 'token_simulado_123';
      await AsyncStorage.setItem('@investsmart_token', fakeToken);
      // também armazenar perfil simulado
      const profile = JSON.stringify({ email, riskProfile: 'moderado', liquidity: 10000 });
      await AsyncStorage.setItem('@investsmart_profile', profile);
      navigation.navigate('HomeStack');
    } catch (e) {
      Alert.alert('Erro', 'Falha ao autenticar');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>InvestSmart</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 32, fontWeight: '700', marginBottom: 24, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 12 },
});

export default LoginScreen;
