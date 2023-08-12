import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { FontFamily, FontSize, Color } from '../GlobalStyles';

const S18 = ({ navigation }) => {
  return (
    <View style={styles.s16LoadingScreen}>
      <Image
        style={styles.s16LoadingScreenChild}
        resizeMode="cover"
        source={require('../assets/group-499.png')}
      />
      <Image
        style={styles.s16LoadingScreenItem}
        resizeMode="cover"
        source={require('../assets/group-4.png')}
      />
      <Text
        style={[styles.loading, styles.timeTypo]}
        onPress={() => {
          {
            navigation.navigate('s19');
          }
        }}
      >
        loading...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    top: 0,
    position: 'absolute',
  },
  timeTypo: {
    textAlign: 'center',
    fontFamily: FontFamily.cairoBold,
    fontWeight: '700',
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    position: 'absolute',
  },
  s16LoadingScreenChild: {
    top: 212,
    width: 552,
    height: 552,
    opacity: 0.3,
    left: 0,
    position: 'absolute',
  },
  time: {
    marginTop: -11,
    top: '50%',
    color: Color.whitesmoke,
    width: 54,
    left: 0,
  },
  timeStyle: {
    top: 19,
    left: 43,
    height: 22,
    width: 54,
    position: 'absolute',
    overflow: 'hidden',
  },
  border: {
    right: 2,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#f9f9f9',
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: 13,
  },
  capIcon: {
    top: 5,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: 'absolute',
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 3,
    backgroundColor: Color.whitesmoke,
    height: 9,
    width: 21,
    position: 'absolute',
  },
  battery: {
    top: 23,
    right: 33,
    width: 27,
    height: 13,
    position: 'absolute',
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
    width: 428,
    height: 58,
    left: '50%',
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
    left: '50%',
    position: 'absolute',
  },
  s16LoadingScreenItem: {
    height: '1.94%',
    width: '18%',
    top: '95.25%',
    right: '41.11%',
    bottom: '2.81%',
    left: '40.89%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  loading: {
    marginLeft: -69,
    top: 488,
    letterSpacing: 7,
    textTransform: 'uppercase',
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: '50%',
  },
  s16LoadingScreen: {
    backgroundColor: '#292929',
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
});

export default S18;
