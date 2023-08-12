import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const S154 = () => {
  return (
    <View style={styles.s1541}>
      <Image
        style={[styles.s154Child, styles.s154ChildLayout]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Text style={[styles.welcome, styles.timeTypo]}>WELCOME</Text>
      <Image
        style={styles.s154Item}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  s154ChildLayout: {
    width: 428,
    top: 0,
  },
  statusBarPosition: {
    left: "50%",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.cairoBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  s154Child: {
    left: 0,
    position: "absolute",
    height: 926,
  },
  time: {
    marginTop: -11,
    top: "50%",
    fontSize: 17,
    color: Color.whitesmoke,
    width: 54,
    left: 0,
  },
  timeStyle: {
    top: 19,
    left: 43,
    height: 22,
    width: 54,
    position: "absolute",
    overflow: "hidden",
  },
  border1: {
    right: 2,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f9f9f9",
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: 13,
    top: 0,
    position: "absolute",
  },
  capIcon1: {
    top: 5,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: "absolute",
  },
  capacity1: {
    top: 2,
    right: 4,
    borderRadius: 3,
    backgroundColor: Color.whitesmoke,
    height: 9,
    width: 21,
    position: "absolute",
  },
  battery: {
    top: 23,
    right: 33,
    width: 27,
    height: 13,
    position: "absolute",
  },
  wifiIcon1: {
    width: 19,
    height: 13,
  },
  cellularConnectionIcon1: {
    width: 21,
    height: 13,
  },
  statusBar: {
    marginLeft: -214,
    height: 58,
    width: 428,
    top: 0,
  },
  homeIndicator1: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
  },
  welcome: {
    top: 445,
    left: 86,
    fontSize: 32,
    letterSpacing: 6,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 267,
    height: 162,
  },
  s154Item: {
    height: "1.94%",
    width: "18%",
    top: "95.25%",
    right: "41.11%",
    bottom: "2.81%",
    left: "40.89%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  s1541: {
    backgroundColor: "#292929",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
  },
});

export default S154;
