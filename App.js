import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';

import Lovelist from './components/Lovelist';
import EnteredItem from './components/enteredItem';

export default function App() {
  const [lovelist, updatelovelist] = useState([]);

  function listHandler(goalTitle) {

    updatelovelist(currentlovelist => [...lovelist, { id: Math.random().toString(), value: goalTitle }]);
    setinModal(false);
  };

  const ItemDelete = goalId => {
    return updatelovelist(currentlovelist => {
      return currentlovelist.filter(loveword => loveword.id != goalId)
    });

  };

  const [inModal,setinModal]=useState(false);

  const cancelation =()=>{

    setinModal(false);
  };

  return (

    <View style={styles.root}>
      <Button title='Add new Goal'  onPress={() => setinModal(true)}/> 
      <EnteredItem 
      visibility={inModal}
      senttext={listHandler}
      onCancel={cancelation} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={lovelist}
        renderItem={itemData =>
          <Lovelist
            title={itemData.item.value} 
            id={itemData.item.id} 
            onDelete={ItemDelete} />}>
      </FlatList>
    </View>

  );
}

const styles = StyleSheet.create({

  root: {
    padding: 50
  },
});
