import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const S5OtpFailed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.s5OtpFailed}>
      <Image
        style={[styles.s5OtpFailedChild, styles.borderPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.s5OtpFailedItem, styles.otpLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <View style={[styles.s5OtpFailedInner, styles.otpPosition]} />
      <Text style={[styles.enterOtp, styles.enterOtpPosition]}>Enter OTP</Text>
      <Text style={[styles.errorTryAgain, styles.enterOtpPosition]}>
        Error.. try again
      </Text>
      <View style={styles.alphabeticKeyboardIphone}>
        <View style={[styles.background, styles.keyLightPosition]} />
        <View
          style={[styles.keyAndSuggestions, styles.keyAndSuggestionsSpaceBlock]}
        >
          <View
            style={[styles.keyboardSuggestionIphone, styles.buttonsFlexBox]}
          >
            <Text style={[styles.suggestion, styles.symbolClr1]}>“design”</Text>
            <View style={styles.dividerLayout} />
            <Text style={[styles.suggestion, styles.symbolClr1]}>Design</Text>
            <View style={styles.dividerLayout} />
            <Text style={[styles.suggestion, styles.symbolClr1]}>Designer</Text>
          </View>
          <View style={styles.keyButtons}>
            <View style={styles.keys}>
              <View style={[styles.return, styles.viewPosition]}>
                <Image
                  style={[styles.rectangleIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle.png")}
                />
                <Text style={[styles.label, styles.labelPosition]}>return</Text>
              </View>
              <View style={[styles.space, styles.viewPosition]}>
                <Image
                  style={[styles.rectangleIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle1.png")}
                />
                <Text style={[styles.label1, styles.labelPosition]}>space</Text>
              </View>
              <View style={[styles.view, styles.viewPosition]}>
                <Image
                  style={[styles.rectangleIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle2.png")}
                />
                <Text style={[styles.label, styles.labelPosition]}>123</Text>
              </View>
              <View style={[styles.delete, styles.mPosition1]}>
                <View style={[styles.keyLight, styles.keyLightPosition]}>
                  <Image
                    style={[styles.rectangleIcon, styles.iconLayout]}
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
                  <Text style={[styles.symbol, styles.symbolClr]}>{` `}</Text>
                </View>
                <Image
                  style={styles.shiftIcon}
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
                style={[styles.vectorIcon, styles.gPosition]}
                resizeMode="cover"
                source={require("../assets/vector.png")}
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
                <Text style={styles.text}>􀎸</Text>
                <Text style={styles.text}>􀊰</Text>
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
          <View style={[styles.homeIndicator, styles.statusBarPosition]} />
        </View>
      </View>
      <Pressable style={styles.almostThere} onPress={() => {}}>
        <Text style={[styles.almostThere1, styles.symbolClr]}>
          Almost there...
        </Text>
      </Pressable>
      <Image
        style={[styles.s5OtpFailedChild1, styles.otpPosition]}
        resizeMode="cover"
        source={require("../assets/vector-14.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: "absolute",
  },
  otpLayout: {
    borderRadius: Border.br_14xl,
    left: "50%",
  },
  otpPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  enterOtpPosition: {
    opacity: 0.4,
    height: 28,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  statusBarPosition: {
    left: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderColor: "#292929",
    borderStyle: "solid",
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
  symbolClr1: {
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    textAlign: "center",
  },
  viewPosition: {
    top: "79.41%",
    height: "20.59%",
    bottom: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  labelPosition: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.sFProRegular,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    marginTop: -10,
    textAlign: "center",
    top: "50%",
    left: 0,
    position: "absolute",
  },
  mPosition1: {
    bottom: "26.47%",
    top: "52.94%",
    height: "20.59%",
    position: "absolute",
  },
  symbolClr: {
    color: Color.black,
    textAlign: "center",
  },
  mPosition: {
    left: "76.17%",
    right: "15.23%",
  },
  symbolPosition: {
    fontSize: FontSize.size_3xl,
    marginTop: -13,
    fontFamily: FontFamily.sFProRegular,
    top: "50%",
    left: 0,
    position: "absolute",
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
  s5OtpFailedChild: {
    height: 381,
    width: 428,
    left: 0,
  },
  s5OtpFailedItem: {
    marginLeft: -122.5,
    top: 278,
    width: 250,
    height: 76,
    position: "absolute",
  },
  s5OtpFailedInner: {
    marginLeft: -177,
    top: 151,
    width: 353,
    height: 81,
    borderWidth: 1,
    borderColor: "#292929",
    borderStyle: "solid",
    borderRadius: Border.br_14xl,
    left: "50%",
  },
  enterOtp: {
    marginLeft: -144,
    top: 175,
    fontSize: 24,
    width: 133,
    color: Color.gray,
    opacity: 0.4,
    height: 28,
    fontFamily: FontFamily.poppinsRegular,
  },
  errorTryAgain: {
    marginLeft: -163,
    top: 113,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#da4949",
    width: 223,
    fontSize: FontSize.size_xl,
  },
  time: {
    marginTop: -11,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    top: "50%",
    width: 54,
    color: Color.gray,
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
    width: 25,
    opacity: 0.35,
    height: 13,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 5,
    height: 4,
    width: 1,
    right: 0,
    opacity: 0.4,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 3,
    height: 9,
    width: 21,
    position: "absolute",
    backgroundColor: Color.gray,
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
    top: 1,
    height: 58,
    width: 428,
  },
  background: {
    zIndex: 0,
    backgroundColor: Color.darkslategray,
    left: "0%",
  },
  suggestion: {
    letterSpacing: 0,
    fontFamily: FontFamily.sFProTextRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  dividerLayout: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 25,
    backgroundColor: Color.systemColoursDefaultColorsSystemGrey2Dark,
    borderRadius: Border.br_12xs,
    width: 1,
    opacity: 0.5,
  },
  keyboardSuggestionIphone: {
    paddingHorizontal: 29,
    paddingVertical: 13,
    alignItems: "center",
    backgroundColor: Color.darkslategray,
  },
  rectangleIcon: {
    bottom: -1,
    borderRadius: Border.br_8xs_6,
    maxWidth: "100%",
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
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
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#000",
    bottom: 0,
    borderRadius: Border.br_8xs_6,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  symbol: {
    fontSize: FontSize.size_3xl,
    marginTop: -13,
    fontFamily: FontFamily.sFProRegular,
    top: "50%",
    left: 0,
    position: "absolute",
    width: 48,
  },
  shiftIcon: {
    marginTop: -8,
    marginLeft: -10.18,
    width: 20,
    height: 16,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  shift: {
    right: "88.54%",
    width: "11.46%",
    top: "52.94%",
    left: "0%",
  },
  rectangleShadowBox: {
    backgroundColor: Color.dimgray_100,
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#000",
    bottom: 0,
    borderRadius: Border.br_8xs_6,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  symbol1: {
    width: 36,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    textAlign: "center",
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
  vectorIcon: {
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
    textAlign: "center",
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
    width: 35,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    textAlign: "center",
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
  text: {
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
    alignItems: "center",
    alignSelf: "stretch",
  },
  keyAndSuggestions: {
    zIndex: 1,
    alignItems: "center",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    borderRadius: 100,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
  },
  homeIndicatorIphone: {
    height: 34,
    zIndex: 2,
  },
  alphabeticKeyboardIphone: {
    top: 595,
    height: 365,
    width: 428,
    left: 0,
    position: "absolute",
  },
  almostThere1: {
    width: 167,
    height: 37,
    opacity: 0.3,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.black,
  },
  almostThere: {
    left: 133,
    top: 297,
    position: "absolute",
  },
  s5OtpFailedChild1: {
    top: 456,
    width: 18,
    height: 15,
    left: 0,
  },
  s5OtpFailed: {
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.gray,
  },
});

export default S5OtpFailed;
