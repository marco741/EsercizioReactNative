import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

function Component4() {
  const [users, setUsers] = useState([
    {nome: 'Marco Della Rocca'},
    {nome: 'Paolo Della Rocca'},
    {nome: 'Mamma Della Rocca'},
    {nome: 'Arianna Della Rocca'},
  ]);

  return (
    <FlatList
      data={users}
      renderItem={({item}) => (
        <View style={styles.row}>
          <Text style={styles.rowText}>{item.nome}</Text>
        </View>
      )}
    />
  );
}

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

export default Component4;
