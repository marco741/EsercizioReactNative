import React from 'react';
import {View, Text, Button} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Component7 from './components/Component7/Component7';
import Component6 from './components/Component6/Component6';
import Component5 from './components/Component5/Component5';

const AppNavigator = createStackNavigator(
  {
    Component6: {screen: Component6},
    Component7: {screen: Component7},
    Component5: {screen: Component5},
  },
  {
    initialRouteName: 'Component5',
  },
);

const App = createAppContainer(AppNavigator);

// const App = () => {
//   return (
//     <View>
//       <Text>ciao</Text>
//     </View>
//   );
// };

export default App;
