import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function Component6({navigation}) {
  return (
    <View>
      <Text>This is Component6</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Component5');
        }}>
        <Text>go To Component 5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Component7');
        }}>
        <Text>go To Component 7</Text>
      </TouchableOpacity>
    </View>
  );
}

Component6.navigationOptions = {
  title: 'Component6',
};

export default Component6;
