import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { backgroundColor, Styles } from "../../Styles";
import ProgressBar from "../../components/ProgressBar";
import StandardButton from "../../components/StandardButton";
import Rating from "../../components/Rating";
import { downloadHunt, getAvgRating, unpublishHunt } from "../../models/hunts";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { getData } from "../../Methods";

const StoredHuntInfo = ({ navigation, route }) => {
  const [user, setUser] = React.useState({});
  const { _id, authorId, ratings, title, description } = route.params.hunt;


  const handleDownload = async () => {
    const newHunt = await downloadHunt(_id);
    console.log('newhunt:', newHunt)
    navigation.reset({
      index: 0, 
      routes: [
        {name: 'Hunts'}, 
        {name: 'MyHunts'}, 
      ]
    });
    navigation.navigate('HuntStack', {
      screen: 'LocalHuntInfo', 
      hunt: newHunt,
  });
  };

  const handleUnpublish = async () => {
    const result = await unpublishHunt(_id);
    navigation.reset({
      index: 0, 
      routes: [
        {name: 'Hunts'}, 
        {name: 'FindHunts'}, 
      ]
    });
  }

  React.useEffect(() => {
    const getUser = async () => {
      setUser(await getData('user'));
    }

    getUser();
  }, [])

  return (
    <ScrollView
      style={Styles.StandardStyles.scrollContainer}
      contentContainerStyle={Styles.StandardStyles.scrollContainerContent}
    >
      <Text style={styles.title}>{title}</Text>
      <Rating rating={getAvgRating(ratings)} size={40} backgroundColor={backgroundColor} />
      <Text style={styles.description}>{description}</Text>
      <StandardButton title="Download Hunt" onPress={handleDownload} />
      <StandardButton
        title="Rate Hunt"
        onPress={() => navigation.navigate('RateHunt')}
      />
      {user.id === authorId && <StandardButton
        title="Unpublish Hunt"
        onPress={handleUnpublish}
      />}
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
  },
  description: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
    minHeight: 64,
    fontSize: 20,
    marginBottom: "5%",
    padding: '5%',
    textAlign: "left",
  },
  ratingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: "5%",
  },
});

export default StoredHuntInfo;
