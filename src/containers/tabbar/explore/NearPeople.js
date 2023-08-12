import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// custom imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import HumeCard from '../../../components/homeComponent/HumeCard';
import EHeader from '../../../components/common/EHeader';
import {styles} from '../../../themes';
import EButton from '../../../components/common/EButton';
import strings from '../../../i18n/strings';

export default function NearPeople({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const onPressBack = () => navigation.goBack();

  return (
    <ESafeAreaView>
      <EHeader />
      <View style={[styles.ph20, styles.flex]}>
        <HumeCard />
      </View>
      <EButton
        title={strings.back}
        type={'S16'}
        containerStyle={localStyles.backBtnContainer}
        color={colors.dark ? colors.white : colors.primary5}
        bgColor={colors.dark3}
        onPress={onPressBack}
      />
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  backBtnContainer: {
    ...styles.mv10,
    ...styles.mh20,
  },
});
