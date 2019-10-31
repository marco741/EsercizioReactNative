import React, {useState} from 'react';
import {Text, View, TextInput, Switch} from 'react-native';

function Component3() {
  const [textValue, setTextValue] = useState('Hello');
  const [switchValue, setSwitchValue] = useState(false);

  const onChangeText = value => {
    setTextValue(value);
  };

  const onSubmit = () => {
    console.log('Submitted');
  };

  const onSwitchChange = value => {
    setSwitchValue(value);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Text"
        value={textValue}
        onChangeText={value => onChangeText(value)}
        onSubmitEditing={onSubmit}
      />
      <Text>{textValue}</Text>
      <Switch
        value={switchValue}
        onValueChange={value => onSwitchChange(value)}
      />
    </View>
  );
}

export default Component3;
