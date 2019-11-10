import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import p2d from '../../Until/p2d'

export default class SellingSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { headBackShareDataModel } = this.props
    return (
      <View style={styles.sellingContainer}>
        <Text style={styles.title}> 销售情况 </Text>
        <View style={styles.sellDetail}>
          <View style={[styles.sellItem, styles.today]}>
            <Text style={styles.sellDate}>今天</Text>
            <Text style={[styles.todayQtys, styles.qtys]}>{headBackShareDataModel.todayOrders}单</Text>
          </View>
          <View style={[styles.sellItem, styles.threeDay]}>
            <Text style={styles.sellDate}>近3天</Text>
            <Text style={[styles.threeDayQtys, styles.qtys]}>{headBackShareDataModel.sectOrders}单</Text>
          </View>
          <View style={[styles.sellItem, styles.thirtyDay]}>
            <Text style={styles.sellDate}>近30天</Text>
            <Text style={[styles.thirtyDayQtys, styles.qtys]}>{headBackShareDataModel.thirtyOrders}单</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sellingContainer: {
    padding: p2d(30)
  },
  title: {
    fontSize: p2d(30),
    fontWeight: '700',
    color: '#444',
  },
  sellDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: p2d(20)
  },
  sellItem: {
    width: '30%',
    height: p2d(150),
    borderRadius: p2d(16)
  },
  today: {
    backgroundColor: '#f1faff'
  },
  threeDay: {
    backgroundColor: '#fff5ed'
  },
  thirtyDay: {
    backgroundColor: '#fff2f2'
  },
  sellDate: {
    paddingLeft: p2d(20),
    paddingTop: p2d(20),
    color: '#999'
  },
  qtys: {
    marginTop: p2d(20),
    marginBottom: p2d(12),
    textAlign: 'center'
  },
  todayQtys: {
    color: '#0193e6'
  },
  threeDayQtys: {
    color: '#ff7800'
  },
  thirtyDayQtys: {
    color: '#f23030'
  }
})