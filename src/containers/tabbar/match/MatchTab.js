// Library import
import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';

// Custom imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import {
  FilterDark,
  FilterLight,
  Search_Dark,
  Search_Light,
  TabLogo,
} from '../../../assets/svgs';
import {styles} from '../../../themes';
import EHeader from '../../../components/common/EHeader';
import strings from '../../../i18n/strings';
import {StackNav} from '../../../navigation/NavigationKeys';
import {newMatchData, yourMatchData} from '../../../api/constant';
import DatingCardComponent from '../../../components/matchComponent/DatingCardComponent';
import SubHeader from '../../../components/SubHeader';
import YourMatchComponent from '../../../components/matchComponent/YourMatchComponent';

export default function MatchTab({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const [extraData, setExtraData] = useState(true);

  useEffect(() => {
    setExtraData(!extraData);
  }, [colors]);

  const onPressSearch = () => navigation.navigate(StackNav.Search);
  const onPressNewMatch = () => navigation.navigate(StackNav.NewMatch);

  const renderItem = ({item, index}) => {
    return <DatingCardComponent item={item} index={index} />;
  };

  const renderItemYourMatch = ({item, index}) => {
    return <YourMatchComponent item={item} index={index} />;
  };

  const RightIcon = useMemo(() => {
    return (
      <View style={styles.rowCenter}>
        <TouchableOpacity onPress={onPressSearch}>
          {colors.dark ? <Search_Dark /> : <Search_Light />}
        </TouchableOpacity>
        <TouchableOpacity style={styles.ph10}>
          {colors.dark ? <FilterDark /> : <FilterLight />}
        </TouchableOpacity>
      </View>
    );
  }, []);

  const LeftIcon = useMemo(() => {
    return (
      <View style={styles.pr10}>
        <TabLogo />
      </View>
    );
  }, []);

  return (
    <ESafeAreaView>
      <EHeader
        isHideBack={true}
        title={strings.favorites}
        isLeftIcon={LeftIcon}
        rightIcon={RightIcon}
      />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.ph20}>
          <SubHeader
            title1={strings.newMatch}
            title2={strings.seeAll}
            onPressSeeAll={onPressNewMatch}
          />
        </View>
        <FlashList
          data={newMatchData}
          extraData={extraData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          horizontal
          contentContainerStyle={localStyles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
        <View style={styles.ph20}>
          <SubHeader title1={strings.yourMatch} title2={strings.seeAll} />
        </View>
        <FlashList
          data={yourMatchData}
          extraData={extraData}
          renderItem={renderItemYourMatch}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          horizontal
          contentContainerStyle={localStyles.contentContainerStyle}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
      </ScrollView>
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  mainContainer: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.mt10,
    width: '100%',
  },
  contentContainerStyle: {
    ...styles.pb10,
    ...styles.ph20,
  },
  subHeader: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
  },
});
