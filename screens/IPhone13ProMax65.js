import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13ProMax65 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone13ProMax65}>
      <Image
        style={styles.iphone13ProMax65Child}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupItem, styles.groupShadowBox]} />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.sheher, styles.sheherTypo]}>she/her</Text>
      </View>
      <View style={[styles.iphone13ProMax65Inner, styles.viewLayout]}>
        <View style={[styles.hehimParent, styles.viewLayout]}>
          <Text style={[styles.hehim, styles.hehimTypo]}>he/him</Text>
          <View style={[styles.rectangleView, styles.viewLayout]} />
        </View>
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.hehimParent, styles.viewLayout]}>
          <Text style={[styles.others, styles.hehimPosition]}>Others...</Text>
          <View style={[styles.rectangleView, styles.viewLayout]} />
        </View>
      </View>
      <Text style={[styles.whatsYourSexual, styles.weWillTryFlexBox]}>
        What’s your sexual preference?
      </Text>
      <View style={[styles.rectangleContainer, styles.groupChild2Layout]}>
        <View style={[styles.groupChild2, styles.groupChild2Layout]} />
        <Text style={[styles.theythem, styles.hehimTypo]}>they/them</Text>
      </View>
      <Text
        style={[styles.weWillTry, styles.weWillTryFlexBox]}
      >{`We will try our best to find a compatible match! `}</Text>
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
  sheherTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  viewLayout: {
    width: 124,
    height: 39,
    position: "absolute",
  },
  hehimTypo: {
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  hehimPosition: {
    width: 102,
    left: 11,
    top: 12,
  },
  weWillTryFlexBox: {
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
  iphone13ProMax65Child: {
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
    width: 123,
    height: 25,
  },
  rectangleParent: {
    top: 71,
    left: 51,
    position: "absolute",
  },
  groupInner: {
    height: 42,
    width: 103,
    position: "absolute",
    borderWidth: 1,
    borderColor: "#f9f9f9",
    borderStyle: "solid",
  },
  sheher: {
    left: 9,
    width: 85,
    height: 18,
    top: 12,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  rectangleGroup: {
    top: 305,
    left: 200,
  },
  hehim: {
    width: 102,
    left: 11,
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
  iphone13ProMax65Inner: {
    left: 57,
    top: 367,
    width: 124,
  },
  others: {
    height: 15,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    position: "absolute",
  },
  groupView: {
    left: 194,
    top: 367,
    width: 124,
  },
  whatsYourSexual: {
    top: 145,
    left: 55,
    fontSize: 30,
    fontFamily: FontFamily.poppinsRegular,
    width: 294,
    height: 107,
  },
  groupChild2: {
    backgroundColor: "#9797cb",
    borderRadius: Border.br_14xl,
    left: 0,
    top: 0,
  },
  theythem: {
    top: 11,
    left: 24,
    width: 80,
  },
  rectangleContainer: {
    top: 307,
    left: 57,
  },
  weWillTry: {
    top: 442,
    left: 60,
    width: 276,
    height: 68,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    fontSize: FontSize.size_mini,
    textAlign: "left",
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
  iphone13ProMax65: {
    backgroundColor: "#292929",
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13ProMax65;
