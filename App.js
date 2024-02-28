import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Рай для любителей кошек</Text>
      <View style={styles.title}>
      </View>
      <View style={styles.source}>
        <Text style={styles.sourceTitle}>В мире существуют не только города, где можно часто встретить кошек, но и целый остров, полный этих животных. О нем и расскажем сегодня. </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.cardTitle}>Если у вас аллергия на кошек, то знайте, что в мире есть место, которое точно не для вас. Хотя необычность этого места может и стать аргументом для его посещения. Речь идет не о городе, где можно часто встретить кошек, а о целом японском острове, полным грациозных животных. Он носит название Таширодзима и расположен в префектуре Мияги на севере Японии. На острове проживает всего около 100 человек,  большинство из которых старше 70 лет. А вот точного количества огромного числа кошек никто не знает. Кстати, кошки в Японии очень почитаются, считаясь символом удачи и счастья. Именно поэтому в центре острова есть святилище, посвященное им.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  source: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 15,
    paddingBottom: 20
  },
  sourceTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: 'center'
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 10,
    paddingTop: 10,
    textAlign: 'center',
    paddingHorizontal: 30
  },
  content: {
    flex: 3,
    backgroundColor: '#949494',
    fontSize: 16,
    lineHeight: 24,
  },
});

