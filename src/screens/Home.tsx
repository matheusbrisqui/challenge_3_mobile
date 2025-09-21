import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AssetCard } from '../components/AssetCard';

const Home: React.FC = ({ navigation }: any) => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const p = await AsyncStorage.getItem('@investsmart_profile');
      if (p) setProfile(JSON.parse(p));
    })();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao InvestSmart</Text>
      {profile && <Text style={styles.subtitle}>Perfil: {profile.riskProfile} • Liquidez: R$ {profile.liquidity}</Text>}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Carteiras recomendadas (exemplo)</Text>
        <AssetCard title="Conservadora" subtitle="50% renda fixa • 30% fundos • 20% renda variável" />
        <AssetCard title="Moderada" subtitle="30% renda fixa • 40% fundos • 30% renda variável" />
        <AssetCard title="Agressiva" subtitle="10% renda fixa • 20% fundos • 70% renda variável" />
      </View>

      <View style={{ marginTop: 16 }}>
        <Button title="Ver carteira" onPress={() => navigation.navigate('Portfolio')} />
        <View style={{ height: 8 }} />
        <Button title="Educação Financeira" onPress={() => navigation.navigate('Education')} />
        <View style={{ height: 8 }} />
        <Button title="Perfil" onPress={() => navigation.navigate('Profile')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 14, marginBottom: 16, color: '#333' },
  section: { marginTop: 12 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
});

export default Home;
