// Todos.js
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Todo from './todo';

const Todos = ({ navigation }) => {
  const todos = useSelector((state) => state.todos.todos);

  const renderItem = ({ item }) => <Todo todo={item} navigation={navigation} />;

  return <FlatList data={todos} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />;
};

export default Todos;
