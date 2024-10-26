import React from 'react';
import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import Screen from "../screens/Screen"
import { router } from 'expo-router';
const Quizes = ({ navigation }) => {
  const { titles } = useSelector((state) => state.quizTitles)
  console.log('====================================');
  console.log(titles);
  console.log('====================================');
  return (
    <Screen >
      <FlatList
        data={titles}
        renderItem={({ item, key }) => {
          return <Pressable key={item.id}
            onPress={() => router.push('quiz/QuestionScreen', { cat: item.cat })}
          >
            <Text
              style={{ backgroundColor: 'green', padding: 10, borderRadius: 40, color: '#fff', margin: 4 }}

            >{item.title}</Text></Pressable>
        }} />
    </Screen>
  );
}

const styles = StyleSheet.create({})

export default Quizes;
