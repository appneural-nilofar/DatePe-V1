import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const S20 = ({navigation}) => {

  return (
    <View style={styles.s17FinalProfileSwipeOr}>
      <Image
        style={[styles.s17FinalProfileSwipeOrChild, styles.statusBarPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Pressable style={styles.s17FinalProfileSwipeOrItem} onPress={() => {{navigation.navigate('s21')}}} />
      <Pressable
        style={[styles.s17FinalProfileSwipeOrInner, styles.groupChildLayout]}
      >
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-20.png")}
        />
      </Pressable>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-4.png")}
      />
      <Text style={[styles.sarah19, styles.instagramLayout]}>Sarah, 19</Text>
      <Text style={[styles.sarah19, styles.instagramLayout]}>Sarah, 19</Text>
      <Text style={styles.iNeedA}>I need a break</Text>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.anime, styles.animeTypo]}>anime</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.kdramas, styles.animeTypo]}>kdramas</Text>
      </View>
      <Text style={[styles.match, styles.homeTypo]}
        onPress={() => {{navigation.navigate('s21')}}}
      
      >match</Text>
      <View style={[styles.menuVerticalParent, styles.homePosition]}>
        <Image
          style={styles.menuVerticalIcon}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
        <Image
          style={[styles.messageIcon, styles.messageIconLayout]}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <View style={[styles.instagramParent, styles.instagramLayout]}>
        <Image
          style={[styles.instagramIcon, styles.instagramLayout]}
          resizeMode="cover"
          source={require("../assets/instagram.png")}
        />
        <Image
          style={styles.spotifyIcon}
          resizeMode="cover"
          source={require("../assets/spotify.png")}
        />
      </View>
      <Image
        style={[styles.s17FinalProfileSwipeOrChild1, styles.messageIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-12.png")}
      />
      <Text style={[styles.home, styles.homePosition]}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    width: 428,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 540,
    width: 326,
    position: "absolute",
  },
  instagramLayout: {
    height: 21,
    position: "absolute",
  },
  groupLayout: {
    height: 18,
    width: 68,
    position: "absolute",
  },
  animeTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    top: 2,
    height: 13,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  homeTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 22,
  },
  homePosition: {
    top: 61,
    position: "absolute",
  },
  messageIconLayout: {
    height: 27,
    width: 27,
  },
  s17FinalProfileSwipeOrChild: {
    height: 217,
    left: 0,
  },
  time: {
    marginTop: -11,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.whitesmoke_100,
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    top: "50%",
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
    right: 4,
    borderRadius: 3,
    backgroundColor: Color.whitesmoke_100,
    height: 9,
    width: 21,
    top: 2,
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
  s17FinalProfileSwipeOrItem: {
    marginLeft: -163,
    top: 688,
    backgroundColor: "#aec48a",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 70,
    width: 326,
    borderRadius: Border.br_7xl,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_7xl,
    height: 540,
    left: 0,
    top: 0,
  },
  s17FinalProfileSwipeOrInner: {
    top: 136,
    left: 51,
  },
  groupIcon: {
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
  sarah19: {
    top: 587,
    fontFamily: FontFamily.poppinsRegular,
    width: 183,
    textAlign: "left",
    height: 21,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: 81,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
  },
  iNeedA: {
    top: 611,
    fontFamily: FontFamily.poppinsExtralight,
    fontWeight: "200",
    height: 21,
    width: 183,
    textAlign: "left",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: 81,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.gainsboro,
    left: 0,
    top: 0,
  },
  anime: {
    left: 9,
    width: 50,
  },
  rectangleParent: {
    top: 643,
    width: 68,
    left: 81,
  },
  kdramas: {
    left: 4,
    width: 59,
  },
  rectangleGroup: {
    left: 156,
    top: 643,
    width: 68,
  },
  match: {
    marginLeft: -81,
    top: 703,
    fontSize: 24,
    color: "#f9f9f9",
    width: 162,
    height: 41,
    left: "50%",
    position: "absolute",
  },
  menuVerticalIcon: {
    width: 26,
    height: 26,
  },
  messageIcon: {
    marginLeft: 310,
  },
  menuVerticalParent: {
    marginLeft: -181,
    flexDirection: "row",
    left: "50%",
  },
  instagramIcon: {
    width: 21,
    left: 0,
    top: 0,
  },
  spotifyIcon: {
    top: 1,
    left: 23,
    width: 20,
    height: 19,
    position: "absolute",
  },
  instagramParent: {
    top: 640,
    left: 318,
    width: 43,
  },
  s17FinalProfileSwipeOrChild1: {
    marginTop: -313,
    marginLeft: 127,
    top: "50%",
    height: 27,
    left: "50%",
    position: "absolute",
  },
  home: {
    left: 160,
    fontSize: 20,
    width: 114,
    height: 28,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 22,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    top: 61,
  },
  s17FinalProfileSwipeOr: {
    backgroundColor: "#292929",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S20;
