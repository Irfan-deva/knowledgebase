import { Dimensions, Platform, StyleSheet, Image, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import Welcome from '../../components/Welcome';
import Content from '../../components/Categories';
import PopularExams from '../../components/PopularExams';

const { height } = Dimensions.get('window');

const TOP_HEADER_HEIGHT = 0.33 * height;

const HomeScreen = ({ navigation }) => {
  console.log('home screen was rendered');
  return (

    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Welcome />
        <View style={styles.whiteBg}>
          <Content />
          <PopularExams />
        </View>

      </ScrollView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 14,
    backgroundColor: '#f3f3f3'
  },
  whiteBg: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 24,
    marginTop: 10
  },
  menuBtn: {
    width: 38,
    height: 38,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center'

  },
  menuImg: {
    width: 34,
    height: 34,
    borderRadius: 5,
  }
})