import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

const ProgressBar = ({ navigation }) => (
  <View style={styles.seekbarView}>
    <View style={styles.whiteFill} />
    <View style={[styles.redFill, { width: `${(progress + 0.3) * 50}%` }]} />
  </View>
);

const Chip = ({ label, selected, onPress }) => (
  <TouchableOpacity
    style={[styles.chip, selected && styles.selectedChip]}
    onPress={onPress}
  >
    <Text style={[styles.label, selected && styles.selectedLabel]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const S12 = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [sexPreferences, setSexPreferences] = useState(null);
  const [mySexPreferences, setMySexPreferences] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const t = await getAsyncStorageData(ACCESS_TOKEN);
        setToken(t);

        axios
          .get('http://43.205.239.3:3001/api/v1/me/sexual-preferences', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
            setMySexPreferences(response.data.data.preferenceIds);
            // navigation.navigate('s10');
          })
          .catch((error) => {
            setMySexPreferences([]);
            Alert.alert('Sorry, ');
            console.error('Error fetching data:', error);
          });

        axios
          .get('http://43.205.239.3:3001/api/v1/preference/sexual-preferences', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
            setSexPreferences(response.data.data);
            // navigation.navigate('s10');
          })
          .catch((error) => {
            setSexPreferences([]);
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
        'http://43.205.239.3:3001/api/v1/me/sexual-preferences',
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
          .get('http://43.205.239.3:3001/api/v1/me/sexual-preferences', {
            headers: {
              Authorization: `Bearer ${t}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setData(response.data);
            setMySexPreferences(response.data.data.preferenceIds);
            // navigation.navigate('s10');
          })
          .catch((error) => {
            setMySexPreferences([]);
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

  const [selectedChips, setSelectedChips] = useState([]);
  const [progress, setProgress] = useState(0.5); // Initial progress value (0 to 1)
  const [selectedChoicesText, setSelectedChoicesText] = useState("");

  const handleChipPress = (chip) => {
    if (selectedChips.includes(chip)) {
      setSelectedChips([]);
    } else {
      setSelectedChips([chip]);
    }
  };

  // Update the selectedChoicesText whenever selectedChips changes
  React.useEffect(() => {
    setSelectedChoicesText(selectedChips.join(", "));
  }, [selectedChips]);

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />

      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Text style={[styles.heading, { marginTop: "15%" }]}>
            What's your sexual
          </Text>
          <Text style={styles.heading}>preference?</Text>
        </View>
        <View style={styles.chipGroup}>
          <Chip
            label="they/them"
            selected={selectedChips.includes("they/them")}
            onPress={() => handleChipPress("they/them")}
          />
          <Chip
            label="She/Her"
            selected={selectedChips.includes("She/Her")}
            onPress={() => handleChipPress("She/Her")}
          />
        </View>
        <View style={styles.chipGroup}>
          <Chip
            label="He/Him"
            selected={selectedChips.includes("He/Him")}
            onPress={() => handleChipPress("He/Him")}
          />
          <Chip
            label="Other..."
            selected={selectedChips.includes("Other...")}
            onPress={() => handleChipPress("Other...")}
          />
        </View>
        <Button
        style={[styles.nextbutton]}
        // icon="camera"
        mode="contained"
        onPress={() => {
          {
            navigation.navigate('s13');
          }
        }}
      >
        next
      </Button>
        <TextInput
          placeholder="We will try our best to find a compatible match! "
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          style={styles.helperText}
        />
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
    backgroundColor: "black",
    justifyContent: "center",
    padding: "12%",
  },
  mainContainer: {
    flex: 1,
  },
  seekbarView: {
    height: 30,
    width: "108%",
    backgroundColor: "white",
    borderRadius: 30,
    overflow: "hidden",
    alignSelf: "center",
  },
  whiteFill: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: "50%",
  },
  redFill: {
    height: "70%",
    backgroundColor: "#DA4949",
    position: "absolute",
    left: 5,
    top: 5,
    bottom: 5,
    right: 5,
    borderRadius: 15,
  },
  chipGroup: {
    flexDirection: "row",
    marginBottom: 16,
  },
  chip: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 8,
  },
  selectedChip: {
    backgroundColor: "#487167",
    borderWidth: 0,
  },
  label: {
    color: "white",
  },
  selectedLabel: {
    color: "white",
  },
  helperText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 15,
    textAlign: "left",
    marginLeft: 8,
    paddingTop: "5%",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  headingContainer: {
    alignItems: "flex-start",
    marginBottom: "10%", // Adjust the margin as per your preference
  },
  heading: {
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "left",
  },
  inputField: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    color: "white",
    marginTop: 16,
    padding: 12,
    minHeight: 80,
    textAlignVertical: "top",
  },
});

export default S12;
