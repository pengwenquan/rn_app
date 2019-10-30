import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import DataStore from '../Http/AsyncStorange'
import { connect } from 'react-redux'
import { onThemeChange } from '../Actions/theme'

class DetailPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let dataStore = new DataStore() 
    let url = `http://v.juhe.cn/movie/index?key=e3024168a12eebdd3490d6dd024b570a&title=%E8%A5%BF%E9%83%A8%E4%B8%96%E7%95%8C`;
    dataStore.fetchData(url)
      .then(res => {
        console.log(res,  'detail')
      })
    
  }

  render() {
    const { onThemeChange } = this.props
    console.log(this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>welcome to DetailPage</Text>
        <Button 
          title="改变主题"
          onPress={() => {onThemeChange('pink')}}
        />
      </View>
    )
  }
}

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


const mapStateToProps = state => ({
  theme: state.theme.theme
})

const mapDispatchToProps = dispatch => ({
  onThemeChange: theme => dispatch(onThemeChange(theme))
})
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);