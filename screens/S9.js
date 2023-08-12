import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { getAsyncStorageData } from "../src/utils/helpers";
import { ACCESS_TOKEN } from "../src/common/constants";
import axios from "axios";

const S9 = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  const [progress, setProgress] = useState(0.2); // Initial progress value (0 to 1)

  const handleEnterPress = async (text) => {
    let t = await getAsyncStorageData(ACCESS_TOKEN);
    setToken(t);

    console.log(token, "access_token");
    if (!name) {
      Alert.alert("Please fill in the form!");
    }

    axios
      .post(
        "http://192.168.1.15:3001/api/v1/register/user-data",
        {
          name,
        },
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
        navigation.navigate("s10");
      })
      .catch((error) => {
        
        console.error("Error fetching data:", error);
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
        <Text style={styles.nameText}>name?</Text>
        <View style={styles.inputFieldContainer}>
          <TextInput
            style={styles.inputField}
            value={name}
            onChangeText={(n) => setName(n)}
            placeholderTextColor="white"
            onSubmitEditing={handleEnterPress}

            // You can add additional props like keyboardType, maxLength, etc. as needed
          />

          <Pressable
            style={[styles.wrapper, styles.wrapperLayout]}
            onPress={handleEnterPress}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/vector-897.png")}
            />
          </Pressable>
        </View>
        <Text style={styles.smallText}>
          This is how your name will appear on your profile
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight || "10%", // Add 10% gap
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
    backgroundColor: "red",
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
    borderBottomColor: "#F5C348",
    borderBottomWidth: 1,
  },
  inputField: {
    height: 40,
    flex: 1,
    color: "white",
    fontSize: 18, // Adjust the font size here
  },
  arrowButton: {
    marginLeft: 10,
  },
  smallText: {
    fontSize: 15,
    color: "#FFFFFF",
    marginTop: 25,
  },
});

export default S9;
