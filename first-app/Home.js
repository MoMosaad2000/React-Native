// Home.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { addTodo, completeTodo, deleteTodo } from './todoSlice';

const Home = ({ navigation }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const handleAddTodo = () => {
    if (todos.some((todo) => todo.title === title && todo.description === description)) {
      Alert.alert('Todo Already Exists');
      return;
    }
    if (title && description) {
      dispatch(addTodo({
        id: todos.length + 1,
        title,
        description,
        completed: false,
      }));
      setTitle('');
      setDescription('');
    }
  };

  const handleCompletedTodo = (id) => {
    dispatch(completeTodo({ id }));
    const todo = todos.find((todo) => todo.id === id);
    const message = todo.completed ? 'Todo is completed' : 'Todo is not completed';
    Alert.alert('Todo Status', message);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
        onPress={() => navigation.navigate('DetailsTodo', { todo: item })}
      >
        <Text style={{ flex: 1, fontWeight: 'bold', textDecorationLine: item.completed ? 'line-through' : 'none' }}>
          {item.title}
        </Text>
        <Text style={{ flex: 1, marginLeft: 10, textDecorationLine: item.completed ? 'line-through' : 'none' }}>
          {item.description}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingRight: 10, paddingLeft: 20 }} onPress={() => handleCompletedTodo(item.id)}>
        <Ionicons
          name={item.completed ? 'checkmark-done-circle' : 'checkmark-circle-outline'}
          size={24}
          color={item.completed ? 'green' : 'gray'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteTodo(item.id)} style={{ paddingRight: 10, paddingLeft: 10 }}>
        <Ionicons name="trash-bin-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO APP</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
        <Text>Add</Text>
      </TouchableOpacity>
      <FlatList data={todos} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '75%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  button: {
    height: 40,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    width: '50%',
    marginBottom: 12,
    borderRadius: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
  },
});

export default Home;
