import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AssetCard } from '../components/AssetCard';

const Portfolio: React.FC = () => {
  // Tela exemplo com 3-5 itens (requisito de avaliação)
  const assets = [
    { id: '1', name: 'Tesouro Selic', type: 'Renda Fixa', allocation: '40%' },
    { id: '2', name: 'Fundo Multimercado XYZ', type: 'Fundo', allocation: '30%' },
    { id: '3', name: 'Ações ABC', type: 'Renda Variável', allocation: '30%' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Minha Carteira</Text>
      {assets.map(a => (
        <AssetCard key={a.id} title={a.name} subtitle={`${a.type} • Alocação: ${a.allocation}`} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
});

export default Portfolio;
