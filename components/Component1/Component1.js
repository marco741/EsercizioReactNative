import React from 'react';
import {View, Text} from 'react-native';

function Component1(props) {
  const state = {
    name: 'Brad',
    showName: true,
    message: 'messaggio di stato',
  };

  let name = state.showName ? state.name : 'No name';
  console.log('Ciao');

  return (
    <View>
      <Text>{props.message}</Text>
      <Text>{name}</Text>
    </View>
  );
}

Component1.defaultProps = {
  message: 'Hi there',
};

export default Component1;
