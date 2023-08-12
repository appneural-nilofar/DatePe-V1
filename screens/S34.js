import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const S34 = ({navigation}) => {
  return (
    <View style={styles.s24Community}>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <LinearGradient
          style={[styles.frameItem, styles.frameItemShadowBox]}
          locations={[0, 1]}
          colors={["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0)"]}
          useAngle={true}
          angle={180}
        />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.frameItemShadowBox]}
          locations={[0, 1]}
          colors={["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0)"]}
          useAngle={true}
          angle={180}
          onPress={() => {{{navigation.navigate('s35')}}}}
        />
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={styles.settings}>Settings</Text>
      <View style={styles.controlWhoMessageYouParent}>
        <Text style={styles.controlWhoMessage}>Control who message you</Text>
        <Text style={[styles.readReceipt, styles.doneLayout]}>
          Read receipt
        </Text>
        <Text style={[styles.activityStatus, styles.doneLayout]}>
          Activity Status
        </Text>
      </View>
      <Text style={[styles.done, styles.doneLayout]}>DONE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 16,
    width: 35,
    backgroundColor: Color.darkslategray,
    borderRadius: Border.br_8xs,
    left: 325,
    position: "absolute",
  },
  frameItemShadowBox: {
    height: 21,
    width: 15,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    backgroundColor: "transparent",
    borderRadius: Border.br_10xs,
    left: 325,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    position: "absolute",
  },
  statusBarPosition: {
    left: "50%",
    position: "absolute",
  },
  doneLayout: {
    textTransform: "capitalize",
    alignItems: "flex-end",
    lineHeight: 20,
    width: 272,
    display: "flex",
    height: 22,
    position: "absolute",
  },
  frameChild: {
    top: 60,
  },
  frameItem: {
    top: 57,
  },
  frameInner: {
    top: 99,
  },
  rectangleLineargradient: {
    top: 96,
  },
  rectangleParent: {
    top: 162,
    left: 24,
    borderRadius: 26,
    backgroundColor: "rgba(133, 122, 122, 0.34)",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 3,
    elevation: 3,
    width: 380,
    height: 135,
    opacity: 0.9,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    marginTop: -11,
    top: "50%",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.snow,
    textAlign: "center",
    lineHeight: 22,
    left: 0,
    width: 54,
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
    borderColor: "#fdf5f5",
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
    backgroundColor: Color.snow,
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
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
  },
  vectorIcon: {
    height: "1.94%",
    width: "2.49%",
    top: "7.26%",
    right: "89.92%",
    bottom: "90.79%",
    left: "7.59%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  settings: {
    top: 64,
    left: 138,
    fontSize: 20,
    letterSpacing: 5,
    textTransform: "uppercase",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    alignItems: "center",
    justifyContent: "center",
    width: 152,
    height: 28,
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  controlWhoMessage: {
    width: 209,
    alignItems: "flex-end",
    lineHeight: 20,
    textAlign: "left",
    color: Color.whitesmoke,
    fontSize: FontSize.size_sm,
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    height: 22,
    top: 0,
    position: "absolute",
  },
  readReceipt: {
    top: 39,
    textAlign: "left",
    color: Color.whitesmoke,
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
  },
  activityStatus: {
    top: 79,
    textAlign: "left",
    color: Color.whitesmoke,
    fontSize: FontSize.size_sm,
    textTransform: "capitalize",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
  },
  controlWhoMessageYouParent: {
    top: 179,
    left: 46,
    height: 101,
    width: 272,
    position: "absolute",
  },
  done: {
    top: 120,
    left: 126,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.primary,
    textAlign: "right",
  },
  s24Community: {
    backgroundColor: Color.bg,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S34;
