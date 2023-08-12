// Library Imports
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {createRef, useMemo} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';
import {Menu_Dark, Menu_Light, TabLogo, VipIcon} from '../../../assets/svgs';
import {moderateScale} from '../../../common/constants';
import {commonColor, styles} from '../../../themes';
import {ProfileSetting} from '../../../api/constant';
import strings from '../../../i18n/strings';
import EText from '../../../components/common/EText';
import LogOut from '../../../components/models/LogOut';
import CategoryComponent from '../../../components/profileComponent/CategoryComponent';
import images from '../../../assets/images';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function ProfileTab({navigation}) {
  const color = useSelector(state => state.theme.theme);

  const LogOutSheetRef = createRef();

  const onPressDp = () => navigation.navigate(StackNav.YourProfile);
  const onPressMenu = () => {};

  const onPressItem = item => {
    if (!!item.route) {
      navigation.navigate(item.route);
    }
  };

  const onPressLogOutBtn = () => LogOutSheetRef?.current?.show();

  const RightIcon = useMemo(() => {
    return (
      <TouchableOpacity onPress={onPressMenu} style={styles.pr10}>
        {color.dark ? <Menu_Dark /> : <Menu_Light />}
      </TouchableOpacity>
    );
  }, []);

  const LeftIcon = useMemo(() => {
    return (
      <View style={styles.pr10}>
        <TabLogo />
      </View>
    );
  }, []);

  const onPressGetVip = () => navigation.navigate(StackNav.Premium);

  const ListHeaderComponent = () => {
    return (
      <View>
        <TouchableOpacity onPress={onPressDp} style={localStyles.userImage}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
            }}
            style={localStyles.userImage}
          />
        </TouchableOpacity>
        <ImageBackground
          source={images.premiumBg}
          imageStyle={{borderRadius: moderateScale(38)}}
          style={localStyles.vipContainerStyle}>
          <View style={{width: '62%'}}>
            <EText type="s24" color={color.white}>
              {strings.enjoyAllBenefits}
            </EText>
            <EText type="s14" style={styles.mv10} color={color.white}>
              {strings.enjoyAllBenefitsDesc}
            </EText>
            <TouchableOpacity
              onPress={onPressGetVip}
              style={localStyles.getVipBtn}>
              <EText type="s14" color={color.primary5}>
                {strings.getVip}
              </EText>
            </TouchableOpacity>
          </View>
          <VipIcon />
        </ImageBackground>
      </View>
    );
  };

  const ListFooterComponent = () => {
    return (
      <TouchableOpacity
        onPress={onPressLogOutBtn}
        style={localStyles.settingsContainer}>
        <Ionicons
          name={'log-out-outline'}
          size={moderateScale(28)}
          color={color.redColor}
        />
        <EText
          type="s18"
          color={color.redColor}
          style={localStyles.logOutStyle}>
          {strings.logout}
        </EText>
      </TouchableOpacity>
    );
  };

  return (
    <ESafeAreaView>
      <EHeader
        isHideBack={true}
        title={strings.profile}
        isLeftIcon={LeftIcon}
        rightIcon={RightIcon}
      />

      <FlashList
        data={ProfileSetting}
        renderItem={({item, index}) => (
          <CategoryComponent
            item={item}
            key={index}
            onPressItem={onPressItem}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={10}
        contentContainerStyle={localStyles.root}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
      <LogOut SheetRef={LogOutSheetRef} navigation={navigation} />
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.pb20,
  },
  logOutStyle: {
    ...styles.ml15,
  },
  settingsContainer: {
    ...styles.mt15,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  userImage: {
    width: moderateScale(130),
    height: moderateScale(130),
    borderRadius: moderateScale(65),
    ...styles.selfCenter,
  },
  vipContainerStyle: {
    width: '100%',
    ...styles.mv20,
    ...styles.pv25,
    ...styles.rowCenter,
    ...styles.flexCenter,
  },
  getVipBtn: {
    ...styles.ph15,
    ...styles.pv10,
    ...styles.itemsCenter,
    ...styles.selfStart,
    backgroundColor: commonColor.white,
    borderRadius: moderateScale(18),
  },
});
