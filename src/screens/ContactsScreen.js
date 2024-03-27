// ContactsScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import dynamicStyles from './styles2';


const contactsData = [
  { id: 1, name: 'John Doe', photo: { uri: 'https://i.ibb.co/6XBZgw6/kachok-s-noutbukom-mem-6.jpg' } },
  { id: 2, name: 'Jane Smith', photo: { uri: 'https://i.ibb.co/xDWFbV6/images.jpg' } },
  { id: 3, name: 'Alice Johnson', photo: { uri: 'https://i.ibb.co/TP77r73/kachok-s-noutbukom-mem-4.jpg' } },
];

const ContactItem = ({ contact, onPress }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = dynamicStyles(isDarkMode);

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(contact)}>
      <Image source={contact.photo} style={styles.photo} />
      <Text style={styles.name}>{contact.name}</Text>
    </TouchableOpacity>
  );
};

const ContactsScreen = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = dynamicStyles(isDarkMode);

  const renderContactItem = ({ item }) => (
    <ContactItem contact={item} onPress={contact => navigation.navigate('Detail', { contact })} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contactsData}
        renderItem={renderContactItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ContactsScreen;
