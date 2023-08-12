import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const S23 = ({navigation}) => {
  return (
    <View style={styles.s19EditMyProfile}>
      <Image
        style={[styles.image2Icon, styles.statusBarPosition]}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={[styles.menuVerticalParent, styles.parentPosition]}>
        <Image
          style={styles.menuVerticalIcon}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
          
        />
        <Image
          style={styles.messageIcon}
          resizeMode="cover"
          source={require("../assets/message.png")}
        />
      </View>
      <View style={styles.s19EditMyProfileItem} />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.timeStyle, styles.timeLayout]}>
        </View>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
      </View>
      {/* <Image
        style={[styles.s19EditMyProfileInner, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-8.png")}
      /> */}
      {/* <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-908.png")}
      /> */}
      <Text style={[styles.sarah19, styles.sarah19Typo]}>Sarah, 19</Text>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <View style={[styles.artistWrapper, styles.wrapperShadowBox]}>
          <Text style={styles.artist}
          onPress={() => {{navigation.navigate('s24')}}}
          >Artist</Text>
        </View>
        <View style={[styles.catLoverWrapper, styles.wrapperShadowBox]}>
          <Text style={styles.artist}>Cat lover</Text>
        </View>
      </View>
      <View style={[styles.designWrapper, styles.designWrapperShadowBox]}>
        <Text style={styles.artist}>Design</Text>
      </View>
      <View style={[styles.artistContainer, styles.designWrapperShadowBox]}>
        <Text style={styles.artist}>Artist</Text>
      </View>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <Text style={[styles.myStory, styles.sarah19Typo]}>My story</Text>
      <Text style={styles.iNeedA}>I need a break</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    width: 428,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  timeClr: {
    color: Color.snow,
    fontSize: FontSize.size_mid,
  },
  rectangleIconLayout: {
    height: 400,
    width: 334,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  sarah19Typo: {
    height: 47,
    width: 163,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
    textTransform: "capitalize",
    textAlign: "left",
    position: "absolute",
  },
  wrapperShadowBox: {
    alignItems: "center",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_lg,
    height: 34,
    width: 87,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  designWrapperShadowBox: {
    top: 618,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: Padding.p_lg,
    height: 34,
    width: 87,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_mini,
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  image2Icon: {
    height: 222,
    left: 0,
  },
  menuVerticalIcon: {
    width: 26,
    height: 26,
  },
  messageIcon: {
    marginLeft: 310,
    height: 27,
    width: 27,
  },
  menuVerticalParent: {
    marginLeft: -181,
    top: 61,
  },
  s19EditMyProfileChild: {
    marginLeft: -188,
    top: 39,
    borderRadius: 42,
    width: 381,
    height: 850,
    opacity: 0.9,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  s19EditMyProfileItem: {
    marginLeft: -156,
    top: 712,
    borderRadius: 24,
    backgroundColor: "rgba(60, 54, 54, 0.5)",
    width: 312,
    height: 131,
    left: "50%",
    position: "absolute",
  },
  time: {
    marginTop: -11,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.cairoBold,
    textAlign: "center",
    top: "50%",
    width: 54,
    position: "absolute",
    left: 0,
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
  s19EditMyProfileInner: {
    marginTop: -385,
    marginLeft: -168,
    top: "50%",
    left: "50%",
  },
  vectorIcon: {
    top: 803,
    left: 335,
    borderRadius: 2,
    width: 16,
    height: 27,
    position: "absolute",
  },
  sarah19: {
    top: 503,
    left: 67,
    fontSize: 32,
    color: "#f9f9f9",
  },
  artist: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.white,
    display: "flex",
    alignItems: "flex-end",
    width: 141,
    height: 14,
    justifyContent: "center",
    textAlign: "center",
  },
  artistWrapper: {
    backgroundColor: "#9797cb",
    justifyContent: "center",
  },
  catLoverWrapper: {
    backgroundColor: "#f5c348",
    marginLeft: 24,
    justifyContent: "center",
  },
  frameParent: {
    marginLeft: -153,
    top: 574,
  },
  designWrapper: {
    left: 61,
    backgroundColor: "#487167",
  },
  artistContainer: {
    left: 162,
    backgroundColor: "#f54848",
  },
  rectangleIcon: {
    top: 78,
    left: 46,
  },
  myStory: {
    top: 673,
    left: 63,
    color: Color.snow,
    fontSize: FontSize.size_mid,
  },
  iNeedA: {
    top: 729,
    left: 75,
    fontSize: 15,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: "rgba(255, 255, 255, 0.6)",
    width: 301,
    height: 268,
    opacity: 0.5,
    textAlign: "left",
    position: "absolute",
  },
  s19EditMyProfile: {
    backgroundColor: Color.bg,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default S23;
