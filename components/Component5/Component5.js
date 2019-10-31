import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet, Button} from 'react-native';

function Component5({navigation}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      setUsers(await res.json());
    };
    fetchdata();
  }, []);

  return (
    <>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>
              {item.name}: {item.email}
            </Text>
          </View>
        )}
      />
    </>
  );
}

Component5.navigationOptions = () => {
  title: 'Component5';
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
