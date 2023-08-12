import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const S31 = ({navigation}) => {

  return (
    <View style={styles.s23Settings}>
      <View style={[styles.rectangleParent, styles.parentShadowBox]}>
        <View style={[styles.frameChild, styles.wrapperPosition]} />
        <LinearGradient
          style={[styles.wrapper, styles.wrapperPosition]}
          locations={[0, 1]}
          colors={["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0)"]}
          useAngle={true}
          angle={180}
        >
          <Pressable style={styles.pressable} onPress={() => {{{navigation.navigate('s32')}}}} />
        </LinearGradient>
      </View>
      <View style={[styles.vectorParent, styles.parentShadowBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={[styles.chat, styles.chatFlexBox]}>chat</Text>
      </View>
      <View style={[styles.logOutWrapper, styles.groupParentShadowBox]}>
        <Text style={[styles.logOut, styles.emailLayout]}>Log out</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={[styles.settings, styles.settingsTypo]}>Settings</Text>
      <Pressable
        style={[styles.groupParent, styles.groupParentShadowBox]}
        onPress={() => {{{navigation.navigate('s32')}}}}
      >
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/group-26.png")}
        />
        <Text style={[styles.username, styles.age19Text]}>Username</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout1]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.age19, styles.age19Text]}>Age: 19</Text>
      </Pressable>
      <View style={styles.vectorGroup}>
        <Image
          style={styles.vectorIconLayout}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <Text style={[styles.accountSettings, styles.emailLayout]}>
        ACCOUNT SETTINGS
      </Text>
      <Text style={[styles.contactUs, styles.emailLayout]}>cONTACT US</Text>
      <Text style={styles.phoneNumber}>Phone number</Text>
      <Text style={[styles.text, styles.textTypo]}>+91-9800786743</Text>
      <Text style={[styles.wxrrs343gmailcom, styles.textTypo]}>
        wxrrs343@gmail.com
      </Text>
      <Pressable
        style={[styles.privacy, styles.emailPosition]}
        onPress={() => {{{navigation.navigate('s32')}}}}
      >
        <Text style={[styles.privacy1, styles.emailLayout]}>Privacy</Text>
      </Pressable>
      <Text style={[styles.email, styles.emailPosition]}>email</Text>
      <Text style={[styles.notifications, styles.emailPosition]}>
        notifications
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
    opacity: 0.9,
    width: 380,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_7xl,
    left: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    position: "absolute",
    overflow: "hidden",
  },
  wrapperPosition: {
    left: 321,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  chatFlexBox: {
    alignItems: "flex-end",
    lineHeight: 20,
  },
  groupParentShadowBox: {
    backgroundColor: Color.primary,
    opacity: 0.9,
    width: 380,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  emailLayout: {
    width: 272,
    height: 22,
    alignItems: "flex-end",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    lineHeight: 20,
  },
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 22,
    textAlign: "center",
    position: "absolute",
  },
  settingsTypo: {
    fontSize: FontSize.size_xl,
    display: "flex",
  },
  age19Text: {
    color: Color.white,
    textAlign: "left",
    textTransform: "capitalize",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 11,
    width: 7,
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    width: 169,
    height: 22,
    alignItems: "flex-end",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  emailPosition: {
    left: 45,
    position: "absolute",
  },
  frameChild: {
    top: 126,
    borderRadius: 5,
    backgroundColor: "rgba(54, 55, 60, 0.5)",
    width: 35,
    height: 16,
  },
  pressable: {
    backgroundColor: "transparent",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    height: "100%",
    borderRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    width: "100%",
  },
  wrapper: {
    top: 123,
    width: 15,
    height: 21,
  },
  rectangleParent: {
    top: 288,
    height: 156,
  },
  vectorIcon: {
    height: "31.71%",
    width: "2.67%",
    top: "34%",
    right: "4.7%",
    bottom: "34.29%",
    left: "92.63%",
  },
  chat: {
    height: "44%",
    width: "71.58%",
    top: "22%",
    left: "5.53%",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    alignItems: "flex-end",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorParent: {
    top: 510,
    height: 50,
  },
  logOut: {
    left: 54,
    height: 22,
    justifyContent: "center",
    textAlign: "center",
    width: 272,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    top: 14,
    position: "absolute",
  },
  logOutWrapper: {
    top: 856,
    borderRadius: 25,
    height: 50,
  },
  time: {
    marginTop: -11,
    left: 0,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.snow,
    top: "50%",
    width: 54,
  },
  timeStyle: {
    top: 19,
    left: 43,
    width: 54,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#fdf5f5",
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: 13,
  },
  capIcon: {
    top: 5,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    backgroundColor: Color.snow,
    height: 9,
    width: 21,
    borderRadius: 3,
    position: "absolute",
  },
  battery: {
    right: 33,
    width: 27,
    height: 13,
    top: 23,
    position: "absolute",
  },
  wifiIcon: {
    width: 19,
    height: 13,
  },
  cellularConnectionIcon: {
    width: 21,
    height: 13,
  },
  statusBar: {
    marginLeft: -214,
    width: 428,
    height: 58,
    left: "50%",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.94%",
    width: "2.49%",
    top: "7.26%",
    right: "89.92%",
    bottom: "90.79%",
    left: "7.59%",
  },
  settings: {
    top: 64,
    left: 138,
    letterSpacing: 5,
    textTransform: "uppercase",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    alignItems: "center",
    width: 152,
    height: 28,
    lineHeight: 22,
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  frameItem: {
    left: 11,
    width: 67,
    height: 67,
    top: 14,
    position: "absolute",
  },
  username: {
    left: 90,
    width: 174,
    fontSize: FontSize.size_xl,
    display: "flex",
    top: 23,
    height: 22,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    alignItems: "flex-end",
    lineHeight: 20,
    color: Color.white,
  },
  vectorIcon2: {
    height: "16.51%",
    width: "2.9%",
    top: "34.61%",
    right: "5.32%",
    bottom: "48.87%",
    left: "91.78%",
  },
  age19: {
    marginTop: -3,
    marginLeft: -100,
    fontSize: 16,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 64,
    height: 31,
    top: "50%",
    left: "50%",
  },
  groupParent: {
    top: 136,
    borderRadius: 33,
    height: 96,
  },
  vectorIcon4: {
    marginTop: 25,
  },
  vectorGroup: {
    top: 306,
    left: 373,
    position: "absolute",
  },
  accountSettings: {
    top: 261,
    left: 32,
    height: 22,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    width: 272,
    textAlign: "left",
    position: "absolute",
  },
  contactUs: {
    top: 473,
    left: 31,
    height: 22,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    width: 272,
    textAlign: "left",
    position: "absolute",
  },
  phoneNumber: {
    width: 169,
    left: 45,
    top: 300,
    height: 22,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text: {
    left: 191,
    top: 300,
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
  },
  wxrrs343gmailcom: {
    top: 371,
    left: 194,
  },
  privacy1: {
    height: 22,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    width: 272,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  privacy: {
    top: 334,
  },
  email: {
    top: 370,
    height: 22,
    width: 272,
    alignItems: "flex-end",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  notifications: {
    top: 405,
    height: 22,
    width: 272,
    alignItems: "flex-end",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    lineHeight: 20,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  s23Settings: {
    backgroundColor: Color.bg,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default S31;
