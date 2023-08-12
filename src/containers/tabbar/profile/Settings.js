import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Custom Imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';
import strings from '../../../i18n/strings';
import {moderateScale} from '../../../common/constants';
import {styles} from '../../../themes';
import EText from '../../../components/common/EText';
import {settingsData} from '../../../api/constant';

export default function Settings({navigation}) {
  const color = useSelector(state => state.theme.theme);
  const language = useSelector(state => state.profile.language);
  const [extraData, setExtraData] = React.useState(false);

  useEffect(() => {
    setExtraData(!extraData);
  }, [language]);

  const onPressItem = item => {
    if (!!item.route) {
      navigation.navigate(item.route);
    }
  };

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        style={localStyles.settingsContainer}>
        {item.icon}
        <EText type="s18" style={styles.ml15}>
          {item.title}
        </EText>
        <View style={localStyles.rightContainer}>
          {!!item.value && (
            <EText type="s18" style={styles.mr10}>
              {language}
            </EText>
          )}
          <Ionicons
            name="chevron-forward-outline"
            size={moderateScale(20)}
            color={color.dark ? color.white : color.darkColor}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ESafeAreaView>
      <EHeader title={strings.settings} />
      <FlashList
        data={settingsData}
        renderItem={RenderItem}
        extraData={extraData}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={10}
        contentContainerStyle={styles.ph20}
        showsVerticalScrollIndicator={false}
        bounces={false}
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
