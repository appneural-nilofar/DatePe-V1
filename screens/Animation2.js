import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Border, FontFamily, Color } from "../GlobalStyles";

const Animation2 = () => {
  return (
    <View style={styles.animation2}>
      <Image
        style={[styles.animation2Child, styles.animation2Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-444.png")}
      />
      <Image
        style={[styles.animation2Item, styles.animation2Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-442.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupItem, styles.groupShadowBox]} />
      </View>
      <Image
        style={[styles.animation2Inner, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-904.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-905.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-443.png")}
      />
      <Text style={[styles.gotIt, styles.timeFlexBox]}>got it</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  animation2Position: {
    marginLeft: -214,
    left: "50%",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout: {
    height: 39,
    width: 326,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_7xl,
    position: "absolute",
  },
  vectorIconLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  animation2Child: {
    width: 998,
    height: 970,
    left: "50%",
    top: "50%",
    marginTop: -463,
    marginLeft: -214,
  },
  time: {
    marginTop: -11,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.whitesmoke,
    left: 0,
    width: 54,
    top: "50%",
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
    borderColor: "#f9f9f9",
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: 13,
    top: 0,
    position: "absolute",
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
    borderRadius: 3,
    height: 9,
    width: 21,
    backgroundColor: Color.whitesmoke,
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
    width: 428,
    height: 58,
    top: 0,
    left: "50%",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  animation2Item: {
    width: 1289,
    height: 1254,
    left: "50%",
    top: "50%",
    marginTop: -463,
    marginLeft: -214,
  },
  groupChild: {
    height: 39,
    width: 326,
    backgroundColor: Color.whitesmoke,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 7,
    left: 6,
    backgroundColor: "#da4949",
    width: 314,
    height: 25,
  },
  rectangleParent: {
    top: 71,
    left: 51,
    position: "absolute",
  },
  animation2Inner: {
    top: 116,
    left: 378,
    width: 20,
    height: 17,
  },
  vectorIcon: {
    top: 97,
    left: 23,
    height: 48,
    width: 27,
  },
  ellipseIcon: {
    top: 142,
    width: 713,
    height: 692,
    left: 0,
    position: "absolute",
  },
  gotIt: {
    marginLeft: -128,
    top: 78,
    fontSize: 15,
    fontWeight: "200",
    fontFamily: FontFamily.poppinsExtralight,
    color: "rgba(255, 255, 255, 0.5)",
    width: 256,
    height: 19,
    left: "50%",
  },
  animation2: {
    backgroundColor: "#292929",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Animation2;
