import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import NavigatorUtil from '../../Navigator/NavigatorUtil'


const WelcomePage = (props) => {

  useEffect(() => {
    let timer = setTimeout(() => {
      NavigatorUtil.goHomePage(props)
    },500)
    return componentWillUnmount(timer)
  })

  function componentWillUnmount(timer) {
    console.log(timer)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>welcome to WelcomePage</Text>
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

export default WelcomePage;