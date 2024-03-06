import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';

import Article from './components/Article';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        WIRED
      </Text>
      <Card>
        <Article />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
