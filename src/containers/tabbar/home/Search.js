import {StyleSheet, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';

// Custom Imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';
import {styles} from '../../../themes';
import strings from '../../../i18n/strings';
import {homeData} from '../../../api/constant';
import SearchComponent from '../../../components/homeComponent/SearchComponent';
import NewMatchCardComponent from '../../../components/matchComponent/NewMatchCardComponent';
import RenderNullComponent from '../../../components/RenderNullComponent';

export default function Search({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const [extraData, setExtraData] = useState(true);
  const [search, setSearch] = useState('');
  const [faqData, setFaqData] = useState(homeData);

  useEffect(() => {
    filterData();
  }, [search]);

  const filterData = () => {
    if (!!search) {
      const filteredData = homeData.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
      setFaqData(filteredData);
    } else {
      setFaqData(homeData);
    }
  };

  useEffect(() => {
    setExtraData(!extraData);
  }, [colors]);

  const onSearchInput = useCallback(text => {
    setSearch(text);
  }, []);

  const renderItem = ({item, index}) => {
    return <NewMatchCardComponent item={item} index={index} />;
  };

  return (
    <ESafeAreaView>
      <EHeader title={strings.search} />
      <View style={[styles.mb10, styles.ph20]}>
        <SearchComponent search={search} onSearchInput={onSearchInput} />
      </View>
      {faqData.length ? (
        <FlashList
          data={faqData}
          extraData={extraData}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={10}
          contentContainerStyle={localStyles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <RenderNullComponent
          title1={strings.userNotFound}
          title2={strings.noUserFoundDesc}
        />
      )}
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  contentContainerStyle: {
    ...styles.ph20,
    ...styles.pb20,
  },
  subHeader: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
  },
});
