import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// custom imports
import {styles} from '../../themes';
import {FilterDark, FilterLight} from '../../assets/svgs';
import EText from '../common/EText';
import {moderateScale} from '../../common/constants';
import SortAndFilter from '../models/SortAndFilter';

function HomeHeader() {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);
  const sortAndFilterRef = useRef();

  const onPressFilter = () => sortAndFilterRef?.current?.show();

  return (
    <View style={localStyles.headerContainer}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
        }}
        style={localStyles.userImageStyle}
      />
      <View style={localStyles.textContainer}>
        <EText type="m16" numberOfLines={1} color={colors.textColor}>
          Good Morning 👋
        </EText>
        <EText type="B20" numberOfLines={1} color={colors.textColor}>
          Andrew Ainsley
        </EText>
      </View>

      <TouchableOpacity onPress={onPressFilter}>
        {colors.dark ? <FilterDark /> : <FilterLight />}
      </TouchableOpacity>
      <SortAndFilter SheetRef={sortAndFilterRef} />
    </View>
  );
}

export default React.memo(HomeHeader);

const localStyles = StyleSheet.create({
  headerContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
  },
  userImageStyle: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  textContainer: {
    ...styles.mh10,
    ...styles.flex,
  },
  notificationContainer: {
    ...styles.center,
    ...styles.ph10,
    ...styles.pv10,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(26),
  },
});
