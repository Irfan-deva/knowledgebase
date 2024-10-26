import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { sizes, spacing } from "../constants/Sizes";

const MainHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      {/* <Ionicons name="grid-outline" size={24}></Ionicons> */}
      <Text style={{ fontSize: sizes.h3, fontWeight: '500', color: '#222' }}>UPDATES</Text>
      {/* <Text style={styles.title}>{title}</Text> */}
      <Ionicons name="notifications-outline" size={24}></Ionicons>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.m,
    marginVertical: 8,
  },
  title: {
    color: "000",
    fontSize: sizes.h3,
    fontWeight: '500'
  }
});
