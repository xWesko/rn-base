import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

const Home = ({ navigation }) => {

  return (
    <View>
      <TouchableHighlight
        onPress={() => navigation.navigate('radio')}
        style={{ backgroundColor: '#999', width: 100 }}
      >
        <Text>Radio</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Home