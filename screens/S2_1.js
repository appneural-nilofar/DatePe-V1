import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const S2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.s2}>
      <Image
        style={[styles.s2Child, styles.s2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <View style={styles.s2Item} />
      <Pressable style={styles.login} onPress={() => {}}>
        <Text style={[styles.login1, styles.timeTypo]}>LOGIN</Text>
      </Pressable>
      <Image
        style={[styles.s2Inner, styles.s2ChildLayout]}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  s2ChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statusBarPosition: {
    left: "50%",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
  },
  s2Child: {
    height: "6.16%",
    width: "57.01%",
    top: "46.87%",
    right: "21.5%",
    bottom: "46.98%",
    left: "21.5%",
  },
  time: {
    marginTop: -11,
    top: "50%",
    left: 0,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.coral,
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    top: 19,
    left: 43,
    height: 22,
    overflow: "hidden",
  },
  border: {
    right: 2,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#e96a37",
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
    backgroundColor: Color.coral,
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
  s2Item: {
    top: 778,
    left: 51,
    borderRadius: 26,
    backgroundColor: "#aec48a",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 326,
    height: 70,
    position: "absolute",
  },
  login1: {
    fontFamily: FontFamily.poppinsRegular,
    color: "#f9f9f9",
    width: 223,
    height: 18,
  },
  login: {
    left: 102,
    top: 804,
    position: "absolute",
  },
  s2Inner: {
    height: "1.94%",
    width: "18%",
    top: "95.25%",
    right: "41.11%",
    bottom: "2.81%",
    left: "40.89%",
  },
  s2: {
    backgroundColor: "#292929",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S2;
