import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily } from "../GlobalStyles";

const S35 = ({navigation}) => {
  return (
    <LinearGradient
      style={styles.s25connectionErrors}
      locations={[0, 0.5, 1]}
      colors={[
        "rgba(246, 246, 246, 0.2)",
        "rgba(107, 107, 107, 0.09)",
        "rgba(0, 0, 0, 0)",
      ]}
      useAngle={true}
      angle={175.42}
    >
      <Image
        style={[styles.s25connectionErrorsChild, styles.statusBarLayout]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={styles.s25connectionErrorsItem}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <View style={[styles.menuVerticalParent, styles.statusBarPosition]}>
        <Image
          style={styles.menuVerticalIcon}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={styles.messageIcon}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <View style={[styles.menuVerticalParent, styles.statusBarPosition]}>
        <Image
          style={styles.menuVerticalIcon}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={styles.messageIcon}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <Text style={[styles.uhOh, styles.uhOhTypo]}>uh oh</Text>
      <Text style={[styles.oopsTryLater, styles.uhOhTypo]}>{`OOPs,
Try later`}</Text>
      <Image
        style={styles.connectivity01Icon}
        resizeMode="cover"
        source={require("../assets/connectivity-01.png")}
      />
    </LinearGradient>
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
  uhOhTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  s25connectionErrorsChild: {
    height: 192,
    left: 0,
    width: 428,
    position: "absolute",
  },
  time: {
    marginTop: -11,
    top: "50%",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.whitesmoke,
    textAlign: "center",
    lineHeight: 22,
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
    backgroundColor: Color.whitesmoke,
    height: 9,
    width: 21,
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
  s25connectionErrorsItem: {
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
  menuVerticalIcon: {
    width: 26,
    height: 26,
  },
  messageIcon: {
    height: 27,
    marginLeft: 310,
    width: 27,
  },
  menuVerticalParent: {
    marginLeft: -181,
    flexDirection: "row",
    top: 61,
  },
  uhOh: {
    marginLeft: -73,
    fontSize: 20,
    letterSpacing: 5,
    width: 147,
    height: 28,
    top: 61,
    lineHeight: 22,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  oopsTryLater: {
    marginLeft: -151,
    top: 544,
    fontSize: 24,
    letterSpacing: 3,
    lineHeight: 41,
    width: 303,
    height: 161,
  },
  connectivity01Icon: {
    top: 299,
    left: 70,
    width: 280,
    height: 280,
    position: "absolute",
    overflow: "hidden",
  },
  s25connectionErrors: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S35;
