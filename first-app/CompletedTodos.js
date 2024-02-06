// CompletedTasks.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CompletedTasks = () => {
  const completedTodos = useSelector((state) => state.todos.completedTodos);

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Todos</Text>
      <FlatList
        data={completedTodos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  todoItem: {
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'lightblue',
    backgroundColor:'white',
  },
});

export default CompletedTasks;
