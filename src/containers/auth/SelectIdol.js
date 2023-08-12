import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {useSelector} from 'react-redux';

// Local import
import EHeader from '../../components/common/EHeader';
import ESafeAreaView from '../../components/common/ESafeAreaView';
import EText from '../../components/common/EText';
import EButton from '../../components/common/EButton';
import {idolData} from '../../api/constant';
import {moderateScale} from '../../common/constants';
import {styles} from '../../themes';
import {StackNav} from '../../navigation/NavigationKeys';

export default function SelectIdol({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const [selectedIdol, setSelectedIdol] = React.useState('');
  const [extraData, setExtraData] = React.useState(false);

  const onPressGallery = id => {
    setSelectedIdol(id);
    setExtraData(!extraData);
  };

  const onPressContinue = () => navigation.navigate(StackNav.SetPin);

  const RenderImageComponent = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressGallery(item.id)}
        style={[
          localStyles.imageContainer,
          {
            borderColor:
              selectedIdol === item.id ? colors.primary5 : colors.bColor,
          },
        ]}>
        {item?.icon}
        <EText
          type="S18"
          color={selectedIdol === item.id ? colors.primary5 : colors.textColor}>
          {item?.title}
        </EText>
      </TouchableOpacity>
    );
  };

  return (
    <ESafeAreaView>
      <EHeader title={strings.addYourBestPhotos} />
      <FlashList
        data={idolData}
        extraData={extraData}
        renderItem={RenderImageComponent}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        estimatedItemSize={4}
        ListHeaderComponent={
          <EText type="S18">{strings.addYourBestPhotosDesc}</EText>
        }
        ListHeaderComponentStyle={styles.mb15}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={localStyles.root}
      />
      <View style={localStyles.btnContainer}>
        <EButton
          type={'S16'}
          title={strings.continue}
          color={colors.white}
          onPress={onPressContinue}
        />
      </View>
    </ESafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.flex,
  },
  imageContainer: {
    width: '90%',
    height: moderateScale(150),
    borderRadius: moderateScale(30),
    borderWidth: moderateScale(1),
    ...styles.m10,
    ...styles.center,
  },
  btnContainer: {
    ...styles.ph20,
    ...styles.pv10,
  },
});
