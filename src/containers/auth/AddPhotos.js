import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import ImageCropPicker from 'react-native-image-crop-picker';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import ESafeAreaView from '../../components/common/ESafeAreaView';
import EHeader from '../../components/common/EHeader';
import strings from '../../i18n/strings';
import EText from '../../components/common/EText';
import {styles} from '../../themes';
import {ChoosePictureIcon} from '../../assets/svgs';
import {StackNav} from '../../navigation/NavigationKeys';
import EButton from '../../components/common/EButton';
import {moderateScale} from '../../common/constants';
import {AddPhotosData} from '../../api/constant';

export default function AddPhotos({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const [addImage, setAddImage] = useState(AddPhotosData);
  const [extraData, setExtraData] = useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, [addImage]);

  const onPressContinue = () => navigation.navigate(StackNav.SelectInterest);

  const onPressGallery = (itm, idx) => {
    ImageCropPicker.openPicker({
      mediaType: 'photo',
      includeBase64: true,
    }).then(images => {
      let tmpVar = [...addImage];
      tmpVar[idx].image = images?.path;
      setAddImage(tmpVar);
    });
  };

  const RenderImageComponent = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressGallery(item, index)}
        style={localStyles.imageContainer}>
        {!!item?.image ? (
          <Image source={{uri: item?.image}} style={localStyles.imgStyle} />
        ) : (
          <ChoosePictureIcon width={'100%'} height={moderateScale(230)} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <ESafeAreaView>
      <EHeader title={strings.addYourBestPhotos} />
      <FlashList
        data={addImage}
        extraData={extraData}
        renderItem={RenderImageComponent}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        estimatedItemSize={4}
        ListHeaderComponent={
          <EText type="S18">{strings.addYourBestPhotosDesc}</EText>
        }
        ListHeaderComponentStyle={styles.mb15}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={localStyles.root}
      />
      <EButton
        type={'S16'}
        title={strings.continue}
        color={colors.white}
        onPress={onPressContinue}
        containerStyle={localStyles.continueBtnStyle}
      />
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.flex,
  },
  continueBtnStyle: {
    ...styles.mh20,
    ...styles.mb10,
  },
  imageContainer: {
    width: '90%',
    height: moderateScale(200),
    borderRadius: moderateScale(30),
    ...styles.m10,
    ...styles.center,
  },
  imgStyle: {
    width: '100%',
    height: moderateScale(200),
    borderRadius: moderateScale(30),
  },
});
