import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const S1 = () => {
  return (
    <Pressable style={styles.s1} onPress={() => {}}>
      <Image
        style={styles.s1Child}
        resizeMode="cover"
        source={require("../assets/vector-1.png")}
      />
      <Image
        style={styles.s1Item}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  s1Child: {
    marginTop: -25,
    marginLeft: -37,
    width: 74,
    height: 50,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  time: {
    marginTop: -11,
    left: 0,
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.azure,
    textAlign: "center",
    top: "50%",
  },
  timeStyle: {
    top: 19,
    left: 43,
    height: 22,
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: "#d9d9d9",
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
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.gainsboro,
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
    marginLeft: -59,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  s1Item: {
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
  s1: {
    backgroundColor: "#292929",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S1;
