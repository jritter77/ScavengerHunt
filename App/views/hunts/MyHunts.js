import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles } from "../../Styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StoredHunt from "../../components/StoredHunt";
import LocalHunt from "../../components/LocalHunt";
import { getData } from "../../Methods";

const MyHunts = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [hunts, setHunts] = React.useState([]);

  async function handleSubmit() {
    const localHunts = await getData("hunts");
    const filteredHunts = {};

    for (let hunt in localHunts) {
      if (
        localHunts[hunt].title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        localHunts[hunt].description
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        filteredHunts[hunt] = localHunts[hunt];
      }
    }

    setHunts(filteredHunts);
  }

  function populateHunts() {
    const huntObjs = [];

    for (let hunt in hunts) {
      huntObjs.push(
        <LocalHunt
          key={hunts[hunt]._id}
          hunt={hunts[hunt]}
          setHunts={setHunts}
        />
      );
    }

    return huntObjs;
  }

  React.useEffect(() => {
    async function fetchData() {
      const localHunts = await getData("hunts");
      if (localHunts) {
        setHunts(localHunts);
      }
    }

    fetchData();
  }, []);

  return (
    <ScrollView
      style={Styles.StandardStyles.scrollContainer}
      contentContainerStyle={Styles.StandardStyles.scrollContainerContent}
    >
      <TextInput
        style={styles.search}
        onChangeText={setSearchTerm}
        placeholder={"Search"}
      />
      <StandardButton title="Search" onPress={() => handleSubmit()} />
      <View style={styles.huntsContainer}>{populateHunts()}</View>
      <StandardButton
        title={"Show More"}
        onPress={() => console.log("Show More!")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  huntsContainer: {
    width: "100%",
    alignItems: "center",
  },
  search: {
    width: "90%",
    backgroundColor: "white",
    padding: "5%",
    fontSize: 20,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
    marginTop: "5%",
  },
});

export default MyHunts;
