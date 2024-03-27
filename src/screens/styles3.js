// styles.js
import { StyleSheet } from 'react-native';

export const dynamicStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#1c1c1e' : '#044244',
      height: '100%',
    },
    header: {
      paddingHorizontal: 40,
      backgroundColor: isDarkMode ? '#1c1c1e' : '#FFF',
      height: '50%',
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
    },
    backIcon: {
      color: isDarkMode ? '#FFF' : '#044244',
    },
    moreIcon: {
      color: isDarkMode ? '#FFF' : '#044244',
    },
    name: {
      fontSize: 22,
      color: isDarkMode ? '#FFF' : '#044244',
      alignSelf: 'center',
    },
    location: {
      fontSize: 16,
      color: isDarkMode ? '#A1A1AA' : '#9ca1a2',
      alignSelf: 'center',
    },
    statText: {
      fontSize: 15,
      color: isDarkMode ? '#FFF' : '#044244',
      alignSelf: 'center',
    },
    statLabel: {
      fontSize: 16,
      color: isDarkMode ? '#A1A1AA' : '#9ca1a2',
      alignSelf: 'center',
    },
    tabText: {
      color: isDarkMode ? '#FFF' : '#9ca1a2',
    },
    activeTabText: {
      color: isDarkMode ? '#FFF' : '#FFF',
    },
    activeTabUnderline: {
      borderBottomColor: isDarkMode ? '#FFF' : '#FFF',
    },
    inactiveTabUnderline: {
      borderBottomColor: isDarkMode ? '#A1A1AA' : '#044244',
    },
    collectionCard: {
      backgroundColor: isDarkMode ? '#2C2C2E' : '#728c8e',
      height: 260,
      width: 280,
      marginHorizontal: 40,
      borderRadius: 30,
      marginTop: 30,
    },
    collectionTitle: {
      color: isDarkMode ? '#FFF' : '#FFF',
      fontSize: 15,
    },
    collectionCount: {
      color: isDarkMode ? '#A1A1AA' : '#dedede',
      fontSize: 12,
    },
  });