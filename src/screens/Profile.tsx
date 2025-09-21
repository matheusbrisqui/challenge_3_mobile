import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<any>({ email: '', riskProfile: '', liquidity: '' });

  useEffect(() => {
    (async () => {
      const p = await AsyncStorage.getItem('@investsmart_profile');
      if (p) setProfile(JSON.parse(p));
    })();
  }, []);

  const save = async () => {
    await AsyncStorage.setItem('@investsmart_profile', JSON.stringify(profile));
    Alert.alert('Perfil salvo');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <TextInput style={styles.input} value={profile.email} onChangeText={(t) => setProfile({ ...profile, email: t })} placeholder="Email" />
      <TextInput style={styles.input} value={profile.riskProfile} onChangeText={(t) => setProfile({ ...profile, riskProfile: t })} placeholder="Perfil de risco" />
      <TextInput style={styles.input} value={String(profile.liquidity)} onChangeText={(t) => setProfile({ ...profile, liquidity: Number(t) })} placeholder="Liquidez disponível" keyboardType="numeric" />
      <Button title="Salvar" onPress={save} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, marginBottom: 12 },
});

export default Profile;
