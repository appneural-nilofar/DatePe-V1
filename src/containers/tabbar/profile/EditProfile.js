import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';

// custom imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';
import strings from '../../../i18n/strings';
import EText from '../../../components/common/EText';
import {commonColor, styles} from '../../../themes';
import {EditIcon, EditLight} from '../../../assets/svgs';
import {activeUserImage, userInterestData} from '../../../api/constant';
import {moderateScale} from '../../../common/constants';

export default function EditProfile() {
  const colors = useSelector(state => state.theme.theme);

  const RenderItem = ({item, index}) => {
    return (
      <View style={localStyles.interestContainer}>
        <EText type={'B16'} color={colors.white}>
          {item}
        </EText>
      </View>
    );
  };

  const SubHeader = ({title, isIcon}) => {
    return (
      <View style={localStyles.subHeaderStyle}>
        <EText type={'B18'} color={colors.textColor}>
          {title}
        </EText>
        {isIcon && (
          <TouchableOpacity>
            <EditIcon />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const RenderHeader = () => {
    return (
      <View>
        <SubHeader title={strings.yourBestPhotos} />
        <FlashList
          data={activeUserImage}
          renderItem={RenderImage}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <SubHeader title={strings.yourInterest} isIcon={true} />
      </View>
    );
  };

  const RenderImage = ({item, index}) => {
    return (
      <View style={localStyles.imageContainer}>
        <ImageBackground
          style={localStyles.imageStyle}
          source={{
            uri: item,
          }}>
          <TouchableOpacity style={localStyles.editIconContainer}>
            <EditLight height={moderateScale(22)} width={moderateScale(22)} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };

  const RenderInput = ({title, placeholder}) => {
    return (
      <View
        style={[localStyles.inputContainer, {backgroundColor: colors.inputBg}]}>
        <EText type={'B16'} style={styles.ph15} color={colors.textColor}>
          {title}
        </EText>
      </View>
    );
  };

  const RenderFooter = () => {
    return (
      <View style={localStyles.footerContainer}>
        <SubHeader title={strings.yourProfile} />
        <RenderInput title={'Andrew Ainsley'} />
        <RenderInput title={'Andrew'} />
        <RenderInput title={'Designer'} />
        <RenderInput
          title={
            'I am single 25 years old. I love fitness, food, travvel, design & art. You can find me in Jakarta.'
          }
        />
        <EText type={'B16'} color={colors.white}></EText>
      </View>
    );
  };

  return (
    <ESafeAreaView>
      <EHeader title={strings.editProfile} />
      <FlatList
        data={userInterestData}
        renderItem={RenderItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<RenderHeader />}
        ListFooterComponent={<RenderFooter />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.chipMainContainer}
      />
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  subHeaderStyle: {
    ...styles.rowSpaceBetween,
    ...styles.mt20,
    ...styles.mb10,
  },
  imageContainer: {
    width: moderateScale(120),
    height: moderateScale(170),
    borderRadius: moderateScale(28),
    overflow: 'hidden',
    ...styles.mh5,
    ...styles.mt10,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    ...styles.mr15,
    ...styles.mb15,
  },
  interestContainer: {
    ...styles.ph15,
    ...styles.pv10,
    borderRadius: moderateScale(25),
    ...styles.mt15,
    ...styles.mh5,
    backgroundColor: commonColor.primary5,
  },
  chipMainContainer: {
    ...styles.wrap,
    ...styles.flexRow,
    ...styles.pb15,
    ...styles.ph20,
  },
  inputContainer: {
    width: '100%',
    ...styles.pv15,
    borderRadius: moderateScale(18),
    ...styles.mt15,
    ...styles.mh5,
  },
});
