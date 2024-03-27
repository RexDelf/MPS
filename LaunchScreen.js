import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LaunchScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/image.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default LaunchScreen;