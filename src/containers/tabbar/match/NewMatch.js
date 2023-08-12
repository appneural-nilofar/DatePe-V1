import {TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {FlashList} from '@shopify/flash-list';

// Custom imports
import ESafeAreaView from '../../../components/common/ESafeAreaView';
import EHeader from '../../../components/common/EHeader';
import strings from '../../../i18n/strings';
import {Search_Dark, Search_Light} from '../../../assets/svgs';
import {styles} from '../../../themes';
import {newMatchData} from '../../../api/constant';
import NewMatchCardComponent from '../../../components/matchComponent/NewMatchCardComponent';
import {StackNav} from '../../../navigation/NavigationKeys';

export default function NewMatch({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const onPressSearch = () => navigation.navigate(StackNav.Search);

  const LeftIcon = useMemo(() => {
    return (
      <View style={styles.pr10}>
        <TouchableOpacity onPress={onPressSearch}>
          {colors.dark ? <Search_Dark /> : <Search_Light />}
        </TouchableOpacity>
      </View>
    );
  }, []);

  const renderItemNewMatch = ({item, index}) => {
    return <NewMatchCardComponent item={item} index={index} />;
  };

  return (
    <ESafeAreaView>
      <EHeader title={strings.newMatch} rightIcon={LeftIcon} />
      <FlashList
        data={newMatchData}
        renderItem={renderItemNewMatch}
        keyExtractor={(item, index) => index.toString()}
        estimatedItemSize={10}
        numColumns={2}
        contentContainerStyle={styles.ph20}
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </ESafeAreaView>
  );
}
