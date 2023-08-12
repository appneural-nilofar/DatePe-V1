import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const S26 = ({navigation}) => {

  return (
    <View style={styles.s21Messages}>
      <Image
        style={[styles.s21MessagesChild, styles.s21MessagesChildPosition]}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <View style={styles.homeIndicator} />
      <Image
        style={styles.menuVerticalIcon}
        resizeMode="cover"
        source={require("../assets/menu-vertical.png")}
      />
      <Image
        style={styles.sortIcon}
        resizeMode="cover"
        source={require("../assets/sort.png")}
      />
      <Image
        style={styles.searchIcon}
        resizeMode="cover"
        source={require("../assets/search.png")}
      />
      <Text style={[styles.search, styles.searchTypo]}>Search</Text>
      <View style={[styles.s21MessagesItem, styles.borderBorder]} />
      <Pressable
        style={[styles.angelDaynaUihut, styles.uihutLayout]}
        
      >
        <Image
          style={[styles.angelDaynaUihutChild, styles.uihutPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-1094.png")}
        />
        <Text style={styles.text}>12/01/23</Text>
        <Image
          style={[styles.angelDaynaUihutItem, styles.uihutItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-385.png")}
        />
        <View style={[styles.text1, styles.textLayout]}>
          <Text style={[styles.angelDayna, styles.johnTypo]}>Angel Dayna</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.angelDaynaUihut1, styles.uihutPosition]}
        onPress={() => {{navigation.navigate('s27')}}}
      >
        <Image
          style={[styles.angelDaynaUihutInner, styles.uihutLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-10941.png")}
        />
        <Text style={[styles.text2, styles.textTypo]}>12/05/23</Text>
        <Image
          style={[styles.angelDaynaUihutItem, styles.uihutItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3851.png")}
          onPress={() => {{navigation.navigate('s27')}}}
        />
        <View style={[styles.text1, styles.textLayout]}>
          <Text style={[styles.angelDayna, styles.johnTypo]}>Angel Dayna</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.alexUihut, styles.uihutLayout]}
        onPress={() => {{navigation.navigate('s27')}}}
      >
        <Image
          style={[styles.angelDaynaUihutChild, styles.uihutPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-1092.png")}
        />
        <Text style={styles.text}>16/06/23</Text>
        <Image
          style={[styles.alexUihutItem, styles.uihutItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3852.png")}
        />
        <View style={[styles.text5, styles.text5Layout]}>
          <Text style={[styles.alexLinderson, styles.text5Layout]}>
            Alex Linderson
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.abrahamUihut, styles.abrahamLayout]}
        onPress={() => {{navigation.navigate('s27')}}}
      >
        <Image
          style={[styles.angelDaynaUihutChild, styles.uihutPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-10921.png")}
        />
        <Text style={[styles.text6, styles.textTypo]}>03/05/23</Text>
        <Image
          style={[styles.abrahamUihutItem, styles.uihutItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3853.png")}
        />
        <View style={[styles.text7, styles.text7Layout]}>
          <Text style={[styles.johnAhraham, styles.text7Layout]}>
            John Ahraham
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.abrahamUihut1, styles.abrahamLayout]}
        onPress={() => {{navigation.navigate('s27')}}}
      >
        <Image
          style={[styles.angelDaynaUihutChild, styles.uihutPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-10921.png")}
        />
        <Text style={[styles.text6, styles.textTypo]}>22/12/22</Text>
        <Image
          style={[styles.abrahamUihutItem, styles.uihutItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3853.png")}
        />
        <View style={[styles.text7, styles.text7Layout]}>
          <Text style={[styles.johnAhraham, styles.text7Layout]}>
            John Ahraham
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.saymaUihut, styles.uihutPosition]}
        onPress={() => {{navigation.navigate('s27')}}}
      >
        <Image
          style={[styles.angelDaynaUihutChild, styles.uihutPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-10921.png")}
        />
        <Image
          style={[styles.angelDaynaUihutChild, styles.uihutPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-1093.png")}
        />
        <Text style={[styles.text10, styles.textTypo]}>13/04/23</Text>
        <Image
          style={[styles.angelDaynaUihutItem, styles.uihutItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3853.png")}
        />
        <View style={[styles.text11, styles.text11Layout]}>
          <Text style={[styles.sabilaSayma, styles.text11Layout]}>
            Sabila Sayma
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.johnUihut, styles.uihutLayout]}
        onPress={() => {{navigation.navigate('s27')}}}
      >
        <Image
          style={[styles.angelDaynaUihutChild, styles.uihutPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-10922.png")}
        />
        <Image
          style={[styles.angelDaynaUihutChild, styles.uihutPosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-10931.png")}
        />
        <Image
          style={styles.uihutPosition1}
          resizeMode="cover"
          source={require("../assets/ellipse-308.png")}
        />
        <Text style={styles.text}>01/03/23</Text>
        <Image
          style={[styles.abrahamUihutItem, styles.uihutItemLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-3854.png")}
        />
        <View style={[styles.text13, styles.text13Layout]}>
          <Text style={[styles.johnBorino, styles.text13Layout]}>
            John Borino
          </Text>
        </View>
      </Pressable>
      <Text style={[styles.messages, styles.searchTypo]}>MESSAGES</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarLayout: {
    width: 428,
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderColor: "#fdf5f5",
    borderStyle: "solid",
    position: "absolute",
  },
  s21MessagesChildPosition: {
    left: 0,
    top: 0,
  },
  searchTypo: {
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  uihutLayout: {
    height: 52,
    position: "absolute",
  },
  uihutPosition1: {
    width: 52,
    height: 52,
    left: 0,
    top: 0,
    position: "absolute",
  },
  uihutItemLayout: {
    height: 8,
    width: 8,
    position: "absolute",
  },
  textLayout: {
    height: 20,
    left: 65,
  },
  johnTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    color: Color.snow,
    left: 0,
    top: 0,
  },
  uihutPosition: {
    left: 32,
    height: 52,
    position: "absolute",
  },
  textTypo: {
    width: 61,
    textAlign: "right",
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    top: 9,
    position: "absolute",
  },
  text5Layout: {
    width: 166,
    position: "absolute",
  },
  abrahamLayout: {
    width: 366,
    height: 52,
    position: "absolute",
  },
  text7Layout: {
    width: 164,
    position: "absolute",
  },
  text11Layout: {
    width: 156,
    position: "absolute",
  },
  text13Layout: {
    width: 133,
    position: "absolute",
  },
  time: {
    marginTop: -11,
    top: "50%",
    fontSize: 17,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    textAlign: "center",
    color: Color.snow,
    lineHeight: 22,
    left: 0,
    width: 54,
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
    top: 0,
  },
  s21MessagesChild: {
    height: 274,
    width: 428,
    position: "absolute",
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
  menuVerticalIcon: {
    top: 67,
    left: 22,
    width: 26,
    height: 26,
    position: "absolute",
  },
  sortIcon: {
    top: 68,
    left: 360,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  searchIcon: {
    top: 152,
    left: 56,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    top: 150,
    left: 82,
    fontSize: 14,
    textTransform: "capitalize",
    color: "rgba(237, 237, 237, 0.75)",
    alignItems: "flex-end",
    width: 91,
    textAlign: "left",
    lineHeight: 20,
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    height: 22,
  },
  s21MessagesItem: {
    marginLeft: -179,
    top: 137,
    borderRadius: 26,
    width: 358,
    height: 48,
    opacity: 0.5,
    left: "50%",
  },
  angelDaynaUihutChild: {
    borderRadius: Border.br_12xl,
  },
  text: {
    width: 60,
    textAlign: "right",
    color: Color.gray_100,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    left: 307,
    top: 9,
    position: "absolute",
  },
  angelDaynaUihutItem: {
    top: 40,
    left: 38,
    width: 8,
  },
  angelDayna: {
    width: 145,
    position: "absolute",
  },
  text1: {
    width: 145,
    position: "absolute",
    top: 9,
    height: 20,
    left: 65,
  },
  angelDaynaUihut: {
    top: 711,
    width: 367,
    height: 52,
    left: 33,
  },
  angelDaynaUihutInner: {
    width: 53,
    borderRadius: Border.br_12xl,
    left: 0,
    top: 0,
  },
  text2: {
    left: 307,
    width: 61,
  },
  angelDaynaUihut1: {
    top: 350,
    width: 368,
  },
  alexUihutItem: {
    top: 42,
    left: 38,
    width: 8,
  },
  alexLinderson: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    color: Color.snow,
    left: 0,
    top: 0,
  },
  text5: {
    top: 10,
    height: 20,
    left: 65,
  },
  alexUihut: {
    top: 256,
    width: 367,
    height: 52,
    left: 33,
  },
  text6: {
    left: 305,
  },
  abrahamUihutItem: {
    top: 41,
    left: 39,
  },
  johnAhraham: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    color: Color.snow,
    left: 0,
    top: 0,
  },
  text7: {
    left: 64,
    height: 20,
    top: 9,
  },
  abrahamUihut: {
    top: 438,
    left: 31,
  },
  abrahamUihut1: {
    top: 802,
    left: 33,
    width: 366,
  },
  text10: {
    left: 304,
  },
  sabilaSayma: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    color: Color.snow,
    left: 0,
    top: 0,
  },
  text11: {
    left: 64,
    height: 20,
    top: 9,
  },
  saymaUihut: {
    top: 529,
    width: 365,
  },
  johnBorino: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    color: Color.snow,
    left: 0,
    top: 0,
  },
  text13: {
    height: 20,
    left: 65,
    top: 9,
  },
  johnUihut: {
    top: 620,
    width: 367,
    height: 52,
    left: 33,
  },
  messages: {
    top: 66,
    left: 138,
    fontSize: 20,
    letterSpacing: 5,
    textTransform: "uppercase",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    alignItems: "center",
    justifyContent: "center",
    width: 152,
    height: 28,
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 22,
  },
  s21Messages: {
    backgroundColor: Color.bg,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S26;
