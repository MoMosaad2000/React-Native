// Todo.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { completeTodo, deleteTodo } from './todoSlice';

const Todo = ({ todo, navigation }) => {
  const dispatch = useDispatch();

  const handleCompletedTodo = () => {
    dispatch(completeTodo({ id: todo.id }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  return (
    <View style={styles.todoItem}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => navigation.navigate('DetailsTodo', { todo })}
      >
        <Text style={{ fontWeight: 'bold', textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </Text>
        <Text style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>{todo.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingRight: 10, paddingLeft: 20 }} onPress={handleCompletedTodo}>
        <Ionicons
          name={todo.completed ? 'checkmark-done-circle' : 'checkmark-circle-outline'}
          size={24}
          color={todo.completed ? 'green' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeleteTodo} style={{ paddingRight: 10, paddingLeft: 10 }}>
        <Ionicons name="trash-bin-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    width:'50%',
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Todo;
