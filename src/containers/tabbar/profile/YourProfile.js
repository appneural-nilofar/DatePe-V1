import {
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Custom imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';
import images from '../../../assets/images';
import {deviceHeight, moderateScale} from '../../../common/constants';
import {commonColor, styles} from '../../../themes';
import EText from '../../../components/common/EText';
import {EditIcon} from '../../../assets/svgs';
import {StackNav} from '../../../navigation/NavigationKeys';
import {userInterestData} from '../../../api/constant';

export default function YourProfile({route, navigation}) {
  const item = route.params?.item;
  const colors = useSelector(state => state.theme.theme);

  const renderChips = !!item ? item?.interest : userInterestData;

  const onPressEdit = () => navigation.navigate(StackNav.EditProfile, {item});

  const RenderItem = ({item, index}) => {
    return (
      <View style={localStyles.interestContainer}>
        <EText type={'B16'} color={colors.white}>
          {item}
        </EText>
      </View>
    );
  };

  const RenderHeader = () => {
    return (
      <View style={styles.pt20}>
        <View style={styles.rowSpaceBetween}>
          <View>
            <EText type={'B28'} color={colors.textColor}>
              {!!item ? item.name : 'Andrew Ainsley, 25'}
            </EText>
            <View style={localStyles.categoryContainer}>
              <EText type={'M18'} color={colors.textColor}>
                {!!item ? item.category : 'Designer'}
              </EText>
              <View style={localStyles.categoryStyle}>
                <EText type={'M14'} color={colors.primary5}>
                  {!!item ? item.type : 'Capricorn'}
                </EText>
              </View>
            </View>
          </View>
          {!!item?.distance ? (
            <View style={localStyles.distanceContainer}>
              <EText type={'B14'} color={colors.primary5}>
                {!!item ? item?.distance : 'Jakarta, Indonesia'}
              </EText>
            </View>
          ) : (
            <TouchableOpacity onPress={onPressEdit}>
              <EditIcon />
            </TouchableOpacity>
          )}
        </View>
        <EText type={'B22'} style={styles.mv10} color={colors.textColor}>
          {'About'}
        </EText>
        <EText type={'R16'} color={colors.textColor}>
          {!!item
            ? item?.about
            : 'I am single 25 years old. I love fitness, food, travvel, design & art. You can find me in Jakarta.'}
        </EText>
        <EText type={'B22'} style={styles.mt15} color={colors.textColor}>
          {'Interest'}
        </EText>
      </View>
    );
  };

  return (
    <ESafeAreaView>
      <ImageBackground
        source={!!item ? item?.picUrl : images.userPic}
        style={localStyles.userStyle}>
        <EHeader />
      </ImageBackground>
      <View
        style={[
          localStyles.detailContainer,
          {backgroundColor: colors.backgroundColor, flex: 1},
        ]}>
        <FlatList
          data={renderChips}
          renderItem={RenderItem}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={RenderHeader}
          contentContainerStyle={localStyles.chipMainContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  userStyle: {
    height: deviceHeight / 2,
    width: '100%',
    resizeMode: 'cover',
  },
  detailContainer: {
    top: moderateScale(-30),
    borderTopEndRadius: moderateScale(28),
    borderTopStartRadius: moderateScale(28),
    ...styles.ph20,
  },
  categoryContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    ...styles.mv10,
  },
  categoryStyle: {
    ...styles.ph10,
    ...styles.pv5,
    ...styles.mh10,
    backgroundColor: commonColor.inputFocusColor,
    borderRadius: moderateScale(8),
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
    // ...styles.pb15,
  },
  distanceContainer: {
    ...styles.ph10,
    ...styles.pv5,
    borderRadius: moderateScale(25),
    ...styles.mh5,
    backgroundColor: commonColor.tranparent,
    borderWidth: moderateScale(2),
    borderColor: commonColor.primary5,
  },
});
