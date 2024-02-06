import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompletedTodos from './CompletedTodos';
import StackNavigator from './StackNavigator';
import { Provider } from 'react-redux';
import store from './store';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={StackNavigator} 
          options={{tabBarIcon: ()=> (<AntDesign name="home" size={24} color="black" />)}}
          />
          <Tab.Screen name="CompletedTodos" component={CompletedTodos} 
          options={{tabBarIcon:()=> (<Ionicons name='checkmark-done-circle' size={24} color="black" />)}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
};

export default App;
