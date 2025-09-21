import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Education: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Educação Financeira</Text>
      <Text style={styles.paragraph}>Aqui você encontrará artigos e explicações sobre renda fixa, renda variável, diversificação e gestão de risco.</Text>
      <Text style={styles.paragraph}>• O que é liquidez?</Text>
      <Text style={styles.paragraph}>• Diferença entre ações e fundos</Text>
      <Text style={styles.paragraph}>• Como montar uma carteira</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, paddingBottom: 40 },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  paragraph: { marginBottom: 8, fontSize: 14 },
});

export default Education;
