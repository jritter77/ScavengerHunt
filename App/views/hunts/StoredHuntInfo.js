import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import { backgroundColor, Styles, ThemeContext } from "../../Styles";
import ProgressBar from "../../components/ProgressBar";
import StandardButton from "../../components/StandardButton";
import Rating from "../../components/Rating";
import { downloadHunt, getAvgRating, unpublishHunt } from "../../models/hunts";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { CustomAlert, getData } from "../../Methods";

// Stored Hunt Info View
const StoredHuntInfo = ({ navigation, route }) => {
  const [user, setUser] = React.useState({});
  const { _id, authorId, ratings, title, description } = route.params.hunt;
  const theme = React.useContext(ThemeContext);

  // Download Handler
  const handleDownload = async () => {
    const newHunt = await downloadHunt(_id);
    navigation.reset({
      index: 0,
      routes: [{ name: "Hunts" }, { name: "MyHunts" }],
    });
    navigation.navigate("HuntStack", {
      screen: "LocalHuntInfo",
      hunt: newHunt,
    });
  };

  // Unpublish Handler
  const handleUnpublish = async () => {
    const result = await unpublishHunt(_id);
    navigation.reset({
      index: 0,
      routes: [{ name: "Hunts" }, { name: "FindHunts" }],
    });
  };

  // Effect hook to fetch user object
  React.useEffect(() => {
    const getUser = async () => {
      setUser(await getData("user"));
    };

    getUser();
  }, []);

  return (
    <ScrollView
      style={theme.StandardStyles.scrollContainer}
      contentContainerStyle={theme.StandardStyles.scrollContainerContent}
    >
      <Text
        style={{
          ...styles.title,
          backgroundColor: theme.inputBgColor,
          color: theme.textColor,
          borderColor: theme.inputBorderColor,
        }}
      >
        {title}
      </Text>
      <Rating
        rating={getAvgRating(ratings).toFixed(1)}
        size={40}
        backgroundColor={theme.backgroundColor}
      />
      <Text
        style={{
          ...styles.description,
          backgroundColor: theme.inputBgColor,
          color: theme.textColor,
          borderColor: theme.inputBorderColor,
        }}
      >
        {description}
      </Text>
      <StandardButton title="Download Hunt" onPress={handleDownload} />
      <StandardButton
        title="Rate Hunt"
        onPress={() => navigation.navigate("RateHunt")}
      />
      {user.id === authorId && (
        <StandardButton
          title="Unpublish Hunt"
          onPress={() =>
            CustomAlert(
              "Unpublish Hunt",
              "Are you sure you would like to unpublish this hunt?",
              handleUnpublish
            )
          }
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
    fontSize: 20,
    marginBottom: "5%",
    textAlign: "center",
    fontWeight: "bold",
    padding: "5%",
    marginTop: "10%",
  },
  description: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
    minHeight: 64,
    fontSize: 20,
    marginBottom: "5%",
    padding: "5%",
    textAlign: "left",
  },
  ratingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: "5%",
  },
});

export default StoredHuntInfo;
