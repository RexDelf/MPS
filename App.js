import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const rockAlbums = [
  { id: '1', artist: 'Queen', album: 'A Night at the Opera', year: 1975 },
  { id: '2', artist: 'AC/DC', album: 'Back in Black', year: 1980 },
  { id: '3', artist: 'Led Zeppelin', album: 'Led Zeppelin IV', year: 1971 },
  { id: '4', artist: 'Pink Floyd', album: 'The Dark Side of the Moon', year: 1973 },
  { id: '5', artist: 'Guns N\' Roses', album: 'Appetite for Destruction', year: 1987 },
  { id: '6', artist: 'Nirvana', album: 'Nevermind', year: 1991 },
];

const metalAlbums = [
  { id: '1', artist: 'Metallica', album: 'Master of Puppets', year: 1986 },
  { id: '2', artist: 'Iron Maiden', album: 'The Number of the Beast', year: 1982 },
  { id: '3', artist: 'Slayer', album: 'Reign in Blood', year: 1986 },
  { id: '4', artist: 'Pantera', album: 'Cowboys from Hell', year: 1990 },
  { id: '5', artist: 'Megadeth', album: 'Rust in Peace', year: 1990 },
  { id: '6', artist: 'Anthrax', album: 'Among the Living', year: 1987 },
];

const popAlbums = [
  { id: '1', artist: 'Michael Jackson', album: 'Thriller', year: 1982 },
  { id: '2', artist: 'Whitney Houston', album: 'Whitney Houston', year: 1985 },
  { id: '3', artist: 'Madonna', album: 'Like a Virgin', year: 1984 },
  { id: '4', artist: 'Prince', album: 'Purple Rain', year: 1984 },
  { id: '5', artist: 'Mariah Carey', album: 'Daydream', year: 1995 },
  { id: '6', artist: 'Britney Spears', album: '...Baby One More Time', year: 1999 },
];

const RockScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Classic Rock Albums</Text>
      <FlatList
        data={rockAlbums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.albumText}>{`${item.artist} - ${item.album} (${item.year})`}</Text>
        )}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer} />
        <View style={styles.buttonContainer}>
          <Button
            color="#000"
            title="Next"
            onPress={() => navigation.navigate('Metal')}
          />
        </View>
      </View>
    </View>
  );
};

const MetalScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Classic Metal Albums</Text>
      <FlatList
        data={metalAlbums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.albumText}>{`${item.artist} - ${item.album} (${item.year})`}</Text>
        )}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button color="#000" title="Back" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color="#000"
            title="Next"
            onPress={() => navigation.navigate('Pop')}
          />
        </View>
      </View>
    </View>
  );
};

const PopScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Classic Pop Albums</Text>
      <FlatList
        data={popAlbums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.albumText}>{`${item.artist} - ${item.album} (${item.year})`}</Text>
        )}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button color="#000" title="Back" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.buttonContainer} />
      </View>
    </View>
  );
};


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: styles.headerStyle, headerTintColor: '#fff' }}>
        <Stack.Screen name="Rock" component={RockScreen} />
        <Stack.Screen name="Metal" component={MetalScreen} />
        <Stack.Screen name="Pop" component={PopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  albumText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
  },
  headerStyle: {
    backgroundColor: '#000',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 16,
  },
  buttonContainer: {
    marginHorizontal: 16,
  },
});