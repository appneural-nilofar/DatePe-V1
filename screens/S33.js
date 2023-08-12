import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const S33 = ({navigation}) => {

  return (
    <View style={styles.s23Typing}>
      <View style={[styles.rectangleParent, styles.parentShadowBox]}>
        <View style={styles.frameChild} />
        <LinearGradient
          style={[styles.frameItem, styles.capacityLayout]}
          locations={[0, 1]}
          colors={["rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0)"]}
          useAngle={true}
          angle={180}
        />
      </View>
      <View style={[styles.vectorParent, styles.parentShadowBox]}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Text style={styles.chat}>chat</Text>
      </View>
      <View style={[styles.logOutWrapper, styles.groupParentShadowBox]}>
        <Text style={[styles.logOut, styles.emailLayout]}>Log out</Text>
      </View>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.settings}>Settings</Text>
      <Pressable
        style={[styles.groupParent, styles.groupParentShadowBox]}
        onPress={() => {{{navigation.navigate('s34')}}}}
      >
        <Image
          style={styles.frameInner}
          resizeMode="cover"
          source={require("../assets/group-26.png")}
        />
        <Text style={styles.username}>Username</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={styles.age19}>Age: 19</Text>
      </Pressable>
      <Text style={[styles.accountSettings, styles.emailLayout]}>
        ACCOUNT SETTINGS
      </Text>
      <Text style={[styles.contactUs, styles.emailLayout]}>cONTACT US</Text>
      <Text style={styles.phoneNumber}>Phone number</Text>
      <Text style={[styles.text, styles.textTypo]}>9800786743|</Text>
      <Text style={[styles.wxrrs343gmailcom, styles.textTypo]}>
        wxrrs343@gmail.com
      </Text>
      <Pressable
        style={[styles.privacy, styles.emailPosition]}
        onPress={() => {{{navigation.navigate('s34')}}}}
      >
        <Text style={[styles.privacy1, styles.emailLayout]}>Privacy</Text>
      </Pressable>
      <Text style={[styles.email, styles.emailPosition]}>email</Text>
      <Text style={[styles.notifications, styles.emailPosition]}>
        notifications
      </Text>
      <View style={[styles.alphabeticKeyboardIphone, styles.timePosition]}>
        <View style={[styles.background, styles.keyLightPosition]} />
        <View
          style={[styles.keyAndSuggestions, styles.keyAndSuggestionsSpaceBlock]}
        >
          <View
            style={[styles.keyboardSuggestionIphone, styles.buttonsFlexBox]}
          >
            <Text style={[styles.suggestion, styles.timeTypo]}>“design”</Text>
            <View style={styles.dividerLayout} />
            <Text style={[styles.suggestion, styles.timeTypo]}>Design</Text>
            <View style={styles.dividerLayout} />
            <Text style={[styles.suggestion, styles.timeTypo]}>Designer</Text>
          </View>
          <View style={styles.keyButtons}>
            <View style={styles.keys}>
              <View style={[styles.return, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle.png")}
                />
                <Text style={[styles.label, styles.labelPosition]}>return</Text>
              </View>
              <View style={[styles.space, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle1.png")}
                />
                <Text style={[styles.label1, styles.labelPosition]}>space</Text>
              </View>
              <View style={[styles.view, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon}
                  resizeMode="cover"
                  source={require("../assets/rectangle2.png")}
                />
                <Text style={[styles.label, styles.labelPosition]}>123</Text>
              </View>
              <View style={[styles.delete, styles.mPosition1]}>
                <View style={[styles.keyLight, styles.keyLightPosition]}>
                  <Image
                    style={styles.rectangleIcon}
                    resizeMode="cover"
                    source={require("../assets/rectangle3.png")}
                  />
                  <Text
                    style={[styles.label3, styles.labelPosition]}
                  >{` `}</Text>
                </View>
                <Image
                  style={styles.deleteButtonIcon}
                  resizeMode="cover"
                  source={require("../assets/delete-button.png")}
                />
              </View>
              <View style={[styles.shift, styles.mPosition1]}>
                <View style={[styles.keyLight, styles.keyLightPosition]}>
                  <View style={styles.rectangle} />
                  <Text
                    style={[styles.symbol, styles.symbolPosition]}
                  >{` `}</Text>
                </View>
                <Image
                  style={[styles.shiftIcon, styles.statusBarPosition]}
                  resizeMode="cover"
                  source={require("../assets/shift.png")}
                />
              </View>
              <View style={[styles.m, styles.mPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>M</Text>
              </View>
              <View style={[styles.n, styles.nPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>N</Text>
              </View>
              <View style={[styles.b, styles.bPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>B</Text>
              </View>
              <Image
                style={[styles.vectorIcon3, styles.gPosition]}
                resizeMode="cover"
                source={require("../assets/vector3.png")}
              />
              <View style={[styles.c, styles.mPosition1]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>C</Text>
              </View>
              <View style={[styles.x, styles.mPosition1]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>X</Text>
              </View>
              <View style={[styles.z, styles.mPosition1]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol6, styles.symbolPosition]}>Z</Text>
              </View>
              <View style={[styles.l, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>L</Text>
              </View>
              <View style={[styles.k, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>K</Text>
              </View>
              <View style={[styles.j, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>J</Text>
              </View>
              <View style={[styles.h, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>H</Text>
              </View>
              <View style={[styles.g, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>G</Text>
              </View>
              <View style={[styles.f, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>F</Text>
              </View>
              <View style={[styles.d, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>D</Text>
              </View>
              <View style={[styles.s, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>S</Text>
              </View>
              <View style={[styles.a, styles.lPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>A</Text>
              </View>
              <View style={[styles.p, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>P</Text>
              </View>
              <View style={[styles.o, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>O</Text>
              </View>
              <View style={[styles.i, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>I</Text>
              </View>
              <View style={[styles.u, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol19, styles.symbolPosition]}>U</Text>
              </View>
              <View style={[styles.y, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>Y</Text>
              </View>
              <View style={[styles.t, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>T</Text>
              </View>
              <View style={[styles.r, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>R</Text>
              </View>
              <View style={[styles.e, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>E</Text>
              </View>
              <View style={[styles.w, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>W</Text>
              </View>
              <View style={[styles.q, styles.pPosition]}>
                <View style={styles.rectangleShadowBox} />
                <Text style={[styles.symbol1, styles.symbolPosition]}>Q</Text>
              </View>
            </View>
            <View style={styles.button}>
              <View style={styles.buttonsFlexBox}>
                <Text style={styles.text1}>􀎸</Text>
                <Text style={styles.text1}>􀊰</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.homeIndicatorIphone,
            styles.keyAndSuggestionsSpaceBlock,
          ]}
        >
          <View style={[styles.homeIndicator2, styles.homeLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentShadowBox: {
    opacity: 0.9,
    width: 380,
    elevation: 3,
    shadowRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.gray_100,
    borderRadius: Border.br_7xl,
    left: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    position: "absolute",
    overflow: "hidden",
  },
  capacityLayout: {
    borderRadius: 3,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupParentShadowBox: {
    backgroundColor: Color.primary,
    opacity: 0.9,
    width: 380,
    shadowOpacity: 1,
    elevation: 3,
    shadowRadius: 3,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  emailLayout: {
    width: 272,
    height: 22,
    alignItems: "flex-end",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    lineHeight: 20,
  },
  statusBarPosition: {
    left: "50%",
    position: "absolute",
  },
  timeTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    textAlign: "center",
  },
  homeLayout: {
    height: 5,
    width: 134,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    borderRadius: Border.br_81xl,
    marginLeft: -67,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
    width: 169,
    height: 22,
    alignItems: "flex-end",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  emailPosition: {
    left: 45,
    position: "absolute",
  },
  timePosition: {
    left: 0,
    position: "absolute",
  },
  keyLightPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  keyAndSuggestionsSpaceBlock: {
    marginTop: -10,
    alignSelf: "stretch",
  },
  buttonsFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  viewPosition: {
    top: "79.41%",
    height: "20.59%",
    bottom: "0%",
    position: "absolute",
  },
  labelPosition: {
    lineHeight: 21,
    fontFamily: FontFamily.sFProRegular,
    marginTop: -10,
    fontSize: FontSize.size_base,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: 0,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  mPosition1: {
    bottom: "26.47%",
    top: "52.94%",
    height: "20.59%",
    position: "absolute",
  },
  symbolPosition: {
    fontSize: FontSize.size_3xl,
    marginTop: -13,
    fontFamily: FontFamily.sFProRegular,
    left: 0,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  mPosition: {
    left: "76.17%",
    right: "15.23%",
  },
  nPosition: {
    left: "66.02%",
    right: "25.39%",
  },
  bPosition: {
    left: "55.86%",
    right: "35.55%",
  },
  gPosition: {
    left: "45.7%",
    right: "45.7%",
  },
  lPosition: {
    bottom: "52.94%",
    top: "26.47%",
    width: "8.59%",
    height: "20.59%",
    position: "absolute",
  },
  pPosition: {
    bottom: "79.41%",
    height: "20.59%",
    top: "0%",
    position: "absolute",
  },
  frameChild: {
    top: 126,
    borderRadius: 5,
    backgroundColor: "rgba(54, 55, 60, 0.43)",
    height: 16,
    width: 35,
    left: 321,
    position: "absolute",
  },
  frameItem: {
    top: 123,
    backgroundColor: "transparent",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 4,
    elevation: 4,
    width: 15,
    height: 21,
    left: 321,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    borderRadius: 3,
  },
  rectangleParent: {
    top: 288,
    height: 156,
  },
  vectorIcon: {
    height: "31.71%",
    width: "2.67%",
    top: "34%",
    right: "4.7%",
    bottom: "34.29%",
    left: "92.63%",
    position: "absolute",
  },
  chat: {
    height: "44%",
    width: "71.58%",
    top: "22%",
    left: "5.53%",
    alignItems: "flex-end",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorParent: {
    top: 510,
    height: 50,
  },
  logOut: {
    left: 54,
    height: 22,
    justifyContent: "center",
    textAlign: "center",
    width: 272,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    top: 14,
    position: "absolute",
  },
  logOutWrapper: {
    top: 856,
    borderRadius: 25,
    height: 50,
  },
  time: {
    marginTop: -11,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.snow,
    left: 0,
    position: "absolute",
    top: "50%",
    width: 54,
  },
  timeStyle: {
    top: 19,
    left: 43,
    width: 54,
    height: 22,
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
    height: 4,
    opacity: 0.4,
    width: 1,
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
    right: 33,
    width: 27,
    height: 13,
    top: 23,
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
    bottom: 3,
  },
  vectorIcon1: {
    height: "1.94%",
    width: "2.49%",
    top: "7.26%",
    right: "89.92%",
    bottom: "90.79%",
    left: "7.59%",
    position: "absolute",
  },
  settings: {
    top: 64,
    left: 138,
    letterSpacing: 5,
    textTransform: "uppercase",
    width: 152,
    height: 28,
    alignItems: "center",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontSize: FontSize.size_xl,
    lineHeight: 22,
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  frameInner: {
    left: 11,
    width: 67,
    height: 67,
    top: 14,
    position: "absolute",
  },
  username: {
    left: 90,
    width: 174,
    color: Color.white,
    fontSize: FontSize.size_xl,
    top: 23,
    height: 22,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
    lineHeight: 20,
    position: "absolute",
  },
  vectorIcon2: {
    height: "16.51%",
    width: "2.9%",
    top: "34.61%",
    right: "5.32%",
    bottom: "48.87%",
    left: "91.78%",
    position: "absolute",
  },
  age19: {
    marginTop: -3,
    marginLeft: -100,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    width: 64,
    height: 31,
    fontSize: FontSize.size_base,
    color: Color.white,
    top: "50%",
    left: "50%",
    textAlign: "left",
    textTransform: "capitalize",
    position: "absolute",
  },
  groupParent: {
    top: 136,
    borderRadius: 33,
    height: 96,
  },
  accountSettings: {
    top: 261,
    left: 32,
    height: 22,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    width: 272,
    textAlign: "left",
    position: "absolute",
  },
  contactUs: {
    top: 473,
    left: 31,
    height: 22,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    width: 272,
    textAlign: "left",
    position: "absolute",
  },
  phoneNumber: {
    width: 169,
    left: 45,
    top: 300,
    height: 22,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.whitesmoke_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textTransform: "capitalize",
    lineHeight: 20,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text: {
    left: 210,
    top: 300,
    textAlign: "right",
    fontFamily: FontFamily.poppinsRegular,
  },
  wxrrs343gmailcom: {
    top: 371,
    left: 213,
  },
  privacy1: {
    height: 22,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    width: 272,
  },
  privacy: {
    top: 334,
  },
  email: {
    top: 370,
    height: 22,
    width: 272,
    alignItems: "flex-end",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  notifications: {
    top: 405,
    height: 22,
    width: 272,
    alignItems: "flex-end",
    display: "flex",
    color: Color.whitesmoke_100,
    textTransform: "capitalize",
    lineHeight: 20,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  background: {
    zIndex: 0,
    backgroundColor: Color.darkslategray_100,
    left: "0%",
  },
  suggestion: {
    letterSpacing: 0,
    fontFamily: FontFamily.sFProTextRegular,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  dividerLayout: {
    opacity: 0.5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 25,
    backgroundColor: Color.systemColoursDefaultColorsSystemGrey2Dark,
    borderRadius: Border.br_12xs,
    width: 1,
  },
  keyboardSuggestionIphone: {
    paddingHorizontal: 29,
    paddingVertical: 13,
    backgroundColor: Color.darkslategray_100,
    alignItems: "center",
  },
  rectangleIcon: {
    bottom: -1,
    borderRadius: Border.br_8xs_6,
    right: 0,
    left: 0,
    top: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  label: {
    width: 100,
    fontFamily: FontFamily.sFProRegular,
  },
  return: {
    left: "76.3%",
    width: "23.7%",
    top: "79.41%",
    height: "20.59%",
    right: "0%",
  },
  label1: {
    width: 209,
    fontFamily: FontFamily.sFProRegular,
  },
  space: {
    width: "49.48%",
    right: "25.26%",
    left: "25.26%",
    top: "79.41%",
    height: "20.59%",
  },
  view: {
    right: "76.3%",
    width: "23.7%",
    top: "79.41%",
    height: "20.59%",
    left: "0%",
  },
  label3: {
    width: 48,
    fontFamily: FontFamily.sFProRegular,
  },
  keyLight: {
    left: "0%",
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  delete: {
    left: "88.54%",
    width: "11.46%",
    top: "52.94%",
    right: "0%",
  },
  rectangle: {
    backgroundColor: "#d6d6d6",
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#000",
    bottom: 0,
    borderRadius: Border.br_8xs_6,
    right: 0,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    position: "absolute",
  },
  symbol: {
    color: "#000",
    width: 48,
  },
  shiftIcon: {
    marginTop: -8,
    marginLeft: -10.18,
    width: 20,
    top: "50%",
    height: 16,
  },
  shift: {
    right: "88.54%",
    width: "11.46%",
    top: "52.94%",
    left: "0%",
  },
  rectangleShadowBox: {
    backgroundColor: Color.dimgray_100,
    elevation: 0,
    shadowRadius: 0,
    shadowColor: "#000",
    bottom: 0,
    borderRadius: Border.br_8xs_6,
    right: 0,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 0,
    },
    position: "absolute",
  },
  symbol1: {
    width: 36,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  m: {
    width: "8.59%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.59%",
    position: "absolute",
  },
  n: {
    width: "8.59%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.59%",
    position: "absolute",
  },
  b: {
    width: "8.59%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.59%",
    position: "absolute",
  },
  vectorIcon3: {
    width: "8.59%",
    bottom: "26.47%",
    top: "52.94%",
    height: "20.59%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  c: {
    right: "55.99%",
    left: "35.42%",
    width: "8.59%",
  },
  x: {
    right: "66.15%",
    width: "8.59%",
    left: "25.26%",
  },
  symbol6: {
    width: 37,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  z: {
    width: "8.85%",
    right: "76.04%",
    left: "15.1%",
  },
  l: {
    right: "5.08%",
    left: "86.33%",
  },
  k: {
    left: "76.17%",
    right: "15.23%",
  },
  j: {
    left: "66.02%",
    right: "25.39%",
  },
  h: {
    left: "55.86%",
    right: "35.55%",
  },
  g: {
    left: "45.7%",
    right: "45.7%",
  },
  f: {
    right: "55.86%",
    left: "35.55%",
  },
  d: {
    right: "66.02%",
    left: "25.39%",
  },
  s: {
    right: "76.17%",
    left: "15.23%",
  },
  a: {
    right: "86.33%",
    left: "5.08%",
  },
  p: {
    left: "91.41%",
    width: "8.59%",
    right: "0%",
  },
  o: {
    right: "10.16%",
    left: "81.25%",
    width: "8.59%",
  },
  i: {
    right: "20.31%",
    left: "71.09%",
    width: "8.59%",
  },
  symbol19: {
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 35,
  },
  u: {
    width: "8.33%",
    right: "30.47%",
    left: "61.2%",
  },
  y: {
    right: "40.63%",
    left: "50.78%",
    width: "8.59%",
  },
  t: {
    right: "50.78%",
    left: "40.62%",
    width: "8.59%",
  },
  r: {
    right: "60.94%",
    left: "30.47%",
    width: "8.59%",
  },
  e: {
    right: "71.09%",
    left: "20.31%",
    width: "8.59%",
  },
  w: {
    right: "81.25%",
    left: "10.16%",
    width: "8.59%",
  },
  q: {
    right: "91.41%",
    width: "8.59%",
    left: "0%",
  },
  keys: {
    height: 204,
    alignSelf: "stretch",
  },
  text1: {
    fontSize: FontSize.size_8xl,
    color: Color.gainsboro,
    fontFamily: FontFamily.sFProRegular,
    textAlign: "left",
  },
  button: {
    paddingHorizontal: 23,
    paddingVertical: 0,
    marginTop: 22,
    alignSelf: "stretch",
  },
  keyButtons: {
    paddingHorizontal: 3,
    paddingTop: 9,
    marginTop: -9,
    alignSelf: "stretch",
    alignItems: "center",
  },
  keyAndSuggestions: {
    zIndex: 1,
    alignItems: "center",
  },
  homeIndicator2: {
    bottom: 8,
  },
  homeIndicatorIphone: {
    height: 34,
    zIndex: 2,
  },
  alphabeticKeyboardIphone: {
    top: 595,
    height: 365,
    width: 428,
  },
  s23Typing: {
    backgroundColor: Color.bg,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default S33;
