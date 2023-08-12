// Library import
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local import
import strings from '../../../i18n/strings';
import {styles} from '../../../themes';
import {PremiumIcon, ReviewSummaryIcon} from '../../../assets/svgs';
import {useSelector} from 'react-redux';
import {moderateScale} from '../../../common/constants';
import SuccessModal from '../../../components/models/SuccessModal';
import EHeader from '../../../components/common/EHeader';
import EText from '../../../components/common/EText';
import EButton from '../../../components/common/EButton';
import ESafeAreaView from '../../../components/common/ESafeAreaView';

const PremiumDescriptionData = [
  strings.plansDesc1,
  strings.plansDesc2,
  strings.plansDesc3,
  strings.plansDesc4,
];

const ReviewSummary = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [modalVisible, setModalVisible] = useState(false);

  const DescriptionData = () => {
    return PremiumDescriptionData.map((item, index) => (
      <View key={index} style={localStyles.descContainer}>
        <Ionicons
          name={'checkmark'}
          color={colors.primary5}
          size={moderateScale(26)}
        />
        <EText
          type={'m16'}
          style={styles.mh10}
          color={colors.dark ? colors.white : colors.grayScale8}>
          {item}
        </EText>
      </View>
    ));
  };

  const onPressModalClose = () => setModalVisible(false);

  const onPressConfirmPayment = () => setModalVisible(true);

  const onPressChange = () => navigation.goBack();

  return (
    <ESafeAreaView>
      <EHeader title={strings.reviewSummary} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ph20}>
        <View
          style={[
            localStyles.plansContainer,
            {
              borderColor: colors.primary5,
              backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1,
            },
          ]}>
          <PremiumIcon style={styles.selfCenter} />
          <View style={localStyles.plans}>
            <EText type={'b32'}>{'$ 9'}</EText>
            <EText
              type={'b18'}
              color={colors.dark ? colors.grayScale3 : colors.grayScale7}>
              {'/month'}
            </EText>
          </View>
          <View
            style={[
              localStyles.divider,
              {backgroundColor: colors.dark ? colors.dark3 : colors.grayScale3},
            ]}
          />
          <DescriptionData />
        </View>
        <View
          style={[
            localStyles.amountContainer,
            {
              backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1,
            },
          ]}>
          <View style={[styles.rowSpaceBetween, styles.mb10]}>
            <EText type={'m14'}>{strings.amount}</EText>
            <EText type={'s16'}>{'$ 9.99'}</EText>
          </View>
          <View style={[styles.rowSpaceBetween, styles.mb15]}>
            <EText type={'m14'}>{strings.tax}</EText>
            <EText type={'s16'}>{'$ 1.99'}</EText>
          </View>
          <View
            style={[
              localStyles.totalContainer,
              {borderTopColor: colors.dark ? colors.dark3 : colors.grayScale3},
            ]}>
            <EText type={'m14'}>{strings.total}</EText>
            <EText type={'s16'}>{'$ 11.90'}</EText>
          </View>
        </View>
        <View
          style={[
            localStyles.cardContainer,
            {
              backgroundColor: colors.dark ? colors.inputBg : colors.grayScale1,
            },
          ]}>
          <View style={styles.rowCenter}>
            <Ionicons
              name={'card'}
              color={colors.primary5}
              size={moderateScale(26)}
              style={styles.mr10}
            />
            <EText type={'m16'}>{'*********** 9087'}</EText>
          </View>
          <TouchableOpacity onPress={onPressChange}>
            <EText type={'m16'} color={colors.primary5}>
              {strings.change}
            </EText>
          </TouchableOpacity>
        </View>
        <SuccessModal
          visible={modalVisible}
          onPressModalClose={onPressModalClose}
          subTitle={strings.successDesc}
          itemImage={<ReviewSummaryIcon style={styles.selfCenter} />}
        />
      </ScrollView>
      <EButton
        title={strings.confirmPayment}
        textType={'b18'}
        color={colors.white}
        onPress={onPressConfirmPayment}
        containerStyle={styles.mh25}
      />
    </ESafeAreaView>
  );
};

export default ReviewSummary;

const localStyles = StyleSheet.create({
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
  amountContainer: {
    ...styles.mt25,
    ...styles.p20,
    borderRadius: moderateScale(20),
  },
  totalContainer: {
    ...styles.rowSpaceBetween,
    borderTopWidth: moderateScale(1),
    ...styles.pt15,
  },
  cardContainer: {
    ...styles.mv25,
    ...styles.p20,
    ...styles.rowSpaceBetween,
    borderRadius: moderateScale(20),
  },
});
