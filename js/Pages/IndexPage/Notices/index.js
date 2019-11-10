import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Carousel, Icon } from '@ant-design/react-native';
import p2d from '../../../Until/p2d'

export default class Notices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderNoticeItem = () => {
    const { mallNoticeList } = this.props
    return mallNoticeList.map(item => <Text key={item} numberOfLines={1} style={styles.noticeTitle}>{item.title}</Text>)
  }

  render() {
    return (
      <View style={styles.noticeContainer}>
        <Text style={styles.title}> 商城公告 </Text>
        <Icon name="sound" style={styles.icon} />
        <View style={styles.wrapper}>
        <Carousel
          selectedIndex={0}
          autoplay
          infinite
          vertical
          dots={false}
        >
          {this.renderNoticeItem()}
        </Carousel>
        </View>
        <Text style={styles.link}> | 更多 > </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noticeContainer: {
    flexDirection: "row",
    alignItems: 'center',
    marginLeft: p2d(30),
    marginRight: p2d(30),
    marginTop: p2d(20),
    marginBottom: p2d(38),
  },
  title: {
    fontSize: p2d(30),
    fontWeight: '700',
    color: '#444',
  },
  icon: {
    color: '#ff7800',
    width:p2d(40),
    height: p2d(40),
    marginLeft: p2d(20)
  },
  wrapper: {
   color: '#333',
   flex: 1,
  },
  noticeTitle: {
    color: '#666',
    fontSize: p2d(24),
  },
  link: {
    color: '#ccc',
    width: p2d(90)
  }
})
