import React from 'react'
import { Text, TouchableHighlight, View } from 'react-native'

const Radio = ({navigation}) => {
  return (
<View>
      <TouchableHighlight
        onPress={() => navigation.navigate('home')}
        style={{ backgroundColor: '#999', width: 100 }}
      >
        <Text>Home</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Radio