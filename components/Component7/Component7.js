import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function Component7({navigation}) {
  return (
    <View>
      <Text>{navigation.getParam('item', 'LOL').name}</Text>
    </View>
  );
}

Component7.navigationOptions = {
  title: 'Personal Details',
};

export default Component7;
