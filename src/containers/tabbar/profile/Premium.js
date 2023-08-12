// Library imports
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local imports
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {PremiumIcon} from '../../../assets/svgs';
import {moderateScale} from '../../../common/constants';
import {StackNav} from '../../../navigation/NavigationKeys';
import EText from '../../../components/common/EText';
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';

const PremiumDescriptionData = [
  strings.plansDesc1,
  strings.plansDesc2,
  strings.plansDesc3,
  strings.plansDesc4,
];

const PremiumPlans = ['$ 9.99', '$ 49.99'];

const Premium = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);

  const DescriptionData = () => {
    return PremiumDescriptionData.map((item, index) => {
      return (
        <View key={index} style={localStyles.descContainer}>
          <Ionicons
            name={'checkmark'}
            color={colors.primary5}
            size={moderateScale(26)}
          />
          <EText
            type={'m16'}
            style={styles.mh10}
            color={colors.dark ? colors.whiteColor : colors.grayScale8}>
            {item}
          </EText>
        </View>
      );
    });
  };

  const SubscribePlans = () => {
    return PremiumPlans.map((item, index) => {
      return (
        <TouchableOpacity
          onPress={onPressPlan}
          key={index}
          style={[
            localStyles.plansContainer,
            {
              borderColor: colors.primary5,
              backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1,
            },
          ]}>
          <PremiumIcon fill={colors.primary5} style={styles.selfCenter} />
          <View style={localStyles.plans}>
            <EText type={'b32'}>{item}</EText>
            <EText
              type={'b18'}
              color={colors.dark ? colors.grayScale3 : colors.grayScale7}>
              {index == 0 ? '/month' : '/6 months'}
            </EText>
          </View>
          <View
            style={[
              localStyles.divider,
              {backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3},
            ]}
          />
          <DescriptionData />
        </TouchableOpacity>
      );
    });
  };

  const onPressPlan = () =>
    navigation.navigate(StackNav.Payment, {
      title: strings.payment,
      desc: strings.paymentDesc,
      isWallet: true,
    });

  return (
    <ESafeAreaView>
      <EHeader />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={localStyles.root}>
        <EText type={'b30'} color={colors.primary5}>
          {strings.subscribeToPremium}
        </EText>
        <EText
          type={'m18'}
          align={'center'}
          color={colors.textColor}
          style={styles.mv10}>
          {strings.subscribeToPremiumDesc}
        </EText>
        <SubscribePlans />
      </ScrollView>
    </ESafeAreaView>
  );
};

export default Premium;

const localStyles = StyleSheet.create({
  root: {
    ...styles.itemsCenter,
    ...styles.ph20,
    ...styles.pb20,
  },
  plansContainer: {
    ...styles.mt25,
    ...styles.justifyCenter,
    ...styles.ph20,
    ...styles.pv15,
    width: '100%',
    borderWidth: moderateScale(1.5),
    borderRadius: moderateScale(20),
  },
  divider: {
    height: moderateScale(2),
    ...styles.mb15,
    width: '100%',
  },
  plans: {
    ...styles.rowCenter,
    ...styles.mv20,
    ...styles.selfCenter,
  },
  descContainer: {
    ...styles.mb10,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
});
