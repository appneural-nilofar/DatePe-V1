import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const S25 = ({navigation}) => {

  return (
    <View style={styles.s20ProfileMatchAnimati}>
      <Image
        style={styles.s20ProfileMatchAnimatiChild}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={[styles.s20ProfileMatchAnimatiItem, styles.s20Layout]} />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-34.png")}
        />
      </View>
      <Image
        style={[styles.s20ProfileMatchAnimatiInner, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-24.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector-24.png")}
      />
      <Image
        style={styles.s20ProfileMatchAnimatiChild1}
        resizeMode="cover"
        source={require("../assets/vector-25.png")}
      />
      <Text style={[styles.itsAMatch, styles.timePosition]}>It’s a Match</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-17.png")}
      />
      <Image
        style={[styles.s20ProfileMatchAnimatiChild2, styles.capacityLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-18.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[
          styles.s20ProfileMatchAnimatiChild3,
          styles.rectangleViewLayout,
        ]}
      />
      <View
        style={[styles.s20ProfileMatchAnimatiChild4, styles.s20ChildLayout2]}
      />
      <View
        style={[styles.s20ProfileMatchAnimatiChild5, styles.s20ChildLayout2]}
      />
      <View
        style={[styles.s20ProfileMatchAnimatiChild6, styles.s20ChildLayout1]}
      />
      <View
        style={[styles.s20ProfileMatchAnimatiChild7, styles.s20ChildLayout1]}
      />
      <Image
        style={[styles.s20ProfileMatchAnimatiChild8, styles.s20ChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-19.png")}
      />
      <Image
        style={[styles.s20ProfileMatchAnimatiChild9, styles.s20ChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-20.png")}
      />
      <Image
        style={styles.s20ProfileMatchAnimatiChild10}
        resizeMode="cover"
        source={require("../assets/vector-29.png")}
      />
      <View style={styles.homeIndicator} />
      <Image
        style={[styles.s20ProfileMatchAnimatiChild11, styles.groupItemLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <View style={[styles.s20ProfileMatchAnimatiChild12, styles.s20Layout]} />
      <Pressable style={styles.reachOut} onPress={() => {{navigation.navigate('s26')}}}>
        <Text style={[styles.reachOut1, styles.textTypo]}>Reach out</Text>
      </Pressable>
      <Pressable style={styles.directpeDate} >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.directpeDateTxtContainer}>
            <Text style={styles.directpe}>Directpe</Text>
            <Text style={styles.date}> date</Text>
          </Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  s20Layout: {
    width: 294,
    borderRadius: Border.br_7xl,
    left: 69,
    position: "absolute",
  },
  timePosition: {
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  capacityLayout: {
    height: 9,
    position: "absolute",
  },
  rectangleLayout: {
    transform: [
      {
        rotate: "-8.52deg",
      },
    ],
    height: 252,
    width: 182,
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_mini,
    transform: [
      {
        rotate: "-8.52deg",
      },
    ],
    height: 252,
    width: 182,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItemLayout: {
    height: 171,
    width: 155,
    borderRadius: Border.br_6xs,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 36,
    width: 40,
    position: "absolute",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_11xs,
    transform: [
      {
        rotate: "-8.52deg",
      },
    ],
    position: "absolute",
  },
  s20ChildLayout2: {
    height: 3,
    width: 9,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    borderRadius: Border.br_11xs,
    transform: [
      {
        rotate: "-8.52deg",
      },
    ],
    position: "absolute",
  },
  s20ChildLayout1: {
    borderRadius: Border.br_7xs,
    transform: [
      {
        rotate: "-8.52deg",
      },
    ],
    position: "absolute",
  },
  s20ChildLayout: {
    width: 7,
    position: "absolute",
  },
  textTypo: {
    height: 41,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    lineHeight: 22,
  },
  s20ProfileMatchAnimatiChild: {
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
    height: 926,
  },
  s20ProfileMatchAnimatiItem: {
    top: 821,
    height: 60,
    backgroundColor: Color.a3,
  },
  time: {
    marginTop: -11,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.snow,
    lineHeight: 22,
    textAlign: "center",
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
    opacity: 0.4,
    height: 4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 3,
    backgroundColor: Color.snow,
    width: 21,
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
    height: 58,
    left: "50%",
    width: 428,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.goldenrod,
  },
  groupItem: {
    marginTop: -129.66,
    marginLeft: -64.48,
    top: "50%",
    height: 171,
    width: 155,
    left: "50%",
  },
  rectangleParent: {
    top: 345,
    left: 23,
  },
  groupInner: {
    backgroundColor: Color.a3,
  },
  rectangleIcon: {
    marginTop: -103.6,
    marginLeft: -88.17,
    width: 151,
    height: 168,
    borderRadius: Border.br_6xs,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 427,
    left: 216,
  },
  s20ProfileMatchAnimatiInner: {
    top: 529,
    left: 72,
  },
  vectorIcon: {
    top: 813,
    left: 37,
  },
  s20ProfileMatchAnimatiChild1: {
    top: 631,
    left: 319,
    width: 39,
    height: 39,
    position: "absolute",
  },
  itsAMatch: {
    marginTop: -230,
    left: 51,
    fontSize: 40,
    lineHeight: 73,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 326,
    height: 78,
  },
  ellipseIcon: {
    top: 235,
    left: 329,
    width: 3,
    height: 6,
    position: "absolute",
  },
  s20ProfileMatchAnimatiChild2: {
    top: 259,
    left: 338,
    width: 8,
  },
  rectangleView: {
    top: 248,
    left: 354,
    width: 29,
    height: 7,
    backgroundColor: Color.a3,
  },
  s20ProfileMatchAnimatiChild3: {
    top: 243,
    left: 344,
    width: 15,
    backgroundColor: Color.a1,
    height: 4,
  },
  s20ProfileMatchAnimatiChild4: {
    top: 283,
    left: 334,
  },
  s20ProfileMatchAnimatiChild5: {
    top: 285,
    left: 79,
  },
  s20ProfileMatchAnimatiChild6: {
    top: 219,
    left: 84,
    width: 31,
    height: 8,
    backgroundColor: Color.a1,
  },
  s20ProfileMatchAnimatiChild7: {
    top: 222,
    left: 49,
    width: 20,
    backgroundColor: Color.goldenrod,
    height: 4,
  },
  s20ProfileMatchAnimatiChild8: {
    top: 210,
    left: 103,
    height: 8,
  },
  s20ProfileMatchAnimatiChild9: {
    top: 250,
    left: 78,
    height: 7,
  },
  s20ProfileMatchAnimatiChild10: {
    top: 707,
    width: 678,
    height: 882,
    left: 0,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    width: 134,
    height: 5,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: "50%",
    position: "absolute",
  },
  s20ProfileMatchAnimatiChild11: {
    top: 341,
    left: 50,
  },
  s20ProfileMatchAnimatiChild12: {
    top: 732,
    backgroundColor: "#20a090",
    height: 66,
  },
  reachOut1: {
    letterSpacing: 5,
    color: "#d9d9d9",
    justifyContent: "center",
    width: 211,
  },
  reachOut: {
    left: 111,
    top: 745,
    position: "absolute",
  },
  directpe: {
    color: "#da4949",
  },
  date: {
    color: Color.snow,
  },
  directpeDateTxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  text: {
    letterSpacing: 2,
    width: 254,
  },
  directpeDate: {
    left: 89,
    top: 831,
    position: "absolute",
  },
  s20ProfileMatchAnimati: {
    backgroundColor: "#292929",
    flex: 1,
    overflow: "hidden",
    height: 926,
    width: "100%",
  },
});

export default S25;
