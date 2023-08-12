import React, {useState, useRef, useCallback, Fragment} from 'react';
import {StyleSheet, FlatList, Image, View, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {OnBoardingSlide} from '../api/constant';
import {deviceWidth, moderateScale} from '../common/constants';
import EButton from '../components/common/EButton';
import EText from '../components/common/EText';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';
import {styles} from '../themes';
import {setOnBoarding} from '../utils/asyncstorage';
import ESafeAreaView from '../components/common/ESafeAreaView';

const OnBoarding = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const _onViewableItemsChanged = useCallback(({viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index);
  }, []);
  const _viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const onPressRightArrow = async () => {
    if (currentIndex === 2) {
      await setOnBoarding(true);
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.Auth}],
      });
    } else {
      slideRef.current._listRef._scrollRef.scrollTo({
        x: deviceWidth * (currentIndex + 1),
      });
    }
  };

  const RenderOnboardingItem = useCallback(
    ({item, index}) => {
      return (
        <View style={localStyles.rendetItemConatiner}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={localStyles.imageStyle}
          />
          <View style={styles.mt30}>
            <EText type={'B30'} align={'center'}>
              {item.text}
            </EText>
          </View>
        </View>
      );
    },
    [OnBoardingSlide],
  );

  return (
    <ESafeAreaView style={styles.flex}>
      <FlatList
        data={OnBoardingSlide}
        ref={slideRef}
        renderItem={({item, index}) => (
          <RenderOnboardingItem item={item} index={index} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        horizontal
        onViewableItemsChanged={_onViewableItemsChanged}
        viewabilityConfig={_viewabilityConfig}
        pagingEnabled
      />
      <View style={styles.rowCenter}>
        {OnBoardingSlide.map((_, index) => (
          <View
            style={[
              localStyles.bottomIndicatorStyle,
              {
                width:
                  index !== currentIndex
                    ? moderateScale(10)
                    : moderateScale(20),
                backgroundColor:
                  index !== currentIndex ? colors.bColor : colors.primary5,
              },
            ]}
          />
        ))}
      </View>
      <EButton
        title={strings.next}
        containerStyle={localStyles.submitButton}
        type={'M18'}
        color={colors.white}
        onPress={onPressRightArrow}
      />
    </ESafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  submitButton: {
    ...styles.mt15,
    ...styles.mb10,
    ...styles.mh25,
  },
  rendetItemConatiner: {
    width: deviceWidth,
    ...styles.ph20,
    ...styles.center,
  },
  imageStyle: {
    height: '65%',
    width: deviceWidth - moderateScale(40),
    resizeMode: 'contain',
  },
  bottomIndicatorStyle: {
    height: moderateScale(10),
    ...styles.mt10,
    borderRadius: moderateScale(10),
    ...styles.mh5,
  },
  bottomStyle: {
    ...styles.pv10,
    ...styles.center,
    ...styles.ph20,
  },
});

export default OnBoarding;
