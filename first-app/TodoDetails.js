
import React from 'react';
import { View, Text ,StyleSheet } from 'react-native';

const TodoDetailsScreen = ({ route }) => {
  const { todo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO Details</Text>
      <Text>Title: {todo.title}</Text>
      <Text>Description: {todo.description}</Text>
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
});

export default TodoDetailsScreen;
