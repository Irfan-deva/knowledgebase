
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import Question from '../../components/Question';
import { COLORS } from '../../constants';
import { useSelector } from 'react-redux';


const { width, height } = Dimensions.get('window');
const QuestionScreen = ({ route }) => {
  const questions = useSelector((state) => state.quiz)

  console.log('====================================');
  console.log('qscreen was rendered');
  console.log('====================================');

  const [isActive, setIsActive] = useState(false);
  // const { cat } = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        horizontal
        pagingEnabled
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <Question question={item} num={index} />
        }
      />
      {isActive && <View style={styles.bottomSheet}>
        {
          questions.map((q, ind) => {

            return <View key={ind}
              style={q.selected != -1 ? styles.green : styles.gray}>
              <Text>{q.id}</Text>
            </View>
          })
        }
      </View>}
      <TouchableOpacity
        activeOpacity={.8}
        onPress={() =>
          setIsActive(!isActive)}
        style={styles.toggle}>
        <AntDesign name="menuunfold" size={24} color="white" />
      </TouchableOpacity>
    </View >
  )
}

export default QuestionScreen

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  bottomSheet: {
    width: '100%',
    height: height * .9,
    backgroundColor: COLORS.lightWhite,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 30,
    flexWrap: 'wrap'
  },
  toggle: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#39e600',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    zIndex: 99,
    elevation: 1
  },
  toggleText: {
    padding: 10,
    borderRadius: 20,
    color: 'white'
  },
  green: {
    backgroundColor: '#33CC00',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gray: {
    backgroundColor: COLORS.gray2,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }

})