import React, { useState } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { TouchableOpacity } from 'react-native';
//import DropdownComponent from 'react-native-element-dropdown/lib/typescript/components/Dropdown';

const image = { uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBw0HBwcHBwcHBw0HBwcHBw8ICQcNFREWFhURExMYKCggGBoxJxUfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NDw0PDysZFRk3LTc3LTcrLTcrKy03LS0rKy0rKy0tKy0rKysrKysrKystKysrKysrKystLSsrKzctLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAACAQADBAUG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGgEBAQEBAQEBAAAAAAAAAAAAAgEABQMGBP/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A9yHIkhSP1V+2UoUSHIJyrCkSFBr0lWHEkKC9JVhRIUGvSVYUSFBPShRIUYaUKDCiBThQYUQaUOBCjDThQIUQThShKUrDTlLXHq6w4eroa2o2Fo2po2s2LaNrWhahSNaNrWjaxyMw6jE+YhxIUdB+KUpCiQoNekqw4kKCcqwokKDXpKsKJCg16SrCiRYJylCiQozVYcCFEE4UCFEo04sGFEEoUCFKyUpSlCLqCeroausmFraOpqNhalqaNrLi2ja1o2sUjWha1o2oUjaw6zFj5+FEhx0XOlWFEhwacqwokKDXpKsKJCiU5VixosF6SlFiQoNOVYUGFBIosSLGQoUGLGEoUFYiFFFUQtXR1tRMPW0dbWTC1tHU1FwtS0dS1lxbRta0bWWRrQta0bUORdYNZlx40ODDjo1yZVhwYcE5VhRIUSvSVYUSFBOVYsSFEOVYsSEL0lWLEijhyrCglEVYqKiEoqyEwrqIWro62oha2jrajFqaOtrLi6lqalqLjWja1o2sUjWja1o2sUjawazFjzYcGHHScSVYcGHBwpVhRIUE5VixosTDlWFEiwcekqqyocrKywcOVlRRw5VVFRVUVRFXRZmJtHW1mLW0dbUxsXU1NTUXF1LUtS1FxbRtS0bUKRbQta0bWKRtYdZix04cGHHTfPyrDgwohSlCiRYNhyrCiQohyrFiRYOHKsWIqYcqqiicrK0YbDlZUZDlVUZCVkZGVtRNRl1tTU1lXU1NS1FW1LUtS1Fa0bWtG1Cka0bWtG1DkbWHWZXDDgwo6uPmpShRIUEpVhRIUQ5VixosTClWKhDhysrMmHKrMw4cqszIcrMzDhyszImHKrIw4crMiamKupramoq6NraNrEtqWpaNqLIto2taNqE1oWraFqE2smsy60KDDjqvlZShRIUQ5VhRIUHClWLEhIUrKyocrKijhyszMhyqyMmHKqMw4crMyJhyszIOFK2oyJhyslbU1MKVqlrUamFrWpa1G1MLWtG1rRtZdaja1o2tjayhqti65IcGFHTx8tpQ4MKIWlFjRYhSrFaKmHKrMqYUrMyicqKzJhyozMhSszIOHKyMyYcrIyIcrIyVMKVqNWjRw5WqWtRrLrWpalS1C1rRta0bUxda0LVtG1sXW1h1mxtdmHAhx0nzGlDgw4xasKJCiYWrFjRUKVlZkKVmZhw5WZmQ5UZkTClZFQcOVkZEOVkZKmHKw1ko4UrWpWo2thStalrWjamFrWja1qWpi6lo1bRtbC1KNa0bUxtZh1mxdd6HAhx0nzOnCgw4haUKDCiLqwkhNhSszMOFKzMyHKiKiYcrVGQcOVkZEKVkZKmHKw1rUqHK1StRtQpWtS1rRtTCla0bVtG1MLWtG1rRtTF1rRta0bWxda0LVtC1F1tYdZsXXoxyRmdF82cOMyKcKMyEUJmZWZmQolZmSnESownGGqyU4KVmQolFmE4lS1malBtSswnBtG1mQolG1mZRtG1mQhtG1mZRtC1mRR1WZmf/2Q==" };

const data = [
  { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
  { label: 'Gujarat', value: 'Gujarat' },
  { label: 'Karnataka', value: 'Karnataka' },
  { label: 'Odisha', value: 'Odisha' },
  { label: 'Assam', value: 'Assam' },
  { label: 'Rajasthan', value: 'Rajashthan' },
  { label: 'Punjab', value: 'Punjab' },
  { label: 'Kerela', value: 'Kerela' },
];

    function DropdownComponent() {
        const [value, setValue] = useState("");
        const [isFocus, setIsFocus] = useState(true);

        const renderLabel = () => {
            if (value || isFocus) {
                return (
                    <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                        Selected State
                    </Text>
                );
            }
            return null;
        };

        const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [firstnameError, setFirstnameError] = useState("");
  // const [lastnameError, setLastnameError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [value, setValue] = useState(null);


  const handleSubmit = () => {
    // var firstnameValid = false;
    // var lastnameValid = false;
    // var emailValid = false;
    // var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //firstname validation
    // if (firstname.length == 0) {
    //   setFirstnameError("Firstname cannot be empty");
    // }
    // else if (firstname.indexOf(' ') >= 0) {
    //   setFirstnameError("Firstname cannot contain white spaces");
    // }
    // else {
    //   setFirstnameError("")
    //   firstnameValid = true
    // }

    //lastname validation
    // if (lastname.length == 0) {
    //   setLastnameError("Lastname cannot be empty");
    // }
    // else if (lastname.indexOf(' ') >= 0) {
    //   setLastnameError("Lastname cannot contain white spaces");
    // } else {
    //   setLastnameError("");
    //   lastnameValid = true;
    // }

    //email validation
    // if (email.length == 0) {
    //   setEmailError("Email Cannot be Empty");
    // }
    // else if (reg.test(email) != true) {
    //   setEmailError("Invalid Email");
    // } else {
    //   setEmailError("")
    //   emailValid = true
    // }

    // if (emailValid && firstnameValid && lastnameValid) 
    {
      Alert.alert(`Username: ${firstname} ${lastname} \nEmail: ${email} \n State Residence: ${data}`);
      setEmail("");
      setFirstname("");
      setLastName("");
      setValue("");
    }
  }

        return (
<View style={styles.img}>
  <ImageBackground source={image} resizeMode="cover" style={styles.img}>
    <Text style={styles.text}>Registration Form</Text>

    <View>
         <TextInput 
         style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => setFirstname(text)}
          value={firstname} />

          {/* <View style={{ paddingLeft: 10 }}>
          {firstnameError.length > 0 && <Text style={{
            color: "red",
            fontWeight: "bold",
            fontSize: 12
          }}>{firstnameError}</Text>}
          </View> */}

        <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(lastname) => setLastName(lastname)}
          value={lastname}
        />
        {/* <View style={{ paddingLeft: 10 }}>
          {lastnameError.length > 0 && <Text style={{
            color: "red",
            fontWeight: "bold",
            fontSize: 12
          }}>{lastnameError}</Text>}
        </View> */}

        <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
          value={email}
        />
        {/* <View style={{ paddingLeft: 10 }}>
          {emailError.length > 0 && <Text style={{
            color: "red",
            fontWeight: "bold",
            fontSize: 12
          }}>{emailError}</Text>}
        </View> */}


            <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    statusBarIsTranslucent={true}
                    style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    // search
                    // maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select State' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                        setValue(value);
                        setIsFocus(false);
                    } } />
              </View> 

                  {/* <View style={{alignItems: "center"}}>
                  <Button
                  title="Submit"
                  color="black"
                  onPress={() => Alert.alert('Simple Button Pressed')} 
                  /> */}
            <View>
              <TouchableOpacity style={styles.submitBtn}
              onPress={handleSubmit}>
              <Text style={styles.submitTxt}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
    </View>
   </ImageBackground>
</View>
        );
    }

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'white',
    padding: 10,
  },

  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  icon: {
    marginRight: 5,
  },

  label: {
    //position: 'absolute',
    // backgroundColor: 'white',
    //left: 22,
    //top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },

  placeholderStyle: {
    // fontSize: 16,
    // fontWeight: "bold",
    // borderWidth: 2,
    // borderRadius: 5,
    height: 40,
    marginTop: 20,
    //marginBottom: 20,
    // borderWidth: 2,
    padding: 2,
    // borderRadius: 10,
    fontWeight: "bold"
  },

  selectedTextStyle: {
    fontSize: 16,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  inputSearchStyle: {
    // height: 40,
    fontSize: 16,
    // borderWidth: 2,
    // borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    // borderWidth: 2,
    padding: 10,
    // borderRadius: 10,
    //fontWeight: "bold"
  },

  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#000000a0"
  },

  img: {
    flex: 1,
    justifyContent: "center"
  },

  input: {
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    fontWeight: "bold"
  },

  submitBtn: {
    borderColor: "white",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop:"40%",
    width: '85%',
    marginLeft:"8%",
    borderRadius: 10,
    backgroundColor: "black",
  },

  submitTxt: {
    color: "white",
    fontWeight: "bold",
    alignContent: "center",
    justifyContent: "center"
  }
});