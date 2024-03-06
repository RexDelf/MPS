import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Article() {
  return (
    <View style={styles.container}>
   <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Clicked")}
      >
        <Text style={styles.buttonText}>Article</Text>
      </TouchableOpacity>
      <Image style={styles.logo} source={require('../assets/photocard.jpg')} />
      <Text style={styles.paragraph}>
        You Can’t Buy Lab-Grown Meat Even If You Wanted To
      </Text>
      <Text style={styles.text}>
      All of the restaurants that once sold cultivated meat have stopped offering it, leaving the industry in a strange limbo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  paragraph: {
    marginBottom: 25,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    alignSelf: 'center',
    width: '100%',
    height: 220,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 35,
  },
  button: {
    paddingTop: 30,
    marginBottom: 30,
    paddingEnd: 30,
    alignSelf: 'flex-end',  
  },
  buttonText: {
    fontSize: 15,
    color: 'blue',
  },
});
