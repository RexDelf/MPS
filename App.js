import React from 'react';
import { ThemeProvider } from './src/screens/ThemeContext';
import { MyStack } from './src/navigations/MyStack';

const App = () => {
  return (
    <ThemeProvider>
      <MyStack />
      </ThemeProvider>
  );
};

export default App;
