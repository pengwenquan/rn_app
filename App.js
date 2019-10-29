
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import AppNavigator from './js/Navigator/AppNavigators'
import store from './js/Store'

export default class App extends Component {
  render() {
    return <Provider store={store}>
      <AppNavigator />
    </Provider>
  }
}


