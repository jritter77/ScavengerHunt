import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Styles, ThemeContext } from "../../Styles";
import Rater from "../../components/Rater";
import StandardButton from "../../components/StandardButton";
import { rateHunt } from "../../models/hunts";

// Rate Hunt View
const RateHunt = ({ navigation, route }) => {
  const [rating, setRating] = React.useState(1);
  const theme = React.useContext(ThemeContext);

  // Submit Handler
  const handleSubmit = async () => {
    const result = await rateHunt(route.params.hunt._id, { rating });

    navigation.reset({
      index: 0,
      routes: [{ name: "Hunts" }, { name: "FindHunts" }],
    });
    navigation.navigate("HuntStack", {
      screen: "StoredHuntInfo",
      hunt: result,
    });
  };

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={theme.StandardStyles.scrollContainerContent}
    >
      <Rater rating={rating} setRating={setRating} />
      <StandardButton title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  comment: {
    backgroundColor: "white",
    width: "80%",
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 20,
    padding: "5%",
  },
});

export default RateHunt;
