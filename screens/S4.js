import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import {Color, FontFamily, Border, FontSize} from '../GlobalStyles';
import {useState} from 'react';
import axios from 'axios';
import ESafeAreaView from '../src/components/common/ESafeAreaView';
import EHeader from '../src/components/common/EHeader';
import KeyBoardAvoidWrapper from '../src/components/common/KeyBoardAvoidWrapper';

const S4 = ({navigation}) => {
  const [mobileNo, setMobileNo] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleInputChange = text => {
    setMobileNo(text);
  };

  const handleEnterPress = text => {
    if (!mobileNo) {
      Alert.alert('Please Enter Mobile Number');
      return;
    }

    axios
      .post('http://43.205.239.3:3001/api/v1/register/mobileno', {
        mobileNo,
      })
      .then(response => {
        console.log(response.data);
        setData(response.data);
        // setLoading(false);
        Alert.alert(response?.data?.message);
        navigation.navigate('s5', {mobileNo});
      })
      .catch(error => {
        Alert.alert('Sorry, ');
        console.error('Error fetching data:', error);
        // setLoading(false);
      });
  };

  if (loading) {
    return (
      <ESafeAreaView>
        {/* <EHeader /> */}
        <KeyBoardAvoidWrapper>
          <View style={styles.container}>
            <View style={styles.s4RegisterViaPhoneNumber}>
              <Image
                style={[
                  styles.s4RegisterViaPhoneNumberChild,
                  styles.statusBarPosition,
                ]}
                resizeMode="cover"
                source={require('../assets/vector-2.png')}
              />
              <TextInput
                style={styles.enterYourNumber}
                maxLength={10}
                label="enter your number"
                value={mobileNo}
                keyboardType="numeric"
                onChangeText={handleInputChange}
                onSubmitEditing={handleEnterPress}
              />

              {/* <Text style={styles.enterYourNumber}>Enter your number
        onPress={() => {
              navigation.navigate('s5')
            }}</Text> */}
              <View
                style={[styles.rectangleParent, styles.groupChildLayout]}
                onPress={() => {
                  handleEnterPress;
                  // navigation.navigate('s5');
                }}>
                <Pressable
                  style={[styles.groupChild, styles.groupChildLayout]}
                  onPress={() => {
                    handleEnterPress;
                    // navigation.navigate('s5');
                  }}
                />
                <Image
                  style={[styles.groupItem, styles.timeStyleLayout]}
                  resizeMode="cover"
                  source={require('../assets/vector-897.png')}
                  onPress={() => {
                    handleEnterPress;
                    // navigation.navigate('s5');
                  }}
                />
              </View>
              <Text
                style={[styles.welcome, styles.textTypo]}>{`Welcome!`}</Text>
              <Image
                style={styles.s4RegisterViaPhoneNumberInner}
                resizeMode="cover"
                source={require('../assets/ellipse-17.png')}
              />
              <Image
                style={[styles.ellipseIcon, styles.registerChildLayout2]}
                resizeMode="cover"
                source={require('../assets/ellipse-18.png')}
              />
              <View style={styles.rectangleView} />
              {/* <View
                style={[
                  styles.s4RegisterViaPhoneNumberChild1,
                  styles.registerChildLayout1,
                ]}
              /> */}
              {/* <View
                style={[
                  styles.s4RegisterViaPhoneNumberChild2,
                  styles.registerChildLayout1,
                ]}
              /> */}
              {/* <View
                style={[
                  styles.s4RegisterViaPhoneNumberChild3,
                  styles.registerChildLayout,
                ]}
              /> */}
              {/* <View
                style={[
                  styles.s4RegisterViaPhoneNumberChild4,
                  styles.registerChildLayout,
                ]}
              /> */}
              <Image
                style={[
                  styles.s4RegisterViaPhoneNumberChild5,
                  styles.registerChildLayout2,
                ]}
                resizeMode="cover"
                source={require('../assets/ellipse-19.png')}
              />
              <Image
                style={[
                  styles.s4RegisterViaPhoneNumberChild6,
                  styles.registerChildLayout2,
                ]}
                resizeMode="cover"
                source={require('../assets/ellipse-20.png')}
              />
              <View style={styles.wrapper}>
                <Text style={[styles.text, styles.textTypo]}>+91</Text>
              </View>
              {/* <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require('../assets/group-3.png')}
            /> */}
            </View>
          </View>
        </KeyBoardAvoidWrapper>
      </ESafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#292929',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 20,
    position: 'absolute',
  },
  statusBarPosition: {
    width: '100%',
    top: 0,
    position: 'absolute',
  },
  timeStyleLayout: {
    height: 22,
    position: 'absolute',
  },
  borderBorder: {
    borderWidth: 5,
    borderStyle: 'solid',
    position: 'absolute',
    borderColor: 'white',
  },
  groupChildLayout: {
    height: 45,
    width: 45,
    position: 'absolute',
  },
  textTypo: {
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: 'center',
  },
  registerChildLayout2: {
    width: 5,
    height: 5,
    position: 'absolute',
  },
  registerChildLayout1: {
    width: 9,
    transform: [
      {
        rotate: '-28.74deg',
      },
    ],
    borderRadius: Border.br_11xs,
    height: 3,
    position: 'absolute',
  },
  registerChildLayout: {
    borderRadius: Border.br_7xs,
    transform: [
      {
        rotate: '-28.74deg',
      },
    ],
    position: 'absolute',
  },
  s4RegisterViaPhoneNumberChild: {
    height: 175,
    left: 0,
    position: 'absolute',
  },
  time: {
    marginTop: -11,
    fontSize: 17,
    fontWeight: '700',
    fontFamily: FontFamily.cairoBold,
    color: Color.azure,
    textAlign: 'center',
    lineHeight: 22,
    top: '50%',
    width: 54,
    left: 0,
    position: 'absolute',
  },
  timeStyle: {
    top: 19,
    left: 43,
    width: 54,
    height: 22,
    overflow: 'hidden',
  },
  border: {
    right: 2,
    borderRadius: 4,
    borderColor: '#f3feff',
    width: 25,
    opacity: 0.35,
    height: 13,
    top: 0,
  },
  capIcon: {
    top: 5,
    right: 0,
    width: 1,
    opacity: 0.4,
    height: 4,
    position: 'absolute',
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 3,
    backgroundColor: Color.azure,
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
    height: 58,
    left: '50%',
  },
  s4RegisterViaPhoneNumberItem: {
    marginLeft: -176,
    top: 607,
    borderRadius: 33,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: '#f5c348',
    width: 353,
    height: 81,
    left: '50%',
  },
  enterYourNumber: {
    top: 625,
    left: 165,
    color: Color.goldenrod,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_3xl,
    textAlign: 'left',
    lineHeight: 22,
    position: 'absolute',
  },
  homeIndicator: {
    marginLeft: -59,
    bottom: 3,
    borderRadius: 100,
    width: 134,
    height: 5,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    left: '50%',
    position: 'absolute',
  },
  groupChild: {
    borderRadius: 24,
    backgroundColor: Color.goldenrod,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 12,
    left: 13,
    width: 20,
    position: 'absolute',
  },
  rectangleParent: {
    top: 624,
    left: 55,
  },
  welcome: {
    marginTop: -35,
    // left: '10%',
    fontSize: 36,
    // lineHeight: 73,
    // width: 341,
    // height: 70,
    justifyContent: 'center',
    // color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    top: '50%',
  },
  s4RegisterViaPhoneNumberInner: {
    top: 458,
    left: 327,
    width: 3,
    height: 3,
    // position: 'absolute',
    // justifyContent: 'center',
  },
  ellipseIcon: {
    top: 456,
    left: 307,
  },
  rectangleView: {
    top: 448,
    backgroundColor: '#e96a37',
    transform: [
      {
        rotate: '-28.74deg',
      },
    ],
    borderRadius: Border.br_11xs,
    left: 318,
    width: 19,
    height: 4,
    position: 'absolute',
  },
  s4RegisterViaPhoneNumberChild1: {
    backgroundColor: Color.tan,
    top: 437,
    left: 318,
    width: 9,
  },
  s4RegisterViaPhoneNumberChild2: {
    top: 462,
    left: 316,
    width: 9,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
  },
  s4RegisterViaPhoneNumberChild3: {
    top: 443,
    left: 95,
    width: 22,
    height: 6,
    backgroundColor: Color.tan,
  },
  s4RegisterViaPhoneNumberChild4: {
    top: 445,
    left: 69,
    width: 15,
    height: 3,
    backgroundColor: Color.goldenrod,
  },
  s4RegisterViaPhoneNumberChild5: {
    left: 110,
    top: 437,
  },
  s4RegisterViaPhoneNumberChild6: {
    top: 468,
    left: 89,
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    opacity: 0.9,
    fontSize: FontSize.size_xl,
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    lineHeight: 22,
  },
  wrapper: {
    top: 637,
    left: 120,
    flexDirection: 'row',
    position: 'absolute',
  },
  groupIcon: {
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
  s4RegisterViaPhoneNumber: {
    backgroundColor: 'black',
    flex: 1,
    width: '100%',
    height: 926,
    overflow: 'hidden',
  },
});

export default S4;
