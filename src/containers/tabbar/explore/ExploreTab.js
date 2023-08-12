import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom Imports
import images from '../../../assets/images';
import {commonColor, styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import EText from '../../../components/common/EText';
import {EditLight, LocationIcon} from '../../../assets/svgs';
import EButton from '../../../components/common/EButton';
import strings from '../../../i18n/strings';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function ExploreTab({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const onPressShowMore = () => navigation.navigate(StackNav.NearPeople);

  const onPressLocation = () => navigation.navigate(StackNav.Location);

  return (
    <ImageBackground
      source={images.exploreImg}
      style={localStyles.imageStyle}
      resizeMode="cover">
      <View
        style={[
          localStyles.topContainer,
          {backgroundColor: colors.backgroundColor},
        ]}>
        <View>
          <View style={[styles.flexRow, styles.itemsCenter]}>
            <LocationIcon />
            <EText type={'r14'} style={styles.ml10}>
              {'Location (within 10 km)'}
            </EText>
          </View>
          <EText type={'b14'} style={styles.mt10}>
            {' New York, United States'}
          </EText>
        </View>
        <EButton
          title={strings.change}
          type={'S14'}
          containerStyle={localStyles.skipBtnContainer}
          frontIcon={
            <EditLight height={moderateScale(12)} width={moderateScale(12)} />
          }
          onPress={onPressLocation}
          style={styles.ml5}
        />
      </View>
      <TouchableOpacity
        onPress={onPressShowMore}
        style={localStyles.showMoreBtn}>
        <EText type={'b16'} color={colors.white}>
          {strings.showMore}
        </EText>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const localStyles = StyleSheet.create({
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  topContainer: {
    ...styles.m20,
    ...styles.rowSpaceBetween,
    ...styles.p15,
    borderRadius: moderateScale(12),
  },
  skipBtnContainer: {
    width: '35%',
    height: moderateScale(35),
    borderRadius: moderateScale(17),
    borderWidth: moderateScale(1),
    borderColor: commonColor.primary5,
  },
  showMoreBtn: {
    position: 'absolute',
    bottom: moderateScale(40),
    ...styles.selfCenter,
    ...styles.ph15,
    ...styles.pv10,
    backgroundColor: commonColor.primary5,
    borderRadius: moderateScale(22),
  },
});
