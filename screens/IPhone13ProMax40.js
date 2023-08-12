import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const IPhone13ProMax40 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax40}>
      <Image
        style={styles.iphone13ProMax40Child}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupItem, styles.groupShadowBox]} />
      </View>
      <Text style={styles.whatsYourSexual}>
        What’s your sexual orientation?
      </Text>
      <View style={styles.straightParent}>
        <Text style={styles.straight}>Straight</Text>
        <Text style={[styles.straight1, styles.straight1Layout]}>Straight</Text>
        <Text style={[styles.straight1, styles.straight1Layout]}>Gay</Text>
        <Text style={[styles.straight1, styles.straight1Layout]}>Lesbian</Text>
        <Text style={[styles.straight1, styles.straight1Layout]}>Bisexual</Text>
        <Text style={[styles.straight1, styles.straight1Layout]}>Asexual</Text>
        <Text
          style={[styles.straight1, styles.straight1Layout]}
        >{`Demisexual `}</Text>
        <Text style={[styles.pansexual, styles.straight1Layout]}>
          Pansexual
        </Text>
        <Text style={[styles.pansexual, styles.straight1Layout]}>Queer</Text>
        <Text style={[styles.straight1, styles.straight1Layout]}>
          Bicurious
        </Text>
        <Text style={[styles.straight1, styles.straight1Layout]}>
          Aromantic
        </Text>
      </View>
      <Text style={[styles.youCanPick, styles.straight1Typo]}>
        You can pick up to three
      </Text>
      <Image
        style={[styles.iphone13ProMax40Item, styles.statusBarPosition]}
        resizeMode="cover"
        source={require("../assets/vector-900.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout]}
        onPress={() => {}}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector-899.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: "50%",
    position: "absolute",
  },
  wrapperLayout: {
    height: 22,
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
  straight1Layout: {
    marginTop: 30,
    height: 15,
    width: 102,
    alignItems: "center",
    display: "flex",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  straight1Typo: {
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
  },
  time: {
    marginTop: -11,
    top: "50%",
    fontSize: 17,
    lineHeight: 22,
    fontFamily: FontFamily.cairoBold,
    color: Color.whitesmoke,
    textAlign: "center",
    fontWeight: "700",
    left: 0,
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    top: 19,
    left: 43,
    width: 54,
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
  iphone13ProMax40Child: {
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
    width: 152,
    height: 25,
  },
  rectangleParent: {
    top: 71,
    left: 51,
    width: 326,
    position: "absolute",
  },
  whatsYourSexual: {
    top: 145,
    fontSize: 30,
    fontFamily: FontFamily.poppinsRegular,
    width: 294,
    height: 107,
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: 55,
    position: "absolute",
  },
  straight: {
    height: 15,
    width: 102,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  straight1: {
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
  },
  pansexual: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  straightParent: {
    top: 272,
    left: 55,
    position: "absolute",
  },
  youCanPick: {
    top: 811,
    width: 310,
    height: 52,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: 51,
    position: "absolute",
  },
  iphone13ProMax40Item: {
    marginLeft: -167,
    top: 800,
    width: 334,
    height: 76,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 361,
    top: 717,
    width: 20,
  },
  iphone13ProMax40: {
    backgroundColor: "#292929",
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax40;
