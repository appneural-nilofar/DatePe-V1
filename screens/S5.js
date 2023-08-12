import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";

const S5 = ({ route, navigation }) => {
  const [otp, setOtp] = useState(null);
  const [data, setData] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);

  useEffect(() => {
    setMobileNo(route?.params?.mobileNo);
  }, []);

  const handleEnterPress = (text) => {
    if (!otp) {
      Alert.alert("Please Enter OTP");
      return;
    }

    axios
      .post("http://43.205.239.3:3001/api/v1/register/verify-otp", {
        otp,
        mobileNo,
      })
      .then(async (response) => {
        setData(response.data);
        await setAsyncStorageData(ACCESS_TOKEN, response?.data?.data?.token);
        Alert.alert(response?.data?.message);
        setTimeout(() => {
          navigation.navigate("s6");
        }, 300);
      })
      .catch((error) => {
        Alert.alert("Sorry, ");
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  const handleInputChange = (text) => {
    setOtp(text);
  };

  return (
    <Pressable
      style={styles.s5EnterOtp}
      onPress={() => {
        // navigation.navigate('s5')
      }}
    >
      <Image
        style={[styles.s5EnterOtpChild, styles.borderPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.s5EnterOtpItem, styles.enterLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.roundbox} />
        <TextInput
          style={[styles.input, styles.buttonText]}
          placeholder="Enter OTP"
          placeholderTextColor="grey"
          keyboardType="numeric"
          maxLength={6}
        />
        {/* "Resend OTP" button */}
        <View style={styles.onlyTextButtonWrapper}>
          <TouchableOpacity
            style={styles.onlyTextButton}
            onPress={() => console.log("Resend OTP Button Pressed")}
          >
            <Text style={styles.innerText}>Resend</Text>
            <Text style={styles.baseText}> OTP</Text>
          </TouchableOpacity>
          <Pressable
            style={styles.almostThere}
            onPress={() => {
              handleEnterPress;
            }}
          >
            <Text style={[styles.almostThere1, styles.symbolClr1]}>
              Almost there...
            </Text>
          </Pressable>
        </View>
        <View style={styles.box} />
      </KeyboardAvoidingView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundbox: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F5C348",
    position: "absolute",
    alignItems: "center",
  },
  box: {
    flex: 2,
    marginTop: "30%",
    backgroundColor: "black",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 130,
  },
  buttonText: {
    fontSize: 18,
    color: "grey",
  },
  input: {
    width: "75%",
    height: "10%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 35,
    paddingHorizontal: 12,
    justifyContent: "center",
    top: "10%", // Center the button vertically
    left: "12.5%",
  },
  onlyTextButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%", // Adjust the spacing between TextInput and "Resend OTP" button
  },
  onlyTextButton: {
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  baseText: {
    fontWeight: "bold",
    color: "black",
  },
  innerText: {
    color: "green",
    fontWeight: "bold",
  },
  customButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  customButtonText: {
    color: "grey",
    fontSize: 18,
    fontWeight: "bold",
  },
  s5EnterOtp: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.gray,
  },
  s5EnterOtpChild: {
    height: 500,
    width: "100%",
    left: 0,
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  almostThere: {
    left: 133,
    top: 250,
    position: "absolute",
  },
  almostThere1: {
    top: 50,
    fontSize: 20,
    width: 167,
    height: 37,
    // opacity: 0.3,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  symbolClr1: {
    // color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    color: Color.black,
    textAlign: "center",
  },
});

export default S5;
