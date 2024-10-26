import React from 'react'
import {
  StyleSheet, View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { COLORS, SPACING, } from '../constants';
import AppText from './AppText';
import { popularListData } from '../data/listdata'

const { width, height } = Dimensions.get('window');

const PopularExams = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.cat}>Popular Exams</AppText>
        <TouchableOpacity><AppText style={{ color: "#4d4dff", fontSize: 12, fontWeight: 800 }}>View all</AppText></TouchableOpacity>
      </View>
      {
        popularListData.map((item, index) => {
          return <View style={styles.card} key={index}>
            <View style={{ backgroundColor: COLORS.white, padding: 8, borderRadius: 8 }}><Image source={item.img} style={styles.img} /></View>
            <View style={{ flexDirection: 'column', gap: 4 }}>
              <AppText style={{ fontSize: 14, fontWeight: 700, color: COLORS.secondary }}>{item.name}</AppText>

              <View style={{ flexDirection: 'row', gap: 8 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, backgroundColor: '#00669910', paddingHorizontal: 3, paddingVertical: 2, borderRadius: 4 }}>
                  <MaterialIcons name="auto-stories" size={12} color="#006699" />
                  <AppText style={{ fontSize: 10, fontWeight: 700, color: '#006699' }}>489 Qns.</AppText>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, backgroundColor: '#00b30010', paddingHorizontal: 3, paddingVertical: 2, borderRadius: 4 }}>
                  <MaterialIcons name="list-alt" size={12} color="#00b300" />
                  <AppText style={{ fontSize: 10, fontWeight: 700, color: '#00b300' }}>100 MCQs.</AppText>
                </View>
              </View>
            </View>
            <MaterialIcons name="arrow-right-alt" size={24} color={COLORS.secondary} style={{ backgroundColor: COLORS.white, padding: 2, position: 'absolute', right: 8, borderRadius: 15 }} />
          </View>
        })
      }

    </View>
  )
}

export default PopularExams

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  header: {
    width: width - SPACING,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center'

  },
  cat: {
    fontWeight: 700,
    color: COLORS.primary,
    marginBottom: 8,

  },
  card: {
    width: width - SPACING,
    padding: 8,
    borderWidth: 2,
    borderColor: '#f0f0f5',
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    alignSelf: 'center'
  },
  img: {
    width: 36,
    height: 36
  }
})