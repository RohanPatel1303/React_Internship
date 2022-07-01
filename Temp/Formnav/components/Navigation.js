import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View,Text,ScrollView } from "react-native";
import Form from "../rough";

const Home=()=>{
return(
    <ScrollView style={[styles.container]}>
            <View style={[styles.cust]}>

            </View>
            <View style={[styles.border, styles.rounded]}>
                <Text style={[styles.title]} >REGESTRATION</Text>
                <View style={[styles.inputs]}>
                    <View style={styles.inp_title_block}>

                        <TextInput placeholder="Firstname" style={[styles.input]} defaultValue={name} onChangeText={newtext=>setname(newtext)} ></TextInput>
                            {/* <Text>{name}</Text> */}

                    </View>
                    <View style={styles.inp_title_block}>

                        <TextInput keyboardType="default" placeholder="Lastname" style={[styles.input]}></TextInput>


                    </View>
                    <View style={styles.inp_title_block}>

                        <TextInput keyboardType="email-address" placeholder="Email" style={[styles.input]}></TextInput>



                    </View>

                    <View style={{ marginTop: 30, width: "100%", marginRight: 4, marginLeft: 4, alignItems: "center" }}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Display')} style={[styles.button]} >

                            <Text   style={{ textAlign: "center" }} >Click</Text>
                        </TouchableOpacity>

                        <View>
                            <View style={[styles.clickandcheck]}>
                                <CheckBox tintColor="#000000" onFillColor="#000000" style={{ marginLeft: -30 }}
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    tintColors={{ true: '#000000', false: '#d4d4d4' }}
                                />
                                <Text style={styles.checkboxtitle}>
                                    I Agree
                                </Text>
                            </View>
                            <View style={[styles.clickandcheck]}>
                                <CheckBox tintColor="#000000" onFillColor="#000000" style={{ marginLeft: -30 }}
                                    disabled={false}
                                    value={toggleCheckBox1}
                                    onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                                    tintColors={{ true: '#00ff00', false: '#d4d4d4' }}
                                />
                                <Text style={styles.checkboxtitle}>
                                    Keep Me Logged In
                                </Text>
                            </View>
                            <View style={[styles.clickandcheck]}>
                                <CheckBox tintColor="#000000" onFillColor="#000000" style={{ marginLeft: -30 }}
                                    disabled={false}
                                    value={toggleforupdates}
                                    onValueChange={(newValue) => settoggleforupdates(newValue)}
                                    tintColors={{ true: '#ff0000', false: '#d4d4d4' }}
                                />
                                <Text style={styles.checkboxtitle}>
                                    Receive Updates!!
                                </Text>
                            </View>


                        </View>




                    </View>





                </View>
            </View>
        </ScrollView>
)
}
const Display=(navigation)=>{
    return(
        <View>
            <Text>hello</Text>
        </View>
    )
}
const Stack = createStackNavigator();
const Nav=()=>{
    <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home"> */}
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        {/* <Stack.Screen name="display" component={Display}></Stack.Screen> */}

        {/* </Stack.Navigator> */}
    </NavigationContainer>
}
export default Nav;