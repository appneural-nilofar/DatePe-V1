import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone13ProMax37 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax37}>
      <Image
        style={styles.iphone13ProMax37Child}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupItem, styles.groupShadowBox]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.sheher, styles.sheherFlexBox]}>she/her</Text>
      </View>
      <View style={[styles.iphone13ProMax37Inner, styles.viewLayout]}>
        <View style={[styles.hehimParent, styles.viewLayout]}>
          <Text style={[styles.hehim, styles.hehimFlexBox]}>he/him</Text>
          <View style={[styles.rectangleView, styles.viewLayout]} />
        </View>
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.hehimParent, styles.viewLayout]}>
          <Text style={[styles.others, styles.hehimPosition]}>Others...</Text>
          <View style={[styles.rectangleView, styles.viewLayout]} />
        </View>
      </View>
      <Text style={[styles.whatAreYour, styles.youMayPickFlexBox]}>
        What are your preferred pronouns?
      </Text>
      <View style={[styles.rectangleContainer, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.theythem, styles.hehimFlexBox]}>they/them</Text>
      </View>
      <Text style={[styles.youMayPick, styles.youMayPickFlexBox]}>
        You may pick more than one....
      </Text>
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
  borderBorder: {
    borderWidth: 1,
    borderColor: "#f9f9f9",
    borderStyle: "solid",
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
  groupLayout: {
    height: 42,
    width: 103,
    position: "absolute",
  },
  groupPosition: {
    borderRadius: Border.br_14xl,
    left: 0,
    top: 0,
  },
  sheherFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  viewLayout: {
    width: 124,
    height: 39,
    position: "absolute",
  },
  hehimFlexBox: {
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  hehimPosition: {
    width: 102,
    left: 11,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    top: 12,
  },
  youMayPickFlexBox: {
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    position: "absolute",
  },
  groupChild2Layout: {
    width: 128,
    height: 39,
    position: "absolute",
  },
  time: {
    marginTop: -11,
    top: "50%",
    fontSize: 17,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.whitesmoke,
    textAlign: "center",
    left: 0,
    width: 54,
    position: "absolute",
  },
  timeStyle: {
    top: 19,
    left: 43,
    width: 54,
    height: 22,
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
  iphone13ProMax37Child: {
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
    width: 165,
    height: 25,
  },
  rectangleParent: {
    top: 71,
    left: 51,
    position: "absolute",
  },
  groupInner: {
    backgroundColor: "#487167",
    height: 42,
    width: 103,
    position: "absolute",
  },
  sheher: {
    left: 9,
    width: 85,
    height: 18,
    fontFamily: FontFamily.poppinsRegular,
    top: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontSize: FontSize.size_mini,
  },
  rectangleGroup: {
    left: 190,
    top: 323,
  },
  hehim: {
    width: 102,
    left: 11,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    top: 12,
  },
  rectangleView: {
    borderRadius: Border.br_14xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: "#f9f9f9",
    borderStyle: "solid",
  },
  hehimParent: {
    left: 0,
    top: 0,
  },
  iphone13ProMax37Inner: {
    top: 382,
    width: 124,
    left: 51,
  },
  others: {
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  groupView: {
    left: 189,
    top: 382,
    width: 124,
  },
  whatAreYour: {
    top: 145,
    left: 55,
    fontSize: 30,
    width: 294,
    height: 107,
    fontFamily: FontFamily.poppinsRegular,
  },
  groupChild2: {
    borderRadius: Border.br_14xl,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: "#f9f9f9",
    borderStyle: "solid",
  },
  theythem: {
    top: 11,
    left: 24,
    width: 80,
    fontFamily: FontFamily.poppinsRegular,
  },
  rectangleContainer: {
    top: 323,
    left: 51,
  },
  youMayPick: {
    marginLeft: -155,
    top: 454,
    width: 310,
    height: 68,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    left: "50%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 351,
    top: 396,
    width: 20,
  },
  iphone13ProMax37: {
    backgroundColor: "#292929",
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax37;
