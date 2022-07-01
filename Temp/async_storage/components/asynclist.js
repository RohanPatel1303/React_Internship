import React from "react";
import { useState,useEffect } from "react";
import { View,Text } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const listasync=()=>{
const [name,setname]=useState("");
const [storagedatalist,setstoragedatalist]=useState([]);
useEffect(()=>{
    async function tempfunction(){
        await getitemlist();
    }
    return()=>{};
},[])
const addItemtolist=async()=>{
    try {
        storagedatalist.push(name);
        console.log(storagedatalist)
        const output=JSON.stringify(storagedatalist);
        await AsyncStorage.setItem('itemlist',output);
        setname("");
    } catch (err) {
        console.log(err);
    }
};
const getitemlist=async()=>{
    try {
        const data = await AsyncStorage.getItem('itemlist');
        const output =JSON.parse(data)
        setstoragedatalist(data);
    } catch (err) {
        console.log(err);
    }
};
    return(
        <View>
            <TextInput 
           
            placeholder="hello"
            value={name}
            // onChange={Text=>setname(Text)}
            onChangeText={text=>setname(text)}
            

            ></TextInput>
            <Text>{name}</Text>
            <TouchableOpacity onPress={addItemtolist} style={{backgroundColor:"black"}}>
                <Text>Hello</Text>
            </TouchableOpacity>
            <Text></Text>
            {storagedatalist.map()}

            {storagedatalist.map((item,index)=>{
                return(
                    <Text>{item}</Text>
                )
            })}
            
        </View>
    )
}
export default listasync;