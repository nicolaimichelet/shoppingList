import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] =useState([
    {id: '1', text: 'Avocado'},
    {id: '2', text: 'Milk'},
    {id: '3', text: 'Bread'},
    {id: '4', text: 'Eggs'},
  ])

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });

  }

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    } else {
      setItems(prevItems => {
        return [{id: '5', text}, ...prevItems];
      })
    }   
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem} />
      <FlatList data={items} 
                renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem} />
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  }
})

export default App;