import { Text, StyleSheet } from 'react-native';

import { useState } from 'react';
import { View, TouchableOpacity, TextInput, Image } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleContact = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    setShowSuccessMessage(true);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <Image source={require('./assets/mail.png')} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.subtitle}>About Us</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
          tincidunt lectus, vitae gravida eros. Fusce id aliquet arcu, sit amet
          dictum lectus. Phasellus lacinia, enim id mattis volutpat, tortor
          tellus luctus ex, eget dapibus orci sem vitae odio.
        </Text>
        <Text style={styles.subtitle}>Contact Us</Text>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Message"
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button} onPress={handleContact}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        {showSuccessMessage && (
          <Text style={styles.successMessage}>Your message has been delivered.</Text>
        )}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#777',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessage: {
    color: 'green',
    marginTop: 10,
    alignSelf: 'center',
  },
  image: {
    width: 100,
    height: 100
  },
});

export default App;