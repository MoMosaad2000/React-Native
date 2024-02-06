import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Home';
import TodoDetails from './TodoDetails';

 const Stack=createStackNavigator();

 const StackNavigator =()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="DetailsTodo" component={TodoDetails} />

        </Stack.Navigator>
    );
 };
 export default StackNavigator ;