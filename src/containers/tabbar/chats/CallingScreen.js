// Library Imports
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import images from '../../../assets/images';
import {styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import EHeader from '../../../components/common/EHeader';
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EText from '../../../components/common/EText';
import {activeUserImage} from '../../../api/constant';

export default function CallingScreen({navigation, route}) {
  const title = route.params?.title;
  const colors = useSelector(state => state.theme.theme);

  const onPressClose = () => navigation.goBack();

  const RenderIcon = ({icon, onPress, color}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          localStyles.iconStyle,
          {
            backgroundColor: color ? color : colors.tranparent2,
          },
        ]}>
        <Ionicons name={icon} size={moderateScale(30)} color={colors.white} />
      </TouchableOpacity>
    );
  };

  return (
    <ESafeAreaView>
      <ImageBackground source={images.callingBg} style={styles.flex}>
        <EHeader />
        <View style={localStyles.root}>
          <View></View>
          <View>
            <Image
              source={{uri: activeUserImage[0]}}
              style={localStyles.imgStyle}
            />
            <EText
              type={'B24'}
              align={'center'}
              style={styles.mt20}
              color={colors.textColor}>
              {title}
            </EText>
            <EText
              type={'S16'}
              align={'center'}
              style={styles.mt10}
              color={colors.dark ? colors.grayScale5 : colors.grayScale3}>
              {'01:25 minutes'}
            </EText>
          </View>
          <View style={localStyles.bottomContainer}>
            <RenderIcon icon={'volume-high'} />
            <RenderIcon icon={'videocam'} />
            <RenderIcon
              icon={'close'}
              color={colors.redColor}
              onPress={onPressClose}
            />
          </View>
        </View>
      </ImageBackground>
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
    ...styles.justifyBetween,
  },
  imgStyle: {
    width: moderateScale(150),
    height: moderateScale(150),
    ...styles.selfCenter,
    borderRadius: moderateScale(75),
  },
  iconStyle: {
    borderRadius: moderateScale(30),
    width: moderateScale(60),
    height: moderateScale(60),
    ...styles.center,
  },
  bottomContainer: {
    ...styles.rowSpaceAround,
    ...styles.itemsCenter,
    ...styles.mh40,
    ...styles.mb10,
  },
});
