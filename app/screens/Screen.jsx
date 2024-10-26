import { Platform, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { COLORS } from "../../constants"

const Screen = ({ children }) => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      {children}
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: COLORS.lightWhite
  }
})