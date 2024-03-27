import { StyleSheet } from 'react-native';

export const dynamicStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: isDarkMode ? '#111' : '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: isDarkMode ? '#333' : '#ccc',
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    color: isDarkMode ? 'white' : 'black',
  },
});

export default dynamicStyles;
