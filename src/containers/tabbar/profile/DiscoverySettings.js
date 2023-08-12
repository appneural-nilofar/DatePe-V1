import {StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';
import strings from '../../../i18n/strings';
import EText from '../../../components/common/EText';
import {moderateScale} from '../../../common/constants';
import {styles} from '../../../themes';
import {StackNav} from '../../../navigation/NavigationKeys';
import SliderComponent from '../../../components/homeComponent/SliderComponent';

export default function DiscoverySettings() {
  const color = useSelector(state => state.theme.theme);
  const [switchValue, setSwitchValue] = useState({
    switch1: false,
    switch2: false,
  });

  const discoverySettingsData = [
    {
      id: 1,
      title: strings.location,
      route: StackNav.location,
      value: 'Women Only',
    },
    {
      id: 2,
      title: 'Expand Search Area',
      switch: switchValue.switch1,
      isSwitch: true,
      onPress: () =>
        setSwitchValue({
          ...switchValue,
          switch1: switchValue.switch1 ? false : true,
        }),
    },
    {
      id: 3,
      title: 'Show Me',
      route: StackNav.ShowMe,
      value: 'Women Only',
    },
    {
      id: 4,
      title: 'Hide Last Seen',
      switch: switchValue.switch2,
      isSwitch: true,
      onPress: () =>
        setSwitchValue({
          ...switchValue,
          switch2: switchValue.switch2 ? false : true,
        }),
    },
  ];

  const onPressItem = item => {
    if (!!item.route) {
      navigation.navigate(item.route);
    }
  };

  const RenderDSItem = ({item, icon}) => {
    return (
      <TouchableOpacity
        disabled={item.isSwitch}
        onPress={() => onPressItem(item)}
        activeOpacity={item.switch ? 1 : 0.5}
        style={localStyles.settingsContainer}>
        <EText type="s18">{item.title}</EText>
        <View style={localStyles.rightContainer}>
          {!!item.value && (
            <EText type="s18" style={styles.mr10}>
              {item.value}
            </EText>
          )}
          {!!item.isSwitch ? (
            <Switch
              trackColor={{
                false: color.grayScale3,
                true: color.primary5,
              }}
              thumbColor={color.white}
              onValueChange={item.onPress}
              value={item.switch}
            />
          ) : (
            <Ionicons
              name="chevron-forward-outline"
              size={moderateScale(20)}
              color={color.dark ? color.white : color.darkColor}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const RenderFooter = () => {
    return (
      <View style={styles.mt20}>
        <SliderComponent
          startPoint={10}
          endPoint={22}
          maxValue={70}
          title={strings.age}
        />
        <SliderComponent
          startPoint={5}
          endPoint={30}
          maxValue={100}
          title={strings.distance}
        />
      </View>
    );
  };

  return (
    <ESafeAreaView>
      <EHeader title={strings.discoverySettings} />
      <FlashList
        data={discoverySettingsData}
        renderItem={RenderDSItem}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={RenderFooter}
        contentContainerStyle={styles.ph20}
        estimatedItemSize={10}
      />
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  settingsContainer: {
    ...styles.mt15,
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  rightContainer: {
    ...styles.flex,
    ...styles.rowEnd,
  },
});
