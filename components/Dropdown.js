import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const Dropdown = ({ data, onSelected }) => {
  const [selected, setSelected] = useState(data[0]);
  const [isSelected, setIsSelected] = useState(false);

  return (

    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={.6}
        onPress={() => setIsSelected(!isSelected)}
        style={styles.selector} >
        <Text style={{ color: '#666' }}>{selected}</Text>
        {
          !isSelected ? <MaterialIcons name="keyboard-arrow-down" size={24} color="#8e8e8e" /> :
            <MaterialIcons name="keyboard-arrow-up" size={24} color="#8e8e8e" />
        }
      </TouchableOpacity>

      {
        isSelected && <View style={styles.dropDownArea}>

          {data.map((item, index) => {
            return <TouchableOpacity
              key={index}
              onPress={() => { setSelected(item); setIsSelected(false), onSelected(item) }}
              style={
                { paddingHorizontal: 10, paddingVertical: 8, borderBottomWidth: index == 0 ? .5 : 0, borderColor: '#8e8e8e' }
              }>
              <Text style={{ color: '#666' }}> {item}</Text></TouchableOpacity>
          }

          )}
        </View>
      }
    </View >

  )
}
export default Dropdown

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16
  },

  selector: {
    backgroundColor: '#fff',
    width: '98%',
    height: 52,
    padding: 8,
    borderWidth: .5,
    borderColor: '#8e8e8e',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  dropDownArea: {
    backgroundColor: '#fff',
    borderWidth: .5,
    borderTopWidth: .5,
    borderColor: '#8e8e8e',
    width: '98%',
    borderRadius: 8,
    paddingHorizontal: 0,
    paddingVertical: 8,
    marginTop: 4,
    elevation: 2
  }
})
