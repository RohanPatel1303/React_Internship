import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "../components/form";
import Display from "../components/display";
import Datastorage from "../components/datafromstorage";
const stack=createStackNavigator();
const Root=()=>{
    return(
        <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown:false, headerStyle:{backgroundColor:"transparent"}}}>
                <stack.Screen name="Form" component={Form}></stack.Screen>
                <stack.Screen name="Display" component={Display}></stack.Screen>
                <stack.Screen name="Datastorage" component={Datastorage}></stack.Screen>
            </stack.Navigator>
        </NavigationContainer>
    )
}
export default Root;