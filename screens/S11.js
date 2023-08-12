import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ProgressBar, Chip, Button } from "react-native-paper";
import axios from "axios";
import { getAsyncStorageData } from "../src/utils/helpers";
import { ACCESS_TOKEN } from "../src/common/constants";

const S11 = ({ navigation }) => {
  const [selectedChips, setSelectedChips] = useState([]);
  const [progress, setProgress] = useState(0.5);
  const [selectedChoicesText, setSelectedChoicesText] = useState("");
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);
  const [prefPronouns, setPrefPronouns] = useState(null);
  const [myPrefPronouns, setMyPrefPronouns] = useState(null);

  const handleChipPress = (chip) => {
    if (selectedChips.includes(chip)) {
      setSelectedChips([]);
    } else {
      setSelectedChips([chip]);
    }
  };

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
          })
          .catch(error => {
            setMyPrefPronouns([]);
            Alert.alert('Sorry, ');
            console.error('Error fetching data:', error);
          });
      })
      .catch(error => {
        Alert.alert('Sorry, ');
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <Text style={[styles.heading, { marginTop: "15%" }]}>What are your</Text>
          <Text style={styles.heading}>preferred</Text>
          <Text style={styles.heading}>pronouns?</Text>
        </View>
        <View style={styles.chipGroup}>
          {chipData.map((chip) => (
            <Chip
              key={chip.id}
              label={chip.label}
              selected={selectedChips.includes(chip.label)}
              onPress={() => handleChipPress(chip.label)}
            />
          ))}
        </View>
        <Text style={[styles.helperText, { marginBottom: "15%", marginRight: "20%" }]}>
          You may pick more than one...
        </Text>
        <View style={styles.footer}>
          <Text style={[styles.helperText, { marginBottom: "15%", marginRight: "20%" }]}>
            You may pick more than one...
          </Text>
          <Text style={styles.footerText}>DatePe</Text>
          <Button
            style={styles.nextbutton}
            mode="contained"
            onPress={() => {
              navigation.navigate("s12");
            }}
          >
            next
          </Button>
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
    alignItems: "center", // Center-align horizontally
    flexWrap: "wrap",
  },
  chip: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 25,
    marginHorizontal: 6,
    marginVertical: 6,
  },
  selectedChip: {
    backgroundColor: "#487167",
    borderWidth: 0,
    paddingVertical: 11,
  },
  centeredChipGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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

export default S11;
