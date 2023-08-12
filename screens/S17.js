import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const S17 = ({navigation}) => {
  return (
    <View style={styles.s15Animation}>
      <Image
        style={[styles.s15AnimationChild, styles.s15AnimationChildCommon]}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupItem, styles.groupShadowBox]} />
      </View>
      <Text style={[styles.findNearbyMatches, styles.weNeedToFlexBox]}
            onPress={() => {{navigation.navigate('s18')}}}
            >
        Find nearby matches...
      </Text>
      <Image
        style={[styles.s15AnimationItem, styles.s15Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-442.png")}
      />
      <Image
        style={[styles.s15AnimationInner, styles.s15Position]}
        resizeMode="cover"
        source={require("../assets/ellipse-444.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-443.png")}
      />
      <View style={styles.groupView}>
        <View style={styles.groupInnerPosition}>
          <View style={[styles.groupInner, styles.groupInnerPosition]} />
        </View>
      </View>
      <Text style={styles.allowLocationAccess}>Allow location access</Text>
      <Text style={[styles.weNeedTo, styles.weNeedToTypo]}>
        We need to access your location to find people in your area
      </Text>
      <Text style={[styles.almostThere, styles.weNeedToTypo]}>
        almost there
      </Text>
      <Image
        style={[styles.carbonlocationFilledIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/carbonlocationfilled.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    marginLeft: -214,
    left: "50%",
  },
  s15Position: {
    top: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderColor: "#f9f9f9",
    borderStyle: "solid",
  },
  s15AnimationChildCommon: {
    opacity: 0.5,
    overflow: "hidden",
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
  weNeedToFlexBox: {
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    opacity: 0.5,
  },
  iconLayout: {
    height: 215,
    width: 215,
    position: "absolute",
  },
  groupInnerPosition: {
    marginLeft: -139,
    height: 65,
    width: 278,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  weNeedToTypo: {
    width: 256,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  time: {
    marginTop: -11,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.whitesmoke,
    textAlign: "center",
    left: 0,
    width: 54,
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
    width: 428,
    height: 58,
    left: "50%",
    top: 0,
    position: "absolute",
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
  s15AnimationChild: {
    height: "1.94%",
    width: "18%",
    top: "95.25%",
    right: "41.11%",
    bottom: "2.81%",
    left: "40.89%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
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
    width: 285,
    height: 25,
  },
  rectangleParent: {
    top: 71,
    left: 51,
    position: "absolute",
  },
  findNearbyMatches: {
    top: 137,
    left: 59,
    fontSize: 30,
    fontFamily: FontFamily.poppinsRegular,
    width: 294,
    height: 107,
    position: "absolute",
  },
  s15AnimationItem: {
    marginTop: -69,
    marginLeft: -190,
    width: 374,
    height: 374,
    left: "50%",
  },
  s15AnimationInner: {
    marginTop: -138,
    width: 513,
    height: 513,
    left: "50%",
    marginLeft: -214,
  },
  ellipseIcon: {
    top: 474,
    left: 103,
  },
  groupInner: {
    borderRadius: 33,
    borderWidth: 1,
    borderColor: "#f9f9f9",
    borderStyle: "solid",
  },
  groupView: {
    marginLeft: -143,
    top: 758,
    shadowRadius: 9,
    elevation: 9,
    height: 65,
    width: 278,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    opacity: 0.5,
    left: "50%",
    position: "absolute",
  },
  allowLocationAccess: {
    top: 768,
    left: 106,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 208,
    height: 48,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    fontSize: FontSize.size_mini,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    textAlign: "center",
    position: "absolute",
  },
  weNeedTo: {
    top: 233,
    left: 62,
    height: 52,
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    opacity: 0.5,
  },
  almostThere: {
    marginLeft: -128,
    top: 78,
    color: "rgba(255, 255, 255, 0.5)",
    height: 19,
    textAlign: "center",
    left: "50%",
  },
  carbonlocationFilledIcon: {
    marginLeft: -107,
    top: 377,
    opacity: 0.5,
    overflow: "hidden",
    left: "50%",
  },
  s15Animation: {
    backgroundColor: "#292929",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S17;
