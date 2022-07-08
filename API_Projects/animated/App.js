import React, { useState } from "react";
import { Text,View,FlatList, TouchableOpacity } from "react-native";
function App(){
  const [data,setdata]=useState([]);
  const [count,setcount]=useState(1);
const apicall=()=>{
  fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-06-07&sortBy=publishedAt&apiKey=99731059322d48a2b4d10249e9c97472").then((response)=>response.json()).then((json)=>{
    setdata(json.articles)
    console.log(data);

  }).catch((err)=>console.log(err))
}
const render=({item})=>(
  <View>
    <Text>{item.title}</Text>
    <Text>{item.Description}</Text>
    <Text>{item.urlToImage}</Text>


    <Text>------------</Text>
  
  </View>
)
  return(
    <TouchableOpacity onPress={()=>{apicall()}}>
      <Text>Press Me!</Text>
      <FlatList
      data={data}
      renderItem={render}
      >
  {/* {setcount(count+1)} */}
      </FlatList>
    </TouchableOpacity>
  )
}
export default App;