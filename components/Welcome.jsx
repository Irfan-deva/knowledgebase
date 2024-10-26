import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import AppText from './AppText';
import { COLORS } from '../constants';
import { welcomeListData } from '../data/listdata';
import { router } from 'expo-router';
const { width, height } = Dimensions.get('window');

const Welcome = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.welcome}>Welcome</AppText>
      <AppText style={styles.screenTitle}>Dear User </AppText>
      <View style={styles.listContainer}>
        {
          welcomeListData.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity style={styles.btn}
                  activeOpacity={.6}
                  onPress={() => router.push('AddQuestionScreen')}>
                  <View style={styles.iconBg(item.color)}><MaterialIcons name={item.img} size={24} color={item.color} /></View>
                  <AppText style={styles.btnText}>{item.title}</AppText>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </View>

    </View >
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
  },
  listContainer: {
    width,
    marginTop: 0,
    backgroundColor: "#f3f3f3",
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 8
  },
  welcome: {
    fontSize: 16,
    fontWeight: 700,
    marginLeft: 16,
    color: COLORS.primary,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 700,
    marginLeft: 16,
    color: COLORS.primary,
    lineHeight: 24,
    marginBottom: 8
  },
  btn: {
    flexDirection: "row",
    alignItems: 'center',
    width: width / 2 - 16,
    backgroundColor: '#fff',
    padding: 4,
    elevation: 0,
    borderRadius: 8
  },
  iconBg: (color) => ({
    width: 35,
    height: 35,
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: `${color}25`
  }),
  btnText: {
    fontSize: 15,
    fontWeight: 800,
    color: COLORS.secondary,
  }
})