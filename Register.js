import React, { useState } from "react";
import { View, TextInput, Image, Pressable, Text, StyleSheet, Alert } from "react-native";
import Toast from "react-native-toast-message";

const Register = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = () => { 
    if (!username || !password) { 
      Alert.alert("Error", "Please, fill all the fields", [ 
        { text: "OK", onPress: () => {} }, 
      ]); 
      return; 
    } 
    Alert.alert("Success", "Successfully registered", [ 
      { text: "OK", onPress: () => {} }, 
    ]); 
    navigation.navigate("Welcome", { username }); 
    setUsername(""); 
    setPassword(""); 
  }; 

  const navigateToLogin = () => {
    navigation.navigate("Login");
    setUsername("");
    setPassword("");
    setEmail("");
  };

  return (
  <View style={styles.container}>
    <Image source={require("./img/login.jpg")} style={styles.image} />
    <Text style={styles.head}>Регистрация</Text>
    <TextInput
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
      style={styles.input}
    />
    <TextInput
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={true}
      style={styles.input}
    />
    <TextInput
      placeholder="Username"
      value={username}
      onChangeText={setUsername}
      style={styles.input}
    />
    <Pressable style={styles.regbutton} onPress={handleRegister}>
      <Text style={styles.textreg}>Register</Text>
    </Pressable>
    <Pressable onPress={navigateToLogin}>
      <Text style={styles.textlog}>Login</Text>
    </Pressable>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  head: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: 250,
    borderRadius: 25,
    marginBottom: 10,
    fontSize: 16,
  },
  regbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#007bff',
    width: 250,
    borderRadius: 25,
    marginTop: 20,
  },
  textreg: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textlog: {
    color: '#007bff',
    marginTop: 10,
  },
});

export default Register;