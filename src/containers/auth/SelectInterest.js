// Library Imports
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

// Local Imports
import ESafeAreaView from '../../components/common/ESafeAreaView';
import EHeader from '../../components/common/EHeader';
import {styles} from '../../themes';
import strings from '../../i18n/strings';
import EText from '../../components/common/EText';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';
import {renderChips} from '../../api/constant';
import EButton from '../../components/common/EButton';

const SelectInterest = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [selectedChips, setSelectedChips] = useState([]);

  const RenderChips = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressChips(item)}
        style={[
          localStyles.chipsContainer,
          {borderColor: colors.primary5},
          selectedChips.includes(item) && {backgroundColor: colors.primary5},
        ]}>
        <EText
          type={'b18'}
          color={selectedChips.includes(item) ? colors.white : colors.primary5}>
          {item}
        </EText>
      </TouchableOpacity>
    );
  };

  const onPressChips = value => {
    if (selectedChips.includes(value)) {
      setSelectedChips(selectedChips.filter(item => item !== value));
    } else {
      setSelectedChips([...selectedChips, value]);
    }
  };

  const onPressContinue = () => {
    navigation.navigate(StackNav.SelectIdol);
  };

  return (
    <ESafeAreaView>
      <EHeader title={strings.selectInterest} />
      <View style={localStyles.root}>
        <EText type={'m18'} style={styles.mv10}>
          {strings.selectInterestDescription}
        </EText>
        <FlatList
          data={renderChips}
          renderItem={RenderChips}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={localStyles.chipMainContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={localStyles.btnContainer}>
        <EButton
          title={strings.continue}
          type={'b18'}
          color={colors.white}
          containerStyle={[localStyles.skipBtnContainer]}
          onPress={onPressContinue}
        />
      </View>
    </ESafeAreaView>
  );
};

export default SelectInterest;

const localStyles = StyleSheet.create({
  chipMainContainer: {
    ...styles.wrap,
    ...styles.flexRow,
  },
  root: {
    ...styles.ph20,
    ...styles.flex,
  },
  btnContainer: {
    ...styles.ph20,
    ...styles.pv10,
  },
  chipsContainer: {
    ...styles.ph20,
    ...styles.pv10,
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(25),
    ...styles.mt15,
    ...styles.mh5,
  },
  chipMainContainer: {
    ...styles.wrap,
    ...styles.flexRow,
    ...styles.pb15,
  },
});
