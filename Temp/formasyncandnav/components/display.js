import React from "react";
import { Text,View } from "react-native";
function Display({route,navigation}){
const {name}=route.params;
const {lastname}=route.params;
const {email}=route.params;



    return(
        <View>

            <Text>
                
            Name:{(name)}
            
           
         
            </Text>
            <Text>
            Lastname:{(lastname)}

            </Text>
            <Text>email:{(email)}</Text>
        </View>
    )
}
export default Display;