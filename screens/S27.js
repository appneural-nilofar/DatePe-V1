import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const S27 = ({navigation}) => {

  return (
    <View style={styles.s22ChatBox}>
      <Image
        style={[styles.s22ChatBoxChild, styles.s22ChatBoxChildPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
        onPress={() => {{navigation.navigate('s28')}}}
      />
      <View style={styles.groupParent}>
        <View style={styles.groupWrapper}>
          <View style={styles.groupWrapper}>
            <Text style={styles.jhonAbraham}>Jhon Abraham</Text>
            <Text style={[styles.am, styles.amLayout]}>09:25 AM</Text>
            <View style={[styles.vectorParent, styles.groupLayout2]}>
              <Image
                style={[styles.groupChild, styles.groupLayout2]}
                resizeMode="cover"
                source={require("../assets/rectangle-1131.png")}
              />
              <Text style={[styles.helloNazrul, styles.haveAGreatTypo]}
              onPress={() => {{navigation.navigate('s28')}}}
              >
                Hello ! Nazrul How are you?
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupContainer, styles.groupLayout1]}>
          <View style={[styles.jhonAbrahamGroup, styles.groupLayout1]}>
            <Text style={styles.jhonAbraham}
            
            >Jhon Abraham</Text>
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
      <View
        style={[
          styles.alphabeticKeyboardIphone,
          styles.s22ChatBoxChildPosition,
        ]}
      >
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
                  style={styles.rectangleIcon1}
                  resizeMode="cover"
                  source={require("../assets/rectangle.png")}
                />
                <Text style={[styles.label, styles.labelPosition]}>return</Text>
              </View>
              <View style={[styles.space, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon1}
                  resizeMode="cover"
                  source={require("../assets/rectangle1.png")}
                />
                <Text style={[styles.label1, styles.labelPosition]}>space</Text>
              </View>
              <View style={[styles.view, styles.viewPosition]}>
                <Image
                  style={styles.rectangleIcon1}
                  resizeMode="cover"
                  source={require("../assets/rectangle2.png")}
                />
                <Text style={[styles.label, styles.labelPosition]}>123</Text>
              </View>
              <View style={[styles.delete, styles.mPosition1]}>
                <View style={[styles.keyLight, styles.keyLightPosition]}>
                  <Image
                    style={styles.rectangleIcon1}
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
                style={[styles.vectorIcon1, styles.gPosition]}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
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
          <View style={[styles.homeIndicator2, styles.homeLayout]} />
        </View>
      </View>
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-1092.png")}
        />
      </Pressable>
      <Image
        style={styles.s22ChatBoxItem}
        resizeMode="cover"
        source={require("../assets/ellipse-385.png")}
      />
      <View style={styles.johnAbrahamParent}>
        <Text style={styles.johnAbraham}>John Abraham</Text>
        <Text style={[styles.activeNow, styles.activeNowLayout]}>
          Active now
        </Text>
      </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  s22ChatBoxChildPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
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
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  keyLightPosition: {
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
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
    fontSize: FontSize.size_base,
    marginTop: -10,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
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
  symbolPosition: {
    fontSize: FontSize.size_3xl,
    marginTop: -13,
    fontFamily: FontFamily.sFProRegular,
    textAlign: "center",
    top: "50%",
    left: 0,
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
  activeNowLayout: {
    lineHeight: 12,
    fontSize: FontSize.size_xs,
  },
  frameLayout: {
    height: 6,
    width: 6,
  },
  s22ChatBoxChild: {
    height: 179,
    top: 0,
  },
  time: {
    marginTop: -11,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    color: Color.snow,
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
    width: 428,
    top: 0,
    position: "absolute",
  },
  homeIndicator: {
    bottom: 3,
  },
  vectorIcon: {
    height: "1.94%",
    width: "2.49%",
    top: "7.26%",
    right: "89.92%",
    bottom: "90.79%",
    left: "7.59%",
    position: "absolute",
  },
  jhonAbraham: {
    fontSize: FontSize.size_sm,
    lineHeight: 14,
    fontFamily: FontFamily.carosMedium,
    color: Color.white,
    width: 113,
    textAlign: "left",
    fontWeight: "500",
    left: 0,
    top: 0,
    position: "absolute",
  },
  am: {
    top: 70,
    left: 168,
    width: 51,
    fontFamily: FontFamily.poppinsRegular,
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
    height: 80,
    width: 219,
    left: 0,
    top: 0,
    position: "absolute",
  },
  am1: {
    top: 116,
    left: 77,
    width: 51,
    fontFamily: FontFamily.poppinsRegular,
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
    textAlign: "right",
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
    width: 145,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
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
    left: 32,
    width: 368,
    height: 413,
    position: "absolute",
  },
  background: {
    zIndex: 0,
    backgroundColor: Color.darkslategray,
    left: "0%",
  },
  suggestion: {
    letterSpacing: 0,
    fontFamily: FontFamily.sFProTextRegular,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_mid,
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
    alignItems: "center",
    backgroundColor: Color.darkslategray,
  },
  rectangleIcon1: {
    bottom: -1,
    borderRadius: Border.br_8xs_6,
    maxHeight: "100%",
    maxWidth: "100%",
    right: 0,
    left: 0,
    top: 0,
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
    color: "#000",
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
  vectorIcon1: {
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
    width: 35,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
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
  homeIndicator2: {
    bottom: 8,
  },
  homeIndicatorIphone: {
    zIndex: 2,
    height: 34,
  },
  alphabeticKeyboardIphone: {
    top: 595,
    height: 365,
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
  s22ChatBoxItem: {
    top: 90,
    left: 94,
    width: 8,
    height: 8,
    position: "absolute",
  },
  johnAbraham: {
    lineHeight: 16,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontWeight: "500",
    color: Color.snow,
    left: 0,
    top: 0,
    position: "absolute",
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
  frameItem: {
    marginLeft: 5,
  },
  ellipseParent: {
    top: 65,
    left: 367,
    flexDirection: "row",
    position: "absolute",
  },
  s22ChatBox: {
    backgroundColor: Color.bg,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default S27;
