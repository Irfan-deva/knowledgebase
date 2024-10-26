import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
const { width, height } = Dimensions.get('window');
import { setOption } from '../app/store/quizSlice';
import Screen from '../app/screens/Screen';

const OPTON_TITLES = ['A', 'B', 'C', 'D', 'E'];

const Question = ({ question, num }) => {
  const dispatch = useDispatch();
  console.log(`------- q ${num + 1} was rendered -----------`);
  return (
    <Screen>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{`(Q.${num + 1} )  ${question.question}`}</Text>
        <FlatList
          data={question.options}
          renderItem={({ item, index }) =>
            <TouchableOpacity
              style={index === question.selected ? styles.selectedOption : styles.option}
              activeOpacity={.95}
              onPress={() => {
                dispatch(setOption({ option: index, num: num }))
              }}>
              <View style={styles.optionIndex}>
                {
                  index == question.selected ?
                    <AntDesign name="checkcircleo" size={20} color="#336600" /> :
                    <Text style={styles.optionIndexTitle}>{OPTON_TITLES[index]}</Text>
                }
                <Text >{item}</Text>
              </View>

            </TouchableOpacity>}
        />
      </View>
    </Screen>
  )
}

export default memo(Question);

const styles = StyleSheet.create({
  questionContainer: {
    width: width,
    height: height,
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  question: {
    fontSize: SIZES.medium,
    fontWeight: "500",
    marginBottom: 16,
    padding: 10,
    color: COLORS.black
  },
  option: {
    marginVertical: 8,
    width: "95%",
    alignSelf: 'center',
    fontSize: SIZES.large,
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: COLORS.black,
    elevation: 1,
    backgroundColor: COLORS.white,
  },
  selectedOption: {
    marginVertical: 8,
    width: "95%",
    alignSelf: 'center',
    fontSize: SIZES.large,
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: COLORS.black,
    elevation: 1,
    backgroundColor: "#e6ffe6",
  },
  optionIndex: {
    flexDirection: 'row',
    gap: 12,
  },
  optionIndexTitle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: COLORS.gray,
    color: COLORS.gray,
    borderRadius: 10,
    textAlign: 'center'
  },

})