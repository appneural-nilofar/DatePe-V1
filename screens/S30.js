import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const S30 = ({navigation}) => {

  return (
    <View style={styles.s22Unmatching}>
      <View style={styles.groupParent}>
        <View style={[styles.groupWrapper, styles.groupLayout3]}>
          <View style={[styles.groupWrapper, styles.groupLayout3]}>
            <Text style={[styles.jhonAbraham, styles.abrahamFlexBox]}>
              Jhon Abraham
            </Text>
            <Text style={[styles.am, styles.amLayout]}>09:25 AM</Text>
            <View style={[styles.vectorParent, styles.groupLayout2]}>
              <Image
                style={[styles.groupChild, styles.groupLayout2]}
                resizeMode="cover"
                source={require("../assets/rectangle-1131.png")}
              />
              <Text style={[styles.helloNazrul, styles.haveAGreatTypo]}>
                Hello ! Nazrul How are you?
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupLayout1]}>
          <View style={[styles.jhonAbrahamGroup, styles.groupLayout1]}>
            <Text style={[styles.jhonAbraham, styles.abrahamFlexBox]}>
              Jhon Abraham
            </Text>
            <Text style={[styles.am1, styles.amLayout]}>09:25 AM</Text>
            <View style={[styles.vectorGroup, styles.vectorPosition]}>
              <Image
                style={[styles.groupItem, styles.groupLayout2]}
                resizeMode="cover"
                source={require("../assets/rectangle-11311.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupLayout2]}
                resizeMode="cover"
                source={require("../assets/rectangle-1132.png")}
              />
              <Text style={[styles.haveAGreat, styles.haveAGreatTypo]}>
                Have a great week!!
              </Text>
              <Text style={[styles.hopeYouLike, styles.wrapperPosition]}>
                Hope you like it
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={styles.amWrapper}>
            <Text style={[styles.am2, styles.am2Typo]}>09:25 AM</Text>
          </View>
          <View style={styles.vectorContainer}>
            <Image
              style={styles.vectorContainer}
              resizeMode="cover"
              source={require("../assets/rectangle-11312.png")}
            />
            <Text style={[styles.youDidYour, styles.am2Typo]}>
              You did your job well!
            </Text>
          </View>
        </View>
        <View style={[styles.groupParent1, styles.groupLayout]}>
          <View style={styles.amWrapper}>
            <Text style={[styles.am2, styles.am2Typo]}>09:25 AM</Text>
          </View>
          <View style={styles.vectorContainer}>
            <Image
              style={styles.vectorContainer}
              resizeMode="cover"
              source={require("../assets/rectangle-11312.png")}
            />
            <Text style={[styles.youDidYour, styles.am2Typo]}>
              You did your job well!
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.johnAbrahamParent}>
        <Text style={[styles.johnAbraham, styles.abrahamFlexBox]}>
          John Abraham
        </Text>
        <Text style={[styles.activeNow, styles.activeNowLayout]}>
          Active now
        </Text>
      </View>
      <View style={[styles.groupParent2, styles.groupLayout3]}>
        <View style={[styles.groupWrapper, styles.groupLayout3]}>
          <View style={[styles.groupWrapper, styles.groupLayout3]}>
            <Text style={[styles.jhonAbraham, styles.abrahamFlexBox]}>
              Jhon Abraham
            </Text>
            <Text style={[styles.am, styles.amLayout]}>09:25 AM</Text>
            <View style={[styles.vectorParent, styles.groupLayout2]}>
              <Image
                style={[styles.groupChild, styles.groupLayout2]}
                resizeMode="cover"
                source={require("../assets/rectangle-1131.png")}
              />
              <Text style={[styles.helloNazrul, styles.haveAGreatTypo]}>
                Hello ! Nazrul How are you?
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupLayout1]}>
          <View style={[styles.jhonAbrahamGroup, styles.groupLayout1]}>
            <Text style={[styles.jhonAbraham, styles.abrahamFlexBox]}>
              Jhon Abraham
            </Text>
            <Text style={[styles.am1, styles.amLayout]}>09:25 AM</Text>
            <View style={[styles.vectorGroup, styles.vectorPosition]}>
              <Image
                style={[styles.groupItem, styles.groupLayout2]}
                resizeMode="cover"
                source={require("../assets/rectangle-11311.png")}
              />
              <Image
                style={[styles.groupInner, styles.groupLayout2]}
                resizeMode="cover"
                source={require("../assets/rectangle-1132.png")}
              />
              <Text style={[styles.haveAGreat, styles.haveAGreatTypo]}>
                Have a great week!!
              </Text>
              <Text style={[styles.hopeYouLike, styles.wrapperPosition]}>
                Hope you like it
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => {{{navigation.navigate('s31')}}}}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-1092.png")}
        />
      </Pressable>
      <Image
        style={styles.s22UnmatchingChild}
        resizeMode="cover"
        source={require("../assets/ellipse-385.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-451.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-451.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-451.png")}
        />
      </View>
      <Image
        style={[styles.s22UnmatchingItem, styles.statusBarPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={[styles.backgroundParent, styles.rectangleViewShadowBox]}>
        <Image
          style={[styles.backgroundIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/background.png")}
        />
        <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
        <Pressable style={styles.youAreNoContainer} onPress={() => {{{navigation.navigate('s31')}}}}>
          <Text style={[styles.youAreNoLongerConnected, styles.timeTypo]}>
            You are no longer connected
          </Text>
        </Pressable>
        <Image
          style={[styles.vectorIcon, styles.capacityLayout]}
          resizeMode="cover"
          source={require("../assets/vector-909.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    width: 428,
    top: 0,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mid,
  },
  capacityLayout: {
    borderRadius: 3,
    position: "absolute",
  },
  groupLayout3: {
    width: 219,
    position: "absolute",
  },
  abrahamFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  amLayout: {
    color: Color.gray_100,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    width: 51,
  },
  groupLayout2: {
    height: 36,
    position: "absolute",
  },
  haveAGreatTypo: {
    color: Color.gray_200,
    left: 13,
    lineHeight: 12,
    letterSpacing: 0.1,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  groupLayout1: {
    height: 126,
    width: 219,
    left: 0,
    position: "absolute",
  },
  vectorPosition: {
    left: 11,
    top: 26,
  },
  wrapperPosition: {
    top: 58,
    position: "absolute",
  },
  groupLayout: {
    height: 54,
    left: 205,
    width: 163,
    position: "absolute",
  },
  am2Typo: {
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  activeNowLayout: {
    lineHeight: 12,
    fontSize: FontSize.size_xs,
  },
  frameLayout: {
    height: 6,
    width: 6,
  },
  rectangleViewShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    marginTop: -11,
    top: "50%",
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.snow,
    left: 0,
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
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    backgroundColor: Color.snow,
    height: 9,
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
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  jhonAbraham: {
    fontSize: FontSize.size_sm,
    lineHeight: 14,
    fontFamily: FontFamily.carosMedium,
    color: Color.white,
    width: 113,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  am: {
    top: 70,
    left: 168,
    width: 51,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    width: 202,
    height: 36,
    left: 0,
    top: 0,
  },
  helloNazrul: {
    width: 184,
    top: 12,
    left: 13,
    position: "absolute",
  },
  vectorParent: {
    width: 202,
    height: 36,
    left: 11,
    top: 26,
  },
  groupWrapper: {
    height: 80,
    left: 0,
    top: 0,
  },
  am1: {
    top: 116,
    left: 77,
    width: 51,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupItem: {
    width: 156,
    left: 0,
    top: 0,
  },
  groupInner: {
    top: 46,
    width: 126,
    left: 0,
  },
  haveAGreat: {
    width: 194,
    top: 12,
    left: 13,
    position: "absolute",
  },
  hopeYouLike: {
    width: 103,
    color: Color.gray_200,
    left: 13,
    lineHeight: 12,
    letterSpacing: 0.1,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  vectorGroup: {
    width: 208,
    height: 82,
    position: "absolute",
  },
  jhonAbrahamGroup: {
    top: 0,
  },
  groupContainer: {
    top: 200,
  },
  am2: {
    width: 51,
    color: Color.gray_100,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    left: 0,
    top: 0,
  },
  amWrapper: {
    top: 44,
    left: 103,
    height: 10,
    width: 51,
    position: "absolute",
  },
  vectorContainer: {
    width: 163,
    height: 36,
    left: 0,
    top: 0,
    position: "absolute",
  },
  youDidYour: {
    left: 4,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 145,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.1,
    textAlign: "right",
    top: 12,
  },
  groupView: {
    top: 110,
  },
  groupParent1: {
    top: 359,
  },
  groupParent: {
    top: 154,
    width: 368,
    height: 413,
    left: 30,
    position: "absolute",
  },
  johnAbraham: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    top: 0,
    color: Color.snow,
  },
  activeNow: {
    top: 22,
    color: "#bad8d4",
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  johnAbrahamParent: {
    top: 63,
    left: 116,
    width: 122,
    height: 34,
    position: "absolute",
  },
  groupParent2: {
    top: 557,
    height: 326,
    left: 30,
  },
  icon: {
    borderRadius: 31,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 60,
    width: 44,
    height: 44,
  },
  s22UnmatchingChild: {
    top: 90,
    left: 94,
    width: 8,
    height: 8,
    position: "absolute",
  },
  frameItem: {
    marginLeft: 5,
  },
  ellipseParent: {
    top: 65,
    left: 367,
    flexDirection: "row",
    position: "absolute",
  },
  s22UnmatchingItem: {
    height: 901,
    left: 0,
  },
  backgroundIcon: {
    bottom: 0,
    borderRadius: Border.br_23xl,
    right: 0,
    left: 0,
    top: 0,
  },
  rectangleView: {
    marginLeft: -29,
    top: 99,
    borderRadius: 40,
    backgroundColor: "#d64d4d",
    shadowRadius: 4,
    elevation: 4,
    width: 57,
    height: 53,
  },
  youAreNoLongerConnected: {
    lineHeight: 20,
    color: "#ededed",
    width: 181,
    fontFamily: FontFamily.poppinsRegular,
  },
  youAreNoContainer: {
    left: 31,
    top: 30,
    position: "absolute",
  },
  vectorIcon: {
    top: 118,
    left: 107,
    width: 30,
    height: 17,
  },
  backgroundParent: {
    marginLeft: -117,
    top: 351,
    shadowRadius: 3,
    elevation: 3,
    width: 244,
    height: 186,
    opacity: 0.9,
    borderRadius: Border.br_23xl,
    overflow: "hidden",
  },
  vectorIcon1: {
    height: "1.94%",
    width: "2.49%",
    top: "7.26%",
    right: "89.92%",
    bottom: "90.79%",
    left: "7.59%",
  },
  s22Unmatching: {
    backgroundColor: Color.bg,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default S30;
