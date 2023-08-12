import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Border, FontFamily, Color } from "../GlobalStyles";

const S8 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <Image
          style={[styles.image2Icon, styles.image2IconPosition]}
          resizeMode="cover"
          source={require("../assets/image-2.png")}
        />
        <Image
          style={[styles.s7P2AnimationItem, styles.animationPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-4.png")}
          onPress={() => {
            // navigation.navigate('s9')
          }}
        />
        {/* <Image
      style={[styles.s7P2AnimationInner, styles.image2IconPosition]}
      resizeMode="cover"
      source={require("../assets/vector-2.png")}
      onPress={() => {
        navigation.navigate('s9')
      }}
    /> */}
        <Image
          style={[styles.ellipseIcon, styles.ellipseIconLayout]}
          resizeMode="cover"
          source={require("../assets/ellipse-17.png")}
        />
        <Image
          style={styles.s7P2AnimationChild1}
          resizeMode="cover"
          source={require("../assets/ellipse-18.png")}
        />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-3.png")}
        />
        <Text
          style={styles.thankYouText}
          onPress={() => {
            navigation.navigate("s9");
          }}
        >
          Thank you!
        </Text>
        <Text style={styles.waitlistText}>You're on the wait list</Text>
      </View>
      <View style={styles.bottomTextView}>
        <Text style={styles.bottomText}>You are now part of something</Text>
        <Text style={[styles.bottomText, styles.marginBottomText]}>
          this much bigger now
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-17.png")}
        />
        <Image
          style={styles.s7P2AnimationChild6}
          resizeMode="cover"
          source={require("../assets/vector-18.png")}
        />
        <Image
          style={[styles.s7P2AnimationChild7, styles.vectorIconLayout]}
          resizeMode="cover"
          source={require("../assets/vector-19.png")}
        />
        <Image
          style={styles.s7P2AnimationChild8}
          resizeMode="cover"
          source={require("../assets/vector-21.png")}
        />
        <Image
          style={styles.s7P2AnimationChild9}
          resizeMode="cover"
          source={require("../assets/vector-20.png")}
        />
        <Text style={styles.datepeText}>DatePe</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  redBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F54848",
    justifyContent: "center",
    alignItems: "center",
  },
  waitlistText: {
    fontSize: 15,
    fontWeight: "normal",
    color: "white",
    marginBottom: 10,
    fontFamily: "Poppins", // Add the Poppins font family
  },
  thankYouText: {
    fontSize: 48,
    lineHeight: 73,
    fontWeight: "700",
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontFamily: FontFamily.openSansBold,
    // Add the Open Sans font family
  },
  bottomTextView: {
    position: "absolute",
    bottom: 10,
    alignItems: "center",
  },
  bottomText: {
    fontSize: 12,
    color: "white",
    fontFamily: "Poppins", // Add the Poppins font family
    textAlign: "center",
  },
  marginBottomText: {
    marginTop: 5, // Add margin between the two lines
  },
  datepeText: {
    fontSize: 24, // Increase font size to 24
    marginTop: "10%",
    fontWeight: "bold",
    color: "white",
    fontFamily: "Poppins", // Add the Poppins font family
  },
  s7P2AnimationItem: {
    marginTop: -351,
    marginLeft: 1187,
    borderRadius: 12,
    width: 330,
    height: 495,
    left: "50%",
  },
  s7P2Animation: {
    backgroundColor: "#f59b48",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
  },
  animationPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  image2Icon: {
    height: 176,
  },
  image2IconPosition: {
    width: "100%",
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default S8;
