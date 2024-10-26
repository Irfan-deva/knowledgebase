import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
import { selectUpdateById } from '../store/updatesSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SIZES, SPACING } from '../../constants';
import { COLORS } from '../../constants';

const UpdateDetails = () => {
  const { id } = useLocalSearchParams();
  const update = useSelector(state => {
    console.log(state.updates.updates.services);
    return selectUpdateById(state.updates.updates.services, id)
  })

  return (
    <SafeAreaView style={{ backgroundColor: Colors.light.background, flex: 1, }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Image style={{ width: '100%', height: SIZES.height * .30, resizeMode: 'cover' }} source={require('../../assets/images/eScholarship.jpg')} />
        <Text style={{ marginTop: SPACING.s, paddingHorizontal: SPACING.m, fontSize: SIZES.text, lineHeight: 32, letterSpacing: .3, color: '#111' }}>{update.desc}</Text>
        <Text style={{ marginTop: SPACING.m, paddingHorizontal: SPACING.m, fontSize: SIZES.text, lineHeight: 32, letterSpacing: .3, color: '#111' }}>{update.desc}</Text>
        <Text style={{ marginTop: SPACING.m, paddingHorizontal: SPACING.m, fontSize: SIZES.text, lineHeight: 32, letterSpacing: .3, color: '#111' }}>{update.desc}</Text>
        <Text style={{ marginTop: SPACING.m, paddingHorizontal: SPACING.m, fontSize: SIZES.text, lineHeight: 32, letterSpacing: .3, color: '#111' }}>{update.desc}</Text>
        <Text style={{ marginTop: SPACING.m, paddingHorizontal: SPACING.m, fontSize: SIZES.text, lineHeight: 32, letterSpacing: .3, color: '#111' }}>{update.desc}</Text>
        <Text style={{ marginTop: SPACING.m, paddingHorizontal: SPACING.m, fontSize: SIZES.text, lineHeight: 32, letterSpacing: .3, color: '#111', }}>{update.desc}</Text>
      </ScrollView>

    </SafeAreaView>
  )
}

export default UpdateDetails

const styles = StyleSheet.create({})