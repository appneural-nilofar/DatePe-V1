import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';

const S13 = () => {
  const [progress, setProgress] = useState(0.8); // Initial progress value (0 to 1)
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [sexOrientation, setSexOrientation] = useState(null);
  const [mySexOrientation, setMySexOrientation] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const t = await getAsyncStorageData(ACCESS_TOKEN);
        setToken(t);

        axios
          .get('http://43.205.239.3:3001/api/v1/me/sexual-orientation', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
            setMySexOrientation(response.data.data.preferenceIds);
            // navigation.navigate('s10');
          })
          .catch((error) => {
            setMySexOrientation([]);
            Alert.alert('Sorry, ');
            console.error('Error fetching data:', error);
          });

        axios
          .get('http://43.205.239.3:3001/api/v1/preference/sexual-orientation', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
            setSexOrientation(response.data.data);
            // navigation.navigate('s10');
          })
          .catch((error) => {
            setSexOrientation([]);
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
        'http://43.205.239.3:3001/api/v1/me/sexual-orientation',
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
          .get('http://43.205.239.3:3001/api/v1/me/sexual-orientation', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
            setMySexOrientation(response.data.data.preferenceIds);
            // navigation.navigate('s10');
          })
          .catch((error) => {
            setMySexOrientation([]);
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


  const sexualOrientationData = [
    'Straight',
    'Gay',
    'Lesbian',
    'Bisexual',
    'Pansexual',
    'Queer',
    'Bicurious',
    'Aromantic',
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItemSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      if (selectedItems.length < 3) {
        setSelectedItems([...selectedItems, item]);
      }
    }
  };

  const isItemSelected = (item) => selectedItems.includes(item);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => toggleItemSelection(item)}
      style={[
        styles.item,
        {
          backgroundColor: isItemSelected(item) ? 'transparent' : 'black', // Set the background color to black when not selected
        },
      ]}
    >
      <Text style={{ color: isItemSelected(item) ? 'white' : 'grey', fontFamily: 'Poppins', fontWeight: isItemSelected(item) ? 'bold' : '300' }}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <View style={styles.seekbarView}>
          <View style={styles.whiteFill} />
          <View style={[styles.redFill, { width: `${(progress + 0.1) * 50}%` }]} />
        </View>
        <Text style={[styles.nameText, { marginTop: '15%' }]}>What's your sexual orientation?</Text>
        <FlatList
          data={sexualOrientationData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.listContainer}
        />
        <View style={[styles.inputContainer]}>
          <TextInput
            style={[styles.inputField, { borderBottomColor: 'grey', borderBottomWidth: 1 }]}
          />
          <Text style={[styles.infoText, { marginBottom: '15%', fontFamily: 'Arial', fontWeight: '300' }]}>
            You can pick up to three
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>DatePe</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: StatusBar.currentHeight || 20,
    padding: '12%',
  },
  seekbarView: {
    height: 30,
    width: '108%',
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  whiteFill: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: '50%',
  },
  redFill: {
    height: '70%',
    backgroundColor: '#DA4949',
    position: 'absolute',
    left: 5,
    top: 5,
    bottom: 5,
    right: 5,
    borderRadius: 15,
  },
  nameText: {
    color: 'white',
    fontSize: 30,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  listContainer: {
    marginTop: 20,
  },
  item: {
    paddingVertical: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputField: {
    height: 40,
    color: 'white',
    paddingHorizontal: 10,
  },
  infoText: {
    color: 'grey',
    fontSize: 16,
    marginTop: 5,
  },
    footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default S13;
