import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Border, Color, FontFamily } from '../GlobalStyles';

const S7 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
      <Image
        style={[styles.image2Icon, styles.image2IconPosition]}
        resizeMode="cover"
        source={require('../assets/image-2.png')}
      />
      <Image
        style={[styles.s7FinalScreenItem, styles.finalPosition]}
        resizeMode="cover"
        source={require('../assets/rectangle-4.png')}
      />
      <View style={[styles.homeIndicator, styles.homeIndicatorLayout]} />
      <Image
        style={[styles.s7FinalScreenInner, styles.image2IconPosition]}
        resizeMode="cover"
        source={require('../assets/vector-2.png')}
        onPress={() => {
          navigation.navigate('s8');
        }}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require('../assets/ellipse-17.png')}
      />
      <Image
        style={[styles.s7FinalScreenChild1, styles.homeIndicatorLayout]}
        resizeMode="cover"
        source={require('../assets/ellipse-18.png')}
      />
      <Image
      style={styles.groupIcon}
      resizeMode="cover"
      source={require('../assets/group-3.png')}
    />
        <Text
          style={styles.thankYouText}
          onPress={() => {
            navigation.navigate("s8");
          }}
        >
          Thank you!
        </Text>
      </View>
      <View style={styles.blackBox} />
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
  blackBox: {
    width: "100%",
    height: "30%",
    backgroundColor: "black",
    borderTopLeftRadius: 150,
    borderTopRightRadius: 120,
    position: "absolute",
    bottom: 0,
  },
  thankYouText: {
    fontSize: 36,
    fontWeight: '700',
    fontFamily: FontFamily.openSansBold,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
});

export default S7;
