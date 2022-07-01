import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Form from "./form";
const Datastorage = ({ route, navigation }) => {

    const receiveddata = route.params;
    const data = receiveddata.list;
    //  const type=typeof(data);
    //  console.log(typeof(data));
    //  console.log("hgeyauh")
    Object.keys(data).map(function (key, index) {
        // console.log(data[key]);

    })
    // console.log(data);
    return (

        <ScrollView>
            <View>



                {/* {data} */}
                {/* Object.keys(data) */}
                {Object.keys(data).map(function (key, index) {
                    // return(
                    //     <Text>Data:{key}{JSON.stringify(data[key])}</Text>
                    // )
                    const variable = data[key];
                    var arrayfinal = [];

                    // console.log(data[key]);
                    console.log(variable)

                    Object.keys(variable).map(function (k) {
                        var name = JSON.stringify(variable[k])
                        console.log(name)
                        arrayfinal.push(name);

                    })
                    console.log(typeof (arrayfinal))
                    const keys = Object.keys(arrayfinal);

                    console.log(keys)
                    return (
                        <View style={{ marginBottom: 10, alignItems: "center" }}>

                            <Text style={{fontWeight:"bold"}}>Name:{arrayfinal[0]}</Text>
                            <Text style={{fontWeight:"bold"}}>Lastname{arrayfinal[1]}</Text>
                            <Text style={{fontWeight:"bold"}}>Email:{arrayfinal[2]}</Text>
                            <Text style={{fontWeight:"bold"}}>Agreed:{arrayfinal[3]}</Text>
                            <Text style={{fontWeight:"bold"}}>Keep Me Logged In:{arrayfinal[4]}</Text>
                            <Text style={{fontWeight:"bold"}}>Receive Updates:{arrayfinal[5]}</Text>





                        </View>

                    )

                })}


            </View>
        </ScrollView>
    )
    const styles = StyleSheet.create({
        title: {
            font
        }
    })
}
export default Datastorage;