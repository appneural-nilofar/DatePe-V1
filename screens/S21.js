import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const S22 = ({navigation}) => {

  return (
    <View style={styles.s17Menu}>
      <Image
        style={[styles.s17MenuChild, styles.statusBarLayout]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={styles.s17MenuItem} />
      <Text style={styles.similar}>similar</Text>
      <View style={[styles.s17MenuInner, styles.groupChildLayout]}>
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-20.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <Text style={styles.sarah19}>Sarah, 19</Text>
      <Text style={styles.iNeedA}>I need a break</Text>
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <Text style={[styles.anime, styles.animeTypo]}>anime</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupItem, styles.rectangleLayout]} />
        <Text style={[styles.kdramas, styles.animeTypo]}>kdramas</Text>
      </View>
      <View style={[styles.menuVerticalParent, styles.statusBarPosition]}>
        <Image
          style={styles.menuIconLayout}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={styles.messageIcon}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <Text style={styles.match}>match</Text>
      <Image
        style={[styles.menuVerticalIcon1, styles.menuIconLayout]}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <View style={[styles.backgroundParent, styles.logOutWrapperShadowBox]}>
        <Image
          style={[styles.backgroundIcon, styles.backgroundLayout]}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Pressable style={styles.messages} onPress={() => {{navigation.navigate('s22')}}}>
          <Text style={styles.messages1}>Messages</Text>
        </Pressable>
        <Pressable style={styles.directpe} onPress={() => {{navigation.navigate('s22')}}}>
          <Text style={styles.directpe1}>directPe</Text>
        </Pressable>
        <Pressable style={styles.settings} onPress={() => {{navigation.navigate('s22')}}}>
          <Text style={[styles.settings1, styles.logOutTypo]}>{`



Settings`}</Text>
        </Pressable>
        <Pressable style={styles.wrapper} onPress={() => {{navigation.navigate('s23')}}}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/group-26.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.logOutWrapper, styles.logLayout]}>
        <Text style={[styles.logOut, styles.logLayout]}>Log out</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarLayout: {
    width: 428,
    top: 0,
  },
  statusBarPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 540,
    width: 326,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleLayout: {
    height: 18,
    width: 68,
    position: "absolute",
  },
  animeTypo: {
    color: Color.black,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 13,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  menuIconLayout: {
    height: 26,
    width: 26,
  },
  logOutWrapperShadowBox: {
    opacity: 0.9,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  backgroundLayout: {
    borderRadius: Border.br_23xl,
    position: "absolute",
  },
  logOutTypo: {
    alignItems: "flex-end",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 20,
    display: "flex",
    height: 22,
  },
  logLayout: {
    width: 205,
    position: "absolute",
  },
  s17MenuChild: {
    height: 217,
    left: 0,
    position: "absolute",
  },
  time: {
    marginTop: -11,
    top: "50%",
    fontFamily: FontFamily.cairoBold,
    textAlign: "center",
    color: Color.whitesmoke_200,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeStyle: {
    top: 19,
    left: 43,
    height: 22,
    width: 54,
    position: "absolute",
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#ededed",
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: 13,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 5,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  capacity: {
    right: 4,
    borderRadius: 3,
    backgroundColor: Color.whitesmoke_200,
    height: 9,
    width: 21,
    top: 2,
    position: "absolute",
  },
  battery: {
    top: 23,
    right: 33,
    height: 13,
    width: 27,
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
    height: 58,
    width: 428,
    top: 0,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
  },
  s17MenuItem: {
    top: 688,
    backgroundColor: "#aec48a",
    shadowRadius: 4,
    elevation: 4,
    height: 70,
    width: 326,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_7xl,
    left: 57,
    position: "absolute",
  },
  similar: {
    top: 787,
    color: Color.gray,
    height: 41,
    width: 162,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 5,
    fontSize: FontSize.size_5xl,
    left: 133,
    justifyContent: "center",
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xl,
    height: 540,
    left: 0,
    top: 0,
  },
  s17MenuInner: {
    top: 136,
    height: 540,
    left: 57,
  },
  groupIcon: {
    height: "1.94%",
    width: "18%",
    top: "95.25%",
    right: "41.11%",
    bottom: "2.81%",
    left: "40.89%",
    position: "absolute",
  },
  sarah19: {
    top: 541,
    fontFamily: FontFamily.poppinsRegular,
    height: 21,
    width: 183,
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: 83,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  iNeedA: {
    top: 574,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    height: 21,
    width: 183,
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: 83,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  rectangleView: {
    top: 604,
    left: 82,
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_lg,
    width: 68,
  },
  anime: {
    top: 606,
    left: 91,
    width: 50,
  },
  groupItem: {
    backgroundColor: Color.gainsboro,
    borderRadius: Border.br_lg,
    width: 68,
    left: 0,
    top: 0,
  },
  kdramas: {
    left: 4,
    width: 59,
    top: 2,
  },
  rectangleParent: {
    top: 605,
    left: 157,
  },
  messageIcon: {
    height: 27,
    marginLeft: 310,
    width: 27,
  },
  menuVerticalParent: {
    marginLeft: -181,
    top: 61,
    flexDirection: "row",
  },
  match: {
    top: 702,
    color: Color.whitesmoke_100,
    height: 41,
    width: 162,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 5,
    fontSize: FontSize.size_5xl,
    left: 133,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  menuVerticalIcon1: {
    top: 67,
    left: 22,
    position: "absolute",
  },
  backgroundIcon: {
    bottom: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    right: 0,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "2.11%",
    width: "4.25%",
    top: "5.86%",
    right: "89.19%",
    bottom: "92.03%",
    left: "6.56%",
    position: "absolute",
  },
  messages1: {
    fontFamily: FontFamily.poppinsBold,
    textAlign: "right",
    width: 104,
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    color: Color.whitesmoke_100,
    fontWeight: "700",
    height: 22,
  },
  messages: {
    top: 150,
    left: 22,
    position: "absolute",
  },
  directpe1: {
    width: 108,
    height: 23,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.whitesmoke_200,
  },
  directpe: {
    top: 235,
    left: 22,
    position: "absolute",
  },
  settings1: {
    width: 91,
    fontSize: FontSize.size_xl,
    alignItems: "flex-end",
    textAlign: "left",
    color: Color.whitesmoke_200,
  },
  settings: {
    top: 321,
    left: 22,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 176,
    top: 38,
    width: 48,
    height: 48,
    position: "absolute",
  },
  backgroundParent: {
    top: 40,
    width: 251,
    height: 878,
    borderRadius: Border.br_23xl,
    position: "absolute",
    left: 22,
  },
  logOut: {
    top: 14,
    fontSize: 18,
    color: "rgba(249, 249, 249, 0.75)",
    alignItems: "flex-end",
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textTransform: "capitalize",
    lineHeight: 20,
    display: "flex",
    height: 22,
    justifyContent: "center",
    width: 205,
    textAlign: "center",
    left: 0,
  },
  logOutWrapper: {
    top: 829,
    left: 46,
    borderRadius: 25,
    backgroundColor: Color.primary,
    height: 50,
    opacity: 0.9,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
  },
  s17Menu: {
    backgroundColor: Color.gray,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default S22;
