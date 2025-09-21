import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = { title: string; subtitle?: string };

export const AssetCard: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 12, borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, marginBottom: 8, backgroundColor: '#fff' },
  title: { fontSize: 16, fontWeight: '700' },
  subtitle: { color: '#444', marginTop: 6 },
});
