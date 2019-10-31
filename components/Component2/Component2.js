import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

function Component2() {
  const pressed = () => {
    console.log('Area Pressed');
  };
  const onPress2 = () => {
    console.log('Area2 Pressed');
  };

  return (
    <>
      <View style={styles.myView}>
        <Text style={styles.myText}>Hello Brad</Text>
      </View>

      <View style={styles.container}>
        <TouchableHighlight
          style={styles.v1}
          underlayColor="magenta"
          onPress={() => pressed()}>
          <View>
            <Text>View 1</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => onPress2()} style={styles.v2}>
          <View>
            <Text>View 2</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.v3}>
          <Text style={styles.vText}>View 3</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue',
  },
  myText: {
    color: 'white',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 100,
  },
  v1: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  v2: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10,
  },
  v3: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
  },
  vText: {
    color: 'white',
  },
});

export default Component2;
