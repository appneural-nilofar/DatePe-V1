import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => (
  <View style={styles.seekbarView}>
    <View style={styles.whiteFill} />
    <View style={[styles.redFill, { width: `${(progress + 1) * 50}%` }]} />
  </View>
);

const Chip = ({ label, selected, onPress }) => (
  <TouchableOpacity
    style={[styles.chip, selected && styles.selectedChip]}
    onPress={onPress}
  >
    <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
  </TouchableOpacity>
);

  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [prefPronouns, setPrefPronouns] = useState(null);
  const [myPrefPronouns, setMyPrefPronouns] = useState(null);

 useEffect(() => {
    (async () => {
      try {
        const t = await getAsyncStorageData(ACCESS_TOKEN);
        setToken(t);

        axios
          .get('http://43.205.239.3:3001/api/v1/me/pronouns', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then(response => {
            console.log(response.data);
            setData(response.data);
            setMyPrefPronouns(response.data.data.preferenceIds);
            // navigation.navigate('s10');
          })
          .catch(error => {
            Alert.alert('Sorry, ');
            setMyPrefPronouns([]);
            console.error('Error fetching data:', error);
          });

        axios
          .get('http://43.205.239.3:3001/api/v1/preference/pronouns', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then(response => {
            console.log(response.data);
            setData(response.data);
            setPrefPronouns(response.data.data);
            // navigation.navigate('s10');
          })
          .catch(error => {
            setPrefPronouns([]);
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
        'http://43.205.239.3:3001/api/v1/me/pronouns',
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
      .then(async response => {
        console.log(response.data);
        // setData(response.data);
        axios
          .get('http://43.205.239.3:3001/api/v1/me/pronouns', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then(response => {
            console.log(response.data);
            setData(response.data);
            setMyPrefPronouns(response.data.data.preferenceIds);
            // navigation.navigate('s10');
          })
          .catch(error => {
            setMyPrefPronouns([]);
            Alert.alert('Sorry, ');
            console.error('Error fetching data:', error);
          });
        // navigation.navigate('s10');
      })
      .catch(error => {
        Alert.alert('Sorry, ');
        console.error('Error fetching data:', error);
      });
  };
const S14 = ({navigation}) => {
  const chipData = [
    { label: "Long-term", value: "Long-term" },
    { label: "Short-term", value: "Short-term" },
    { label: "Serious", value: "Serious" },
    { label: "Casual", value: "Casual" },
    { label: "Settle", value: "Settle" },
    { label: "Unsure", value: "Unsure" },
    { label: "Friends", value: "Friends" },
    { label: "Community", value: "Community" },
  ];

  const [selectedChip, setSelectedChip] = useState(null);
  const [progress, setProgress] = useState(0.3);
  const [textInputValue, setTextInputValue] = useState('');

  const handleChipPress = (chip) => {
    setSelectedChip(chip === selectedChip ? null : chip);
    setTextInputValue('');
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />

      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Text style={[styles.heading, { marginTop: '15%' }]}>What are you</Text>
          <Text style={styles.heading}>looking for?</Text>
        </View>

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTextInputValue(text)}
          value={textInputValue || selectedChip}
          placeholderTextColor="white"
          editable={false}
        />
        
        <Text style={[styles.helperText, { marginBottom: '15%', marginRight: '20%', }]}>There are no rules, find your own community</Text>

        <View style={styles.chipGroup} onPress={() => {
          {
            navigation.navigate('s12');
          }
        }}>
          {chipData.map(chip => (
            <Chip
              key={chip.value}
              label={chip.label}
              selected={selectedChip === chip.value}
              onPress={() => handleChipPress(chip.value)}
            />
          ))}
        </View>
        <Button
          style={[styles.nextbutton]}
          // icon="camera"
          mode="contained"
          onPress={() => {
            {
              navigation.navigate('s15');
            }
          }}
        >
          next
        </Button>
        <View style={styles.footer}>
          <Text style={styles.footerText}>DatePe</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: '12%',
  },
  mainContainer: {
    flex: 1,
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
    backgroundColor: '#F54848',
    position: 'absolute',
    left: 5,
    top: 5,
    bottom: 5,
    right: 5,
    borderRadius: 15,
  },
  chipGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  chip: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  selectedChip: {
    backgroundColor: '#487167',
    borderWidth: 0,
  },
  label: {
    color: 'white',
  },
  selectedLabel: {
    color: 'white',
  },
  helperText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 8,
    paddingTop: '5%',
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
  headingContainer: {
    alignItems: 'flex-start',
    marginBottom: '10%',
  },
  heading: {
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'left',
  },
  textInput: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 8,
    marginBottom: 16,
    color: 'white',
  },
});

export default S14;