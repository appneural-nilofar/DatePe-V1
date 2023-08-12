import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const S29 = ({navigation}) => {

  return (
    <View style={styles.s22UnmatchOption}>
      <Image
        style={[styles.s22UnmatchOptionChild, styles.statusBarPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={styles.groupParent}>
        <View style={[styles.groupWrapper, styles.groupLayout3]}>
          <View style={[styles.groupWrapper, styles.groupLayout3]}>
            <Text style={[styles.jhonAbraham, styles.abrahamPosition]}>
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
            <Text style={[styles.jhonAbraham, styles.abrahamPosition]}>
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
          <View style={[styles.amWrapper, styles.amFrameLayout]}>
            <Text style={[styles.am2, styles.am2Typo]}>09:25 AM</Text>
          </View>
          <View style={[styles.vectorContainer, styles.vectorLayout]}>
            <Image
              style={[styles.vectorContainer, styles.vectorLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-11312.png")}
            />
            <Text style={[styles.youDidYour, styles.am2Typo]}>
              You did your job well!
            </Text>
          </View>
        </View>
        <View style={[styles.groupParent1, styles.groupLayout]}>
          <View style={[styles.amWrapper, styles.amFrameLayout]}>
            <Text style={[styles.am2, styles.am2Typo]}>09:25 AM</Text>
          </View>
          <View style={[styles.vectorContainer, styles.vectorLayout]}>
            <Image
              style={[styles.vectorContainer, styles.vectorLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-11312.png")}
            />
            <Text style={[styles.youDidYour, styles.am2Typo]}>
              You did your job well!
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => {{{navigation.navigate('s30')}}}}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-1092.png")}
        />
      </Pressable>
      <View style={styles.johnAbrahamParent}>
        <Text style={[styles.johnAbraham, styles.yes1Typo1]}>John Abraham</Text>
        <Text style={[styles.activeNow, styles.activeNowLayout]}>
          Active now
        </Text>
      </View>
      <View style={styles.groupParent2Position}>
        <View style={[styles.groupFrame, styles.groupLayout3]}>
          <View style={[styles.groupWrapper, styles.groupLayout3]}>
            <Text style={[styles.jhonAbraham, styles.abrahamPosition]}>
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
        <View style={[styles.groupWrapper1, styles.groupLayout1]}>
          <View style={[styles.jhonAbrahamGroup, styles.groupLayout1]}>
            <Text style={[styles.jhonAbraham, styles.abrahamPosition]}>
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
        <View style={styles.groupParent2Position}>
          <View style={[styles.amFrame, styles.amFrameLayout]}>
            <Text style={[styles.am2, styles.am2Typo]}>09:25 AM</Text>
          </View>
          <View style={[styles.vectorParent4, styles.vectorLayout]}>
            <Image
              style={[styles.vectorContainer, styles.vectorLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-11312.png")}
            />
            <Text style={[styles.youDidYour, styles.am2Typo]}>
              You did your job well!
            </Text>
          </View>
          <View style={[styles.rectangleView, styles.groupParent2Position]} />
        </View>
      </View>
      <View style={[styles.frameParent, styles.parentShadowBox]}>
        <View style={[styles.backgroundParent, styles.parentShadowBox]}>
          <Image
            style={[styles.backgroundIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/background.png")}
          />
          <View style={[styles.frameChild, styles.frameShadowBox]} />
          <View style={[styles.frameItem, styles.frameShadowBox]} />
          <Pressable style={styles.areYouSureContainer} onPress={() => {{{navigation.navigate('s29')}}}}>
            <Text style={styles.text}>
              <Text style={styles.are}>{`are `}</Text>you sure?
            </Text>
          </Pressable>
          <Pressable
            style={[styles.yes, styles.yesPosition]}
          >
            <Text style={[styles.yes1, styles.yes1Typo]}
            onPress={() => {{{navigation.navigate('s30')}}}}
            
            >yes</Text>
          </Pressable>
          <Pressable
            style={[styles.notYet, styles.yesPosition]}
          >
            <Text style={[styles.text1, styles.yes1Typo]}>
              <Text style={styles.are}>{`not `}</Text>yet
            </Text>
          </Pressable>
        </View>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-12.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.s22UnmatchOptionItem}
        resizeMode="cover"
        source={require("../assets/ellipse-385.png")}
      />
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameInnerLayout}
          resizeMode="cover"
          source={require("../assets/ellipse-451.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.frameInnerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-451.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.frameInnerLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-451.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    width: 428,
    top: 0,
    position: "absolute",
  },
  groupLayout3: {
    height: 80,
    width: 219,
    position: "absolute",
  },
  abrahamPosition: {
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  amLayout: {
    width: 51,
    color: Color.gray_100,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
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
  amFrameLayout: {
    height: 10,
    width: 51,
    position: "absolute",
  },
  am2Typo: {
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  vectorLayout: {
    width: 163,
    height: 36,
    position: "absolute",
  },
  yes1Typo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  activeNowLayout: {
    lineHeight: 12,
    fontSize: FontSize.size_xs,
  },
  groupParent2Position: {
    height: 940,
    width: 429,
    left: 0,
    top: 0,
    position: "absolute",
  },
  parentShadowBox: {
    width: 244,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginLeft: -122,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  frameShadowBox: {
    height: 53,
    borderRadius: Border.br_21xl,
    top: 107,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  yesPosition: {
    top: 123,
    position: "absolute",
  },
  yes1Typo: {
    letterSpacing: 1.4,
    fontSize: FontSize.size_smi,
    lineHeight: 20,
    textAlign: "center",
  },
  frameInnerLayout: {
    height: 6,
    width: 6,
  },
  s22UnmatchOptionChild: {
    height: 179,
    left: 0,
  },
  time: {
    marginTop: -11,
    top: "50%",
    lineHeight: 22,
    fontFamily: FontFamily.cairoBold,
    textAlign: "center",
    fontSize: FontSize.size_mid,
    color: Color.snow,
    fontWeight: "700",
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
    width: 113,
    color: Color.white,
    fontWeight: "500",
    textAlign: "left",
  },
  am: {
    top: 70,
    left: 168,
    fontFamily: FontFamily.poppinsRegular,
    width: 51,
    color: Color.gray_100,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
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
    left: 0,
    top: 0,
  },
  am1: {
    top: 116,
    left: 77,
    fontFamily: FontFamily.poppinsRegular,
    width: 51,
    color: Color.gray_100,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
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
    left: 0,
    top: 0,
  },
  groupContainer: {
    top: 200,
    left: 0,
  },
  am2: {
    width: 51,
    color: Color.gray_100,
    lineHeight: 10,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    left: 0,
    top: 0,
  },
  amWrapper: {
    top: 44,
    left: 103,
  },
  vectorContainer: {
    left: 0,
    top: 0,
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
  johnAbraham: {
    fontSize: 16,
    lineHeight: 16,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
    color: Color.snow,
    fontFamily: FontFamily.poppinsMedium,
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
  groupFrame: {
    top: 557,
    left: 30,
  },
  groupWrapper1: {
    top: 757,
    left: 30,
  },
  amFrame: {
    top: 711,
    left: 338,
  },
  vectorParent4: {
    top: 667,
    left: 235,
  },
  rectangleView: {
    backgroundColor: "rgba(20, 20, 22, 0.5)",
  },
  backgroundIcon: {
    bottom: 0,
    borderRadius: Border.br_23xl,
    right: 0,
    left: 0,
    top: 0,
  },
  frameChild: {
    marginLeft: -73,
    backgroundColor: "#d64d4d",
    width: 86,
  },
  frameItem: {
    marginLeft: 19,
    backgroundColor: "#2d2d30",
    width: 60,
  },
  are: {
    textTransform: "capitalize",
  },
  text: {
    color: Color.whitesmoke_100,
    lineHeight: 20,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    fontSize: FontSize.size_mid,
  },
  areYouSureContainer: {
    left: 49,
    top: 32,
    position: "absolute",
  },
  yes1: {
    textTransform: "capitalize",
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  yes: {
    left: 158,
  },
  text1: {
    marginLeft: -58,
    fontFamily: FontFamily.poppinsBold,
    color: Color.white,
    fontWeight: "700",
    letterSpacing: 1.4,
    fontSize: FontSize.size_smi,
  },
  notYet: {
    left: "50%",
  },
  backgroundParent: {
    top: 1,
    shadowRadius: 3,
    elevation: 3,
    height: 186,
    opacity: 0.9,
    borderRadius: Border.br_23xl,
    width: 244,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginLeft: -122,
    overflow: "hidden",
  },
  groupIcon: {
    left: 211,
    width: 16,
    height: 16,
    top: 0,
    position: "absolute",
  },
  frameParent: {
    top: 369,
    height: 187,
    elevation: 4,
    shadowRadius: 4,
    width: 244,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    marginLeft: -122,
  },
  vectorIcon: {
    height: "1.94%",
    width: "2.49%",
    top: "7.26%",
    right: "89.92%",
    bottom: "90.79%",
    left: "7.59%",
  },
  s22UnmatchOptionItem: {
    top: 90,
    left: 94,
    width: 8,
    height: 8,
    position: "absolute",
  },
  ellipseIcon: {
    marginLeft: 5,
  },
  ellipseParent: {
    top: 65,
    left: 367,
    flexDirection: "row",
    position: "absolute",
  },
  s22UnmatchOption: {
    backgroundColor: Color.bg,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default S29;
