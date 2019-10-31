import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function Component7({navigation}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Component6');
        }}>
        <Text>This is Component7, go to Component 6</Text>
      </TouchableOpacity>
    </View>
  );
}

Component7.navigationOptions = () => {
  title: 'Component7';
};

export default Component7;
