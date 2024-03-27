import React, { useState } from "react";
import { View, TextInput, Image, Pressable, Text, StyleSheet, Alert} from "react-native";
import Toast from "react-native-toast-message";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => { 
    if (!username || !password) { 
      Alert.alert("Error", "Please, fill all the fields", [ 
        { text: "OK", onPress: () => {} }, 
      ]); 
      return; 
    } 
    Alert.alert("Success", "Successfully logged in", [ 
      { text: "OK", onPress: () => {} }, 
    ]); 
    navigation.navigate("Welcome", { username }); 
    setUsername(""); 
    setPassword(""); 
  }; 
  
  const navigateToRegister = () => {
    navigation.navigate("Register");
    setUsername("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./img/login.jpg")}
        style={styles.image}
      />
      <Text style={styles.head}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <View style={{ marginBottom: 10 }}>
        <Pressable style={styles.logbutton} onPress={handleLogin}>
          <Text style={styles.textlog}>Login</Text>
        </Pressable>
      </View>
      <Pressable onPress={navigateToRegister}>
        <Text style={styles.textreg}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  head: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: 250,
    borderRadius: 25,
    marginBottom: 10,
    fontSize: 16,
  },
  logbutton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    backgroundColor: "#007bff",
    width: 250,
    borderRadius: 25,
    marginTop: 20,
  },
  textlog: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  textreg: {
    color: "#007bff",
    marginTop: 10,
  },
});


export default Login;