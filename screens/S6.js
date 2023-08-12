import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { getAsyncStorageData } from '../src/utils/helpers';
import { ACCESS_TOKEN } from '../src/common/constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const S6 = ({ navigation }) => {
  const [isNameFocused, setNameFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isDOBFocused, setDOBFocused] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDOB] = useState('');
  const [token, setToken] = useState('');
  const [buttonText, setButtonText] = useState("Let's go!");

  const handleNameFocus = () => setNameFocused(true);
  const handleNameBlur = () => setNameFocused(false);
  const handleEmailFocus = () => setEmailFocused(true);
  const handleEmailBlur = () => setEmailFocused(false);
  const handleDOBFocus = () => setDOBFocused(true);
  const handleDOBBlur = () => setDOBFocused(false);

  const handleButtonPress = () => {
    console.log("Let's go button pressed!");
    // Add your logic here for handling button press
  };

  const handleNameChange = (text) => {
    setNameInput(text);
    setButtonText(text.trim() === '' ? "Let's go!" : `Let's go, ${text}!`);
  };

  const handleEnterPress = async () => {
    const t = await getAsyncStorageData(ACCESS_TOKEN);
    setToken(t);

    if (!nameInput || !email || !dob) {
      Alert.alert('Please fill in the form!');
    } else {
      axios
        .post(
          'http://43.205.239.3:3001/api/v1/register/user-data',
          {
            name: nameInput,
            email,
            dob,
          },
          {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          },
        )
        .then((response) => {
          console.log(response.data);
          // setData(response.data); // Assuming you have a 'setData' function
          Alert.alert(response?.data?.message);
          navigation.navigate('s8');
        })
        .catch((error) => {
          Alert.alert('Sorry, something went wrong');
          console.error('Error fetching data:', error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.infobutton}>
          <View style={[styles.inputContainer, isNameFocused && styles.focused]}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="grey"
              onFocus={handleNameFocus}
              onBlur={handleNameBlur}
              onChangeText={handleNameChange}
            />
          </View>
          <View style={[styles.inputContainer, isEmailFocused && styles.focused]}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="grey"
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              onChangeText={setEmail}
            />
          </View>
          <View style={[styles.inputContainer, isDOBFocused && styles.focused]}>
            <TextInput
              style={styles.input}
              placeholder="DOB"
              placeholderTextColor="grey"
              onFocus={handleDOBFocus}
              onBlur={handleDOBBlur}
              keyboardType="numeric"
              maxLength={10}
              onChangeText={setDOB}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleEnterPress} activeOpacity={0.8}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>DatePe</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9533',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 2,
    backgroundColor: 'black',
    borderTopLeftRadius: windowWidth * 0.4,
    borderTopRightRadius: windowWidth * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperText: {
    fontSize: windowHeight * 0.035,
    color: 'white',
    marginTop: windowHeight * 0.2,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: windowHeight * 0.01,
    paddingHorizontal: windowWidth * 0.1,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: windowHeight * 0.04,
  },
  buttonText: {
    fontSize: windowHeight * 0.03,
    color: 'black',
  },
  infobutton: {
    paddingTop: windowHeight * 0.15,
    height: windowHeight * 0.35,
    width: '100%',
    backgroundColor: '#FF9533',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    height: windowHeight * 0.07,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 20,
    paddingHorizontal: windowWidth * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    flexDirection: 'row',
    paddingLeft: windowWidth * 0.025,
  },
  input: {
    flex: 1,
    fontSize: windowHeight * 0.02,
  },
  focused: {
    borderColor: 'blue',
  },
});

export default S6;
