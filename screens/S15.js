import * as React from 'react';
import { Text, StyleSheet, View, Image, Pressable, Alert } from 'react-native';
import { Border, Color, FontFamily } from '../GlobalStyles';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAsyncStorageData } from '../src/utils/helpers';
import { ACCESS_TOKEN } from '../src/common/constants';
import axios from 'axios';
import { Button, Chip } from 'react-native-paper';
// import ImagePicker from 'react-native-image-picker';

const S15 = ({ navigation }) => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [myPhoto1, setMyPhoto1] = useState(null);
  const [myPhoto2, setMyPhoto2] = useState(null);
  const [myPhoto3, setMyPhoto3] = useState(null);
  const [myPhoto4, setMyPhoto4] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const t = await getAsyncStorageData(ACCESS_TOKEN);
        setToken(t);

        axios
          .get('http://192.168.1.15:3001/api/v1/me/photos', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
            if(response.data.data?.photo1) {
              setMyPhoto1(response.data.data.photo1);
            }
            if(response.data.data?.photo2) {
              setMyPhoto2(response.data.data.photo2);
            }
            if(response.data.data?.photo3) {
              setMyPhoto3(response.data.data.photo3);
            }
            if(response.data.data?.photo4) {
              setMyPhoto4(response.data.data.photo4);
            }
            // navigation.navigate('s10');
          })
          .catch((error) => {
            // setMyLookingFor([]);
            Alert.alert('Sorry, ');
            console.error('Error fetching data:', error);
          });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  const handleEnterPress = async (preferenceId, select) => {
    console.log(preferenceId);
    let t = await getAsyncStorageData(ACCESS_TOKEN);
    setToken(t);

    axios
      .post(
        'http://192.168.1.15:3001/api/v1/me/looking-for',
        {
          preferenceId,
          set: select,
        },
        {
          headers: {
            Authorization: `Bearer ${t}`,
          },
        },
      )
      .then(async (response) => {
        console.log(response.data);
        // setData(response.data);
        axios
          .get('http://192.168.1.15:3001/api/v1/me/looking-for', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
            // setMyLookingFor(response.data.data.preferenceIds);
            // navigation.navigate('s10');
          })
          .catch((error) => {
            // setMyLookingFor([]);
            Alert.alert('Sorry, ');
            console.error('Error fetching data:', error);
          });
        // navigation.navigate('s10');
      })
      .catch((error) => {
        Alert.alert('Sorry, ');
        console.error('Error fetching data:', error);
      });
  };

  const handleChooseImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    // ImagePicker.showImagePicker(options, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error:', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button:', response.customButton);
    //   } else {
    //     const source = { uri: response.uri };
    //     setImageUri(source);
    //   }
    // });
  };

  const handleUploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri.uri,
        type: 'image/jpeg', // Replace with the correct mime type based on your image
        name: 'image.jpg',
      });

      const response = await axios.post('https://example.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };


  return (
    <View style={styles.s14PhotoUpload}>
      <Image
        style={styles.s14PhotoUploadChild}
        resizeMode="cover"
        source={require('../assets/group-4.png')}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupItem, styles.groupShadowBox]} />
      </View>
      <Text style={[styles.sayCheese, styles.sayCheeseFlexBox]}>
        Say cheese...
      </Text>
      <Pressable style={[styles.wrapper, styles.wrapperLayout]}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/vector-899.png')}
          onPress={() => {
            {
              navigation.navigate('s16');
            }
          }}
        />
      </Pressable>
      <View>
        <Image
          style={styles.s141PhotoUploadItem}
          resizeMode="cover"
          source={myPhoto1? myPhoto1: require('../assets/photo-upload.png')}
        />
        <Button title="Choose Image" onPress={handleChooseImage} >aa </Button>
        {myPhoto1 && (
          <Button title="Upload Image" onPress={handleUploadImage} />
        )}
      </View>

      <View>
        <Image
          style={styles.s142PhotoUploadItem}
          resizeMode="cover"
          source={myPhoto2? myPhoto2: require('../assets/photo-upload.png')}
        />
        {myPhoto2 && (
          <Button title="Upload Image" onPress={handleUploadImage} />
        )}
      </View>


      <View>
        <Image
          style={styles.s143PhotoUploadItem}
          resizeMode="cover"
          source={myPhoto3? myPhoto3: require('../assets/photo-upload.png')}
        />
        {myPhoto3 && (
          <Button title="Upload Image" onPress={handleUploadImage} />
        )}
      </View>

      <View>
        <Image
          style={styles.s144PhotoUploadItem}
          resizeMode="cover"
          source={myPhoto4? myPhoto4: require('../assets/photo-upload.png')}
        />
        {myPhoto4 && (
          <Button title="Upload Image" onPress={handleUploadImage} />
        )}
      </View>

      <Text
        style={[styles.showUsHow, styles.sayCheeseFlexBox]}
        onPress={() => {
          {
            navigation.navigate('s16');
          }
        }}
      >
        Show us how authentic you are
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: '50%',
    position: 'absolute',
  },
  wrapperLayout: {
    height: 22,
    position: 'absolute',
  },
  groupChildLayout: {
    height: 39,
    width: 326,
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: Border.br_7xl,
    position: 'absolute',
  },
  sayCheeseFlexBox: {
    textAlign: 'left',
    color: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    position: 'absolute',
  },
  time: {
    marginTop: -11,
    top: '50%',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    fontFamily: FontFamily.cairoBold,
    color: Color.whitesmoke,
    textAlign: 'center',
    left: 0,
    width: 54,
    position: 'absolute',
  },
  timeStyle: {
    top: 19,
    left: 43,
    width: 54,
    overflow: 'hidden',
  },
  border: {
    right: 2,
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#f9f9f9',
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: 13,
    top: 0,
    position: 'absolute',
  },
  capIcon: {
    top: 5,
    right: 0,
    width: 1,
    height: 4,
    opacity: 0.4,
    position: 'absolute',
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 3,
    height: 9,
    width: 21,
    backgroundColor: Color.whitesmoke,
    position: 'absolute',
  },
  battery: {
    top: 23,
    right: 33,
    width: 27,
    height: 13,
    position: 'absolute',
  },
  wifiIcon: {
    width: 19,
    height: 13,
  },
  cellularConnectionIcon: {
    width: 21,
    height: 13,
  },
  statusBar: {
    marginLeft: -214,
    width: 428,
    height: 58,
    top: 0,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 3,
    borderRadius: 100,
    backgroundColor: Color.systemColoursDefaultColorsSystemWhiteBlackLight,
    width: 134,
    height: 5,
  },
  s14PhotoUploadChild: {
    height: '1.94%',
    width: '18%',
    top: '95.25%',
    right: '41.11%',
    bottom: '2.81%',
    left: '40.89%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  groupChild: {
    height: 39,
    width: 326,
    backgroundColor: Color.whitesmoke,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 7,
    left: 6,
    backgroundColor: '#da4949',
    width: 245,
    height: 25,
  },
  rectangleParent: {
    top: 71,
    left: 51,
    position: 'absolute',
  },
  sayCheese: {
    top: 137,
    left: 59,
    fontSize: 30,
    fontFamily: FontFamily.poppinsRegular,
    width: 294,
    height: 107,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  wrapper: {
    left: 343,
    top: 613,
    width: 20,
  },
  s141PhotoUploadItem: {
    top: 257,
    left: 63,
    width: 100,
    height: 100,
    position: 'absolute',
  },
  s142PhotoUploadItem: {
    top: 257,
    left: 200,
    width: 100,
    height: 100,
    position: 'absolute',
  },
  s143PhotoUploadItem: {
    top: 400,
    left: 63,
    width: 100,
    height: 100,
    position: 'absolute',
  },
  s144PhotoUploadItem: {
    top: 400,
    left: 200,
    width: 100,
    height: 100,
    position: 'absolute',
  },
  showUsHow: {
    top: 607,
    left: 67,
    fontSize: 15,
    fontWeight: '200',
    fontFamily: FontFamily.poppinsExtralight,
    width: 310,
    height: 52,
  },
  s14PhotoUpload: {
    backgroundColor: '#292929',
    flex: 1,
    height: 926,
    overflow: 'hidden',
    width: '100%',
  },
});

export default S15;
