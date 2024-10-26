import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUpdates } from "../store/updatesSlice"
import { SafeAreaView } from 'react-native-safe-area-context'
import MainHeader from '../../components/MainHeader'
import { sizes, spacing } from '../../constants/Sizes'
import { COLORS } from '../../constants'
import { router, useNavigation } from 'expo-router'
// import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
const catData = [
  { id: 1, title: 'Recent' },
  { id: 2, title: 'Results' },
  { id: 3, title: 'Jobs' },
  { id: 4, title: 'Exams' },
  { id: 5, title: 'Featured' },

]

const Updates = () => {
  const dispatch = useDispatch()

  const { updates, status, error } = useSelector(state => state.updates)
  const [selectedCat, setSelectedCat] = useState(1)


  // const translateY = useSharedValue(0);
  const navigation = useNavigation();

  // const scrollHandler = (event) => {
  //   console.log('====================================');
  //   console.log(translateY.value);
  //   console.log('====================================');
  //   if (event.nativeEvent.contentOffset.y > 100) {
  //     translateY.value = withTiming(200, { duration: 300 });
  //   } else {
  //     translateY.value = withTiming(0, { duration: 300 });
  //   }
  // }

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [{ translateY: translateY.value }],
  //     backgroundColor: 'red'
  //   };
  // });
  // useEffect(() => {
  //   console.log("working..");
  //   navigation.setOptions({
  //     // tabBarStyle: animatedStyle,
  //   });
  // }, [animatedStyle, navigation]);



  useEffect(() => {
    if (status === 'idle')
      dispatch(fetchUpdates())

  }, [status, dispatch]);

  if (status === 'loading')
    return <ActivityIndicator size="large" color="#000" style={styles.container} />
  if (status === 'error')
    return <Text>Error occured</Text>
  return <SafeAreaView style={styles.container}
    edges={["left", "right", "top"]}>
    <MainHeader title='Updates' />
    <View style={styles.catContainer}>
      <FlatList
        horizontal
        data={catData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ columnGap: spacing.m }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <TouchableOpacity style={styles.catButton(item.id, selectedCat)}
          onPress={() => setSelectedCat(item.id)}
        >
          <Text style={styles.catButtonText(item.id, selectedCat)}>{item.title}</Text>
        </TouchableOpacity>

        }

      />
    </View >
    <View style={styles.updatesContainer}>
      <FlatList
        data={updates.services}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ rowGap: spacing.s, paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.updateItem}
            onPress={() => router.push(`/updateDetails/${item.id}`)}
          >
            <View style={{ flex: 1 }}>
              <Text numberOfLines={3} ellipsizeMode='tail' style={styles.title}>{item.title}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#222', fontSize: 14, marginTop: 8, fontWeight: '300' }}>{`${item.cat} - `}</Text>
                <Text style={{ color: '#222', fontSize: 14, marginTop: 8, fontWeight: '300' }}>{getDisplayTime(calculateTimePassed(item.updated_at))}</Text>
              </View>
            </View>

            <Image style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 4 }} source={require('../../assets/images/eScholarship.jpg')} />
          </TouchableOpacity>

        }
      // onScroll={scrollHandler}
      // scrollEventThrottle={16}
      />
    </View>
  </SafeAreaView>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    color: 'gray',
    padding: 3,


  },
  title: {
    fontSize: sizes.text,
    fontWeight: '500',
    color: "#333",
    flex: 1,
    lineHeight: 24

  },
  catButton: (item, selectedCat) => ({
    backgroundColor: selectedCat === item ? '#000' : '#f3f5f7',
    borderRadius: 4,
    padding: spacing.s,
  }),
  catButtonText: (item, selectedCat) => ({
    color: selectedCat === item ? '#fff' : '#333',
  }),
  catContainer: {
    paddingHorizontal: spacing.m,
    marginVertical: spacing.l
  },
  updateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: Colors.light.background,
    // padding: spacing.s,
    paddingVertical: spacing.m,
    // bordf9f9ttomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#f9f9f9",
    gap: 10

  },
  updatesContainer: {
    flex: 1,
    paddingHorizontal: spacing.m,
    // paddingBottom: 100
  }

})
export default Updates
const getMonth = (monthNumber) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[monthNumber]
}
const formatDate = (timestamp) => {
  // Parse the timestamp to a Date object
  const date = new Date(timestamp);

  // Extract the date, month, and year
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-based in JavaScript
  const year = date.getFullYear();

  // Format the date as DD-MM-YYYY
  return `${day}-${getMonth(month)}-${year}`;
};

const calculateTimePassed = (timestamp) => {
  const givenDate = new Date(timestamp);
  const currentDate = new Date();

  const differenceInMilliseconds = currentDate - givenDate;
  console.log(differenceInMilliseconds, "differenceInMilliseconds...........")

  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInMonths = Math.floor(differenceInDays / 30);
  const differenceInYears = Math.floor(differenceInDays / 365);

  return {
    years: differenceInYears,
    months: differenceInMonths % 12,
    days: differenceInDays % 30,
    hours: differenceInHours % 24,
    minutes: differenceInMinutes % 60,
    seconds: differenceInSeconds % 60
  };
};

const getDisplayTime = (timePassed) => {
  if (timePassed.years > 0) {
    return `${timePassed.years} years`;
  } else if (timePassed.months > 0) {
    return `${timePassed.months} months`;
  } else if (timePassed.days > 0) {
    return `${timePassed.days} days`;
  } else if (timePassed.hours > 0) {
    return `${timePassed.hours} hours`;
  } else if (timePassed.minutes > 0) {
    return `${timePassed.minutes} minutes`;
  } else {
    return `${timePassed.seconds} seconds`;
  }
};