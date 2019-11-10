import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import p2d from '../../Until/p2d'
import NavigatorUtil from '../../Navigator/NavigatorUtil'

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    console.log(this.props, this.state)
    const { navigation: {state} } = this.props
    return (
      <View style={styles.header}>
        <Text 
          style={styles.searchIcon} 
          onPress={() => { this.props.navigation.navigate("HomePage") }}
        >
          <Icon name="arrow-left" size={24} />
        </Text>
        <View style={styles.searchInput}>
          <Icon name="search" size={24} color="#aaa" />
          <TextInput 
            placeholder="请输入型号或产品相关信息"
            style={styles.searchTextInput} 
            onChangeText={(text) => this.setState({searchText: text})}
            value={ this.state.searchText }
          />
        </View>
        <Text 
          style={styles.searchText} 
          onPress={() => {console.log(this.state.searchText)}}
        >搜索</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: p2d(20)
  },
  searchIcon: {
    fontSize: p2d(32)
  },
  searchInput: {
    width: p2d(560),
    height: p2d(90),
    padding: p2d(6),
    borderRadius: p2d(10), 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7e7e7'
  }
})
