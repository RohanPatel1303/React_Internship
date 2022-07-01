import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "../screens/rough";    
import Display from "../screens/display";
    const Stack=createStackNavigator();
    const RootStack=()=>{
        return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown:false, headerStyle:{backgroundColor:"transparent"}}}>
                <Stack.Screen name="Form" component={Form}></Stack.Screen>
                <Stack.Screen name="Display" component={Display}></Stack.Screen>

                </Stack.Navigator>
               

            </NavigationContainer>
        )
    }
    export default RootStack;