import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import DataStore from '../Http/AsyncStorange'

const DetailPage = () => {
  const dataStore = new DataStore() 
  useEffect(() => {
    
    let url = `http://v.juhe.cn/movie/index?key=e3024168a12eebdd3490d6dd024b570a&title=%E8%A5%BF%E9%83%A8%E4%B8%96%E7%95%8C`;
    dataStore.fetchData(url)
      .then(res => {
        console.log(res)
      })
  })
  return (
    <View style={styles.container}>
      <Text style={styles.text}>welcome to DetailPage</Text>
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

export default DetailPage;