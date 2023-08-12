import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { getAsyncStorageData } from '../src/utils/helpers';
import { ACCESS_TOKEN } from '../src/common/constants';
import axios from 'axios';

const S10 = ({ navigation }) => {
  const [progress, setProgress] = useState(0.2);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dob, setDob] = useState(null);
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  const handleDayChange = (text) => {
    if (/^\d{0,2}$/.test(text) && parseInt(text, 10) <= 31) {
      setDay(text);
    }
  };

  const handleMonthChange = (text) => {
    if (/^\d{0,2}$/.test(text) && parseInt(text, 10) <= 12) {
      setMonth(text);
    }
  };

  const handleYearChange = (text) => {
    if (/^\d{0,4}$/.test(text)) {
      setYear(text);
    }
  };

  const handleEnterPress = async () => {
    let t = await getAsyncStorageData(ACCESS_TOKEN);
    setToken(t);

    console.log(token, 'access_token');

    if (!dob) {
      Alert.alert('Please fill in the form!');
      return;
    }

    axios.post(
      'http://43.205.239.3:3001/api/v1/register/user-data',
      { dob },
      {
        headers: {
          Authorization: `Bearer ${t}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      setData(response.data);
      Alert.alert(response?.data?.message);
      navigation.navigate('s11');
    })
    .catch((error) => {
      Alert.alert('Sorry,', 'Error fetching data: ' + error.message);
      console.error('Error fetching data:', error);
    });
  };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.seekbarView}>
          <View style={styles.whiteFill} />
          <View style={[styles.redFill, { width: `${progress * 50}%` }]} />
        </View>
        <Text style={[styles.nameText, styles.nametextMargin]}>
          What's your
        </Text>
        <Text style={styles.nameText}>birthday?</Text>
        <Image
          style={[styles.s9BirthdayChild, styles.vectorIcon1Layout]}
          resizeMode="cover"
          source={require('../assets/group-4.png')}
        />
        <View style={styles.inputFieldContainer}>
          <View style={[styles.inputField, styles.dateInput]}>
            <TextInput
              style={styles.inputText}
              value={day}
              onChangeText={handleDayChange}
              placeholder="dd"
              placeholderTextColor="white"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.dateSeparator}> / </Text>
          <View style={[styles.inputField, styles.dateInput]}>
            <TextInput
              style={styles.inputText}
              value={month}
              onChangeText={handleMonthChange}
              placeholder="mm"
              placeholderTextColor="white"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.dateSeparator}> / </Text>
          <View style={[styles.inputField, styles.dateInput]}>
            <TextInput
              style={styles.inputText}
              value={year}
              onChangeText={handleYearChange}
              placeholder="yyyy"
              placeholderTextColor="white"
              keyboardType="numeric"
            />
          </View>
          <Pressable
            style={[styles.wrapper, styles.wrapperLayout]}
            onPress={handleEnterPress}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector-899.png")}
            />
          </Pressable>
        </View>
        <Text style={styles.smallText}>
          This is how your birthday will appear on your profile
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight || "10%",
    padding: 45,
  },
  seekbarView: {
    height: 30,
    width: "108%",
    backgroundColor: "white",
    borderRadius: 30,
    overflow: "hidden",
    alignSelf: "center",
  },
  whiteFill: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: "50%",
  },
  redFill: {
    height: "70%",
    backgroundColor: "#DA4949",
    position: "absolute",
    left: 5,
    top: 5,
    bottom: 5,
    borderRadius: 15,
  },
  nameText: {
    color: "white",
    fontSize: 30,
    alignSelf: "flex-start",
  },
  nametextMargin: {
    marginTop: "20%",
  },
  inputFieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "20%",
  },
  inputField: {
    height: 40,
    width: 40,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    color: "#F5C348",
    fontSize: 18,
  },
  dateInput: {
    marginRight: 5,
    marginLeft: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#F5C348",
  },
  dateSeparator: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 5,
  },
  arrowButton: {
    paddingLeft: 40,
  },
  smallText: {
    fontSize: 15,
    color: "#FFFFFF",
    marginTop: 25,
  },
});

export default S10;
