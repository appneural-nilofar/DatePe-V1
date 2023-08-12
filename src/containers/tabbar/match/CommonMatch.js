import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import images from '../../../assets/images';
import EText from '../../../components/common/EText';
import {moderateScale} from '../../../common/constants';
import EButton from '../../../components/common/EButton';

export default function CommonMatch() {
  const colors = useSelector(state => state.theme.theme);

  return (
    <ESafeAreaView>
      <EHeader />
      <View style={localStyles.root}>
        <Image source={images.commonMatch} style={localStyles.imageStyle} />
        <EText
          type={'b34'}
          align={'center'}
          color={colors.primary5}
          style={styles.mv20}>
          {'It’s a Match'}
        </EText>
        <EText type={'b18'} align={'center'} color={colors.textColor}>
          {"Don't keep her waiting, say hello now!"}
        </EText>
      </View>
      <View style={styles.ph20}>
        <EButton
          title={strings.sayHello}
          type={'S16'}
          color={colors.white}
          containerStyle={styles.mv20}
        />
        <EButton
          title={strings.keepSwiping}
          type={'S16'}
          color={colors.dark ? colors.white : colors.primary5}
          bgColor={colors.dark3}
        />
      </View>
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: moderateScale(300),
    resizeMode: 'contain',
  },
  root: {
    ...styles.flex,
    ...styles.center,
    ...styles.pv50,
  },
  btnContainer: {
    ...styles.mh20,
    ...styles.mb10,
    ...styles.rowSpaceAround,
  },
});
