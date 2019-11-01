import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

function Component5({navigation}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      setUsers(await res.json());
    };
    fetchdata();
  }, []);

  const onPress = item => {
    navigation.navigate('Component7', {item: item});
  };

  return (
    <>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <TouchableHighlight onPress={() => onPress(item)}>
            <View style={styles.row}>
              <Text style={styles.rowText}>
                {item.name}: {item.email}
              </Text>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
}

Component5.navigationOptions = {
  title: 'Component5',
};

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 1,
  },
  rowText: {flex: 1},
});

export default Component5;
