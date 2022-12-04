import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StandardButton from "../../components/StandardButton";
import { Styles, ThemeContext } from "../../Styles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import StoredHunt from "../../components/StoredHunt";
import { getPublicHunts } from "../../models/hunts";
import IconButton from "../../components/IconButton";

const FindHunts = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [hunts, setHunts] = React.useState([]);
  const [limit, setLimit] = React.useState(5);

  const theme = React.useContext(ThemeContext);

  async function handleSubmit() {
    const result = await getPublicHunts(searchTerm, limit);
    setHunts(result);
  }

  function populateHunts() {
    let objs = [];

    for (let hunt of hunts) {
      objs.push(<StoredHunt key={hunt._id} hunt={hunt} />);
    }

    return objs;
  }

  React.useEffect(() => {
    async function fetchData() {
      setHunts(await getPublicHunts(searchTerm, limit));
    }

    fetchData();
  }, [limit]);

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={theme.StandardStyles.scrollContainerContent}
    >
      <View style={styles.searchBar}>
        <TextInput
          style={{
            ...styles.search,
            backgroundColor: theme.backgroundColor,
            color: theme.inputTextColor,
          }}
          onChangeText={setSearchTerm}
          placeholder={"Search"}
          placeholderTextColor={theme.inputTextColor}
        />
        <IconButton
          icon={require("../../assets/searchIcon.png")}
          onPress={handleSubmit}
        />
      </View>

      <View style={styles.huntsContainer}>{populateHunts()}</View>
      <StandardButton
        title={"Show More"}
        onPress={() => setLimit((oldState) => oldState + 5)}
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center",
  },
});

export default FindHunts;
