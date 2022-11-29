import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles } from "../../Styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StoredHunt from "../../components/StoredHunt";
import LocalHunt from "../../components/LocalHunt";
import { getData } from "../../Methods";
import IconButton from "../../components/IconButton";
import { getUserHunts } from "../../models/hunts";

const MyHunts = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [hunts, setHunts] = React.useState([]);

  async function handleSubmit() {
    const localHunts = await getUserHunts();
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
        />
      );
    }

    return huntObjs;
  }

  React.useEffect(() => {
    async function fetchData() {
      const localHunts = await getUserHunts();
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
      <View style={styles.searchBar}>
        <TextInput
          style={styles.search}
          onChangeText={setSearchTerm}
          placeholder={"Search"}
        />
        <IconButton icon={require('../../assets/searchIcon.png')} onPress={handleSubmit} />
      </View>
      
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
    width: "70%",
    backgroundColor: "white",
    padding: "5%",
    fontSize: 20,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
    margin: "5%",
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center'
  }
});

export default MyHunts;
