import React from "react";
import { View, Text, Image, Button, Pressable, StyleSheet } from "react-native";
const Welcome = ({ route,navigation }) => {
  const { username } = route.params;
  const navigateToLogin = () => {
    navigation.navigate("Login");
  };
  return (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={require("./img/hello.png")} style={styles.image} />
    </View>
    <Text style={styles.welcomeText}>
      Welcome, {username}!
    </Text>
    <Pressable style={styles.exitbutton} onPress={navigateToLogin}>
      <Text style={styles.exittext}>Logout</Text>
    </Pressable>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 25,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textShadowColor: '#ccc',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  exitbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#dc3545',
    width: 200,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  exittext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Welcome;