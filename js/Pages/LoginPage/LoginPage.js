
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>welcome to LoginPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  }
});

export default LoginPage;