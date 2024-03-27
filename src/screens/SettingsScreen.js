import React, { useContext } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext';

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: isDarkMode ? '#111' : '#FFF'}]}>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{ false: '#81b0ff', true: '#767577' }}
        thumbColor={isDarkMode ? '#f4f3f4' : '#f5dd4b'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;