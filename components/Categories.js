import { Dimensions, FlatList, Image, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const { width } = Dimensions.get('screen')
const CARD_SIZE = .70 * width;
import AppText from './AppText';
import React from 'react'
import { COLORS, SIZES, SPACING, icons } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { bookSlider } from '../data/listdata'
const Categories = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.cat}>General Books</AppText>
        <TouchableOpacity><AppText style={{ color: "#4d4dff", fontSize: 12, fontWeight: 800 }}>View all</AppText></TouchableOpacity>
      </View>

      <FlatList
        data={bookSlider}
        horizontal={true}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SPACING / 2 }}
        renderItem={({ item, index }) =>
          <TouchableOpacity
            activeOpacity={.6}
            style={styles.card}
            // onPress={() => navigation.navigate(item.link, { cat: item.cat })}
            onPress={() => navigation.navigate('Quizes')}
          >
            <View style={{ backgroundColor: COLORS.white, padding: 8, borderRadius: 8, width: 52 }}><Image source={item.img} style={styles.img} /></View>
            <AppText style={{ marginTop: 4, fontWeight: 700, fontSize: 14, color: COLORS.secondary }}>{item.name}</AppText>

            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 8, marginTop: 8 }}>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, backgroundColor: '#00669910', paddingHorizontal: 3, paddingVertical: 2, borderRadius: 4 }}>
                <MaterialIcons name="auto-stories" size={12} color="#006699" />
                <AppText style={{ fontSize: 10, fontWeight: 700, color: '#006699' }}>489 Qns.</AppText>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, backgroundColor: '#00b30010', paddingHorizontal: 3, paddingVertical: 2, borderRadius: 4 }}>
                <MaterialIcons name="list-alt" size={12} color="#00b300" />
                <AppText style={{ fontSize: 10, fontWeight: 700, color: '#00b300' }}>100 MCQs.</AppText>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2, backgroundColor: '#ff006610', paddingHorizontal: 3, paddingVertical: 2, borderRadius: 4 }}>
                <MaterialIcons name="access-time" size={12} color="#ff0066" />
                <AppText style={{ fontSize: 10, fontWeight: 700, color: '#ff0066' }}>45min.</AppText>
              </View>

            </View>
            <MaterialIcons name="arrow-right-alt" size={24} color={COLORS.secondary} style={{ backgroundColor: COLORS.white, padding: 2, position: 'absolute', right: 8, top: 8, borderRadius: 15 }} />
          </TouchableOpacity>
        }
      />

    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#fff',

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
    marginBottom: 8
  },
  card: {
    width: CARD_SIZE,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    borderWidth: 2,
    borderColor: '#f0f0f5',
    marginRight: 12,

  },
  img: {
    width: 36,
    height: 36
  }
})