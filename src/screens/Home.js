import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import Posts from '../screens/Posts';
import { ThemeContext } from './ThemeContext';
import dynamicStyles from './styles';

export default function Home({ navigation }) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = dynamicStyles(isDarkMode);

  const [popularSelected, setPopularSelected] = React.useState(true);

  const onTabPressed = () => {
    setPopularSelected(!popularSelected);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollViewContainer}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactsScreen')}
            style={styles.settingsContainer}
          >
            <Image source={require('../images/Untitled.png')} style={{ width: 20, height: 20 }} />
            <Text style={[styles.settingsText, { color: isDarkMode ? 'white' : 'white' }]}>
              Contacts
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingsScreen')}
            style={styles.settingsButton}
          >
            <Image source={require('../images/settings-icon.png')} style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>
          Find Awesome Photos
        </Text>

        <View
          style={[
            styles.searchBarContainer,
            { backgroundColor: isDarkMode ? '#111' : 'white' },
          ]}
        >
          <TextInput
            placeholder="search inspiration ..."
            placeholderTextColor={isDarkMode ? 'white' : '#9ca1a2'}
            style={[styles.searchBarInput, { color: isDarkMode ? 'white' : 'black' }]}
          />
          <Icon name="magnifying-glass" size={15} color={isDarkMode ? 'white' : 'black'} />
        </View>
      </View>

      <View
        style={[
          styles.scrollViewContent,
          { backgroundColor: isDarkMode ? '#111' : 'white' },
        ]}
      >
        <View style={styles.style1}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={onTabPressed}
              style={[
                styles.tabItem,
                {
                  borderBottomColor: popularSelected ? (isDarkMode ? 'white' : '#044244') : 'transparent',
                },
              ]}
            >
              <Text style={{ color: popularSelected ? (isDarkMode ? 'white' : '#044244') : '#9ca1a2' }}>
                MOST POPULAR
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onTabPressed}
              style={[
                styles.tabItem,
                {
                  borderBottomColor: !popularSelected ? (isDarkMode ? 'white' : '#044244') : 'transparent',
                },
              ]}
            >
              <Text style={{ color: !popularSelected ? (isDarkMode ? 'white' : '#044244') : '#9ca1a2' }}>
                RECENT
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.postContainer}>
            <Posts
              onPress={() => navigation.navigate('Detail')}
              name="Max Bator"
              profile={require('../images/p1.jpg')}
              photo={require('../images/5.jpg')}
            />
            <View style={[styles.style4, { backgroundColor: isDarkMode ? '#333' : '#3c636c' }]} />
          </View>

          <View style={styles.postContainer}>
            <View style={[styles.style5, { backgroundColor: isDarkMode ? '#333' : '#3c636c' }]} />
            <Posts
              onPress={() => navigation.navigate('Detail')}
              name="Erka Berka"
              profile={require('../images/p2.jpg')}
              photo={require('../images/6.jpg')}
            />
          </View>

          <View style={styles.postContainer}>
            <Posts
              onPress={() => navigation.navigate('Detail')}
              name="Max Bator"
              profile={require('../images/p1.jpg')}
              photo={require('../images/3.jpg')}
            />
            <View style={[styles.style6, { backgroundColor: isDarkMode ? '#333' : '#3c636c' }]} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}