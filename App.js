import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Table from './Component/Table';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Table />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
