import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Border, FontSize, Color, FontFamily } from '../GlobalStyles';
import MapView, { Marker } from 'react-native-maps';

const S16 = ({ navigation }) => {
  return (
    <View style={styles.s15Location}>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: '50%',
    position: 'absolute',
  },
  borderBorder: {
    borderColor: '#f9f9f9',
    borderStyle: 'solid',
  },
  groupChildLayout: {
    height: 39,
    width: 326,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_7xl,
    position: 'absolute',
  },
  s15Position: {
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
  groupInnerPosition: {
    marginLeft: -139,
    height: 65,
    width: 278,
    left: '50%',
    top: 0,
    position: 'absolute',
  },
  weNeedToTypo: {
    fontSize: FontSize.size_mini,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    position: 'absolute',
  },
  time: {
    marginTop: -11,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    fontFamily: FontFamily.cairoBold,
    color: Color.whitesmoke,
    textAlign: 'center',
    left: 0,
    top: '50%',
    width: 54,
    position: 'absolute',
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
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: 13,
    top: 0,
    position: 'absolute',
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
    height: 9,
    width: 21,
    backgroundColor: Color.whitesmoke,
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
    top: 0,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
  },
  s15LocationChild: {
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
  groupChild: {
    height: 39,
    width: 326,
    backgroundColor: Color.whitesmoke,
    left: 0,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_7xl,
    top: 0,
  },
  groupItem: {
    top: 7,
    left: 6,
    backgroundColor: '#da4949',
    width: 245,
    height: 25,
  },
  rectangleParent: {
    top: 71,
    left: 51,
    position: 'absolute',
  },
  findNearbyMatches: {
    top: 137,
    left: 59,
    fontSize: 30,
    width: 294,
    height: 107,
    textAlign: 'left',
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontFamily: FontFamily.poppinsRegular,
    position: 'absolute',
  },
  s15LocationItem: {
    marginTop: -8,
    marginLeft: -114,
    width: 228,
    height: 228,
  },
  s15LocationInner: {
    marginTop: -50,
    marginLeft: -157,
    width: 313,
    height: 313,
  },
  ellipseIcon: {
    top: 504,
    left: 148,
    width: 131,
    height: 131,
    position: 'absolute',
  },
  groupInner: {
    borderRadius: 33,
    borderWidth: 2,
    borderColor: '#f9f9f9',
    borderStyle: 'solid',
  },
  groupView: {
    marginLeft: -143,
    top: 758,
    shadowRadius: 7,
    elevation: 7,
    height: 65,
    width: 278,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    left: '50%',
    position: 'absolute',
  },
  allowLocationAccess: {
    top: 768,
    left: 106,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 208,
    height: 48,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    textAlign: 'center',
  },
  weNeedTo: {
    top: 233,
    left: 62,
    fontWeight: '200',
    fontFamily: FontFamily.poppinsExtralight,
    width: 256,
    height: 52,
    textAlign: 'left',
  },
  carbonlocationFilledIcon: {
    marginLeft: -107,
    top: 377,
    width: 215,
    height: 215,
    overflow: 'hidden',
  },
  s15Location: {
    backgroundColor: '#292929',
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
});

export default S16;
