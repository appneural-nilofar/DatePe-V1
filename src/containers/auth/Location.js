// Library import
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlashList} from '@shopify/flash-list';

// Local import
import EHeader from '../../components/common/EHeader';
import strings from '../../i18n/strings';
import {styles} from '../../themes';
import {getHeight, moderateScale} from '../../common/constants';
import EText from '../../components/common/EText';
import EInput from '../../components/common/EInput';
import EButton from '../../components/common/EButton';
import ESafeAreaView from '../../components/common/ESafeAreaView';
import {StackNav} from '../../navigation/NavigationKeys';
import {selectCountry} from '../../api/constant';

export default function Location({navigation, route}) {
  const isHideBack = route?.params?.isHideBack;
  const colors = useSelector(state => state.theme.theme);

  const BlurredStyle = {
    backgroundColor: colors.inputBg,
  };
  const FocusedStyle = {
    backgroundColor: colors.inputFocusColor,
    borderColor: colors.primary5,
  };

  const BlurredIconStyle = colors.textColor;
  const FocusedIconStyle = colors.primary5;

  const [addDetailStyle, setAddDetailStyle] = useState(BlurredStyle);
  const [addressIcon, setAddressIcon] = useState(BlurredIconStyle);
  const [isSelected, setIsSelected] = useState('');
  const [extraData, setExtraData] = useState(false);
  const [search, setSearch] = useState('');
  const [faqData, setFaqData] = useState(selectCountry);

  useEffect(() => {
    filterData();
  }, [search]);

  const filterData = () => {
    if (!!search) {
      const filteredData = selectCountry.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
      if (filteredData.length === 0) {
        setFaqData(selectCountry);
      } else setFaqData(filteredData);
    } else {
      setFaqData(selectCountry);
    }
  };

  useEffect(() => {
    setExtraData(!extraData);
  }, [colors]);

  useEffect(() => {
    setExtraData(!extraData);
  }, [isSelected]);

  const onPressItem = item => {
    setIsSelected(item);
  };

  const onFocusAddDetail = () => {
    setAddressIcon(FocusedIconStyle);
    setAddDetailStyle(FocusedStyle);
  };
  const onBlurAddNDetail = () => {
    setAddressIcon(BlurredIconStyle);
    setAddDetailStyle(BlurredStyle);
  };

  const onChangeAddDetail = text => setSearch(text);

  const onPressLocation = () => navigation.goBack();

  const onPressAdd = () =>
    navigation.navigate(StackNav.SetUpProfile, {
      headerTitle: strings.fillYourProfile,
    });

  const RightIcon = () => {
    return (
      <Ionicons name={'search'} size={moderateScale(24)} color={addressIcon} />
    );
  };

  const RenderData = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item.name)}
        style={[
          localStyles.settingsContainer,
          {
            borderColor:
              isSelected === item.name ? colors.primary5 : colors.bColor,
          },
        ]}>
        <View style={localStyles.rightContainer}>
          <EText type="B36">{item.flag}</EText>
          <EText type="s16" style={styles.mh10}>
            {item.dial_code}
          </EText>
          <EText numberOfLines={1} style={styles.flex} type="s16">
            {item.name}
            {item.name}
          </EText>
        </View>
        <Ionicons
          name={
            isSelected === item.name ? 'radio-button-on' : 'radio-button-off'
          }
          size={moderateScale(24)}
          style={styles.ml10}
          color={colors.primary5}
        />
      </TouchableOpacity>
    );
  };

  return (
    <ESafeAreaView>
      <EHeader title={strings.setLocation} isHideBack={!!isHideBack} />
      <View style={styles.ph20}>
        <EInput
          placeHolder={strings.search}
          _value={search}
          autoCapitalize={'none'}
          toGetTextFieldValue={onChangeAddDetail}
          inputContainerStyle={[
            {backgroundColor: colors.inputBg},
            localStyles.inputContainerStyle,
            addDetailStyle,
          ]}
          inputBoxStyle={localStyles.inputBoxStyle}
          _onFocus={onFocusAddDetail}
          onBlur={onBlurAddNDetail}
          insideLeftIcon={() => <RightIcon />}
        />
      </View>
      <FlashList
        data={faqData}
        extraData={extraData}
        renderItem={RenderData}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={15}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}
      />
      <EButton
        title={strings.continue}
        type={'S16'}
        color={colors.white}
        containerStyle={[styles.mv10, styles.mh20]}
        onPress={isHideBack ? onPressAdd : onPressLocation}
      />
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  inputContainerStyle: {
    height: getHeight(60),
    borderRadius: moderateScale(15),
    borderWidth: moderateScale(1),
    ...styles.ph10,
  },
  inputBoxStyle: {
    ...styles.ph15,
  },
  settingsContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt20,
    ...styles.pv5,
    ...styles.ph20,
    ...styles.flex,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(18),
  },
  rightContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.flex,
  },
});
