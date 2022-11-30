import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles } from "../../Styles";
import ProgressBar from "../../components/ProgressBar";
import StandardButton from "../../components/StandardButton";
import {
  deleteLocalHunt,
  getHuntProgress,
  publishHunt,
} from "../../models/hunts";
import { getData } from "../../Methods";
import { ScrollView } from "react-native-gesture-handler";

const LocalHuntInfo = ({ navigation, route }) => {
  const { _id, title, description, authorId } = route.params.hunt;
  const [user, setUser] = React.useState({});

  const handleDelete = async () => {
    await deleteLocalHunt(_id);
    navigation.reset({
      index: 0, 
      routes: [
        {name: 'Hunts'}, 
        {name: 'MyHunts'}, 
      ]
    });
  };

  const handlePublish = async () => {
    const publishedHunt = await publishHunt(route.params.hunt);
    if (!publishedHunt) {
      return;
    }
    navigation.reset({
      index: 0, 
      routes: [
        {name: 'Hunts'}, 
        {name: 'FindHunts'}, 
      ]
    });
    navigation.navigate('HuntStack', {
      screen: 'StoredHuntInfo', 
      hunt: publishedHunt,
  });



  };

  React.useEffect(() => {
    const getUser = async () => {
      setUser(await getData("user"));
    };

    getUser();
  }, []);

  return (
    <ScrollView
      style={Styles.StandardStyles.scrollContainer}
      contentContainerStyle={Styles.StandardStyles.scrollContainerContent}
    >
      <Text style={styles.title}>{title}</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progress}>Progress:</Text>
        <ProgressBar
          value={getHuntProgress(route.params.hunt)}
          style={{ flex: 1 }}
        />
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.group}>Group</Text>
      <StandardButton
        title="Invite Friend"
        onPress={() => console.log("Invite Friend!")}
      />
      <StandardButton
        title="Start/Continue"
        onPress={() =>
          navigation.navigate("HuntStack", {
            screen: "ActiveHunt",
            hunt: route.params.hunt,
          })
        }
      />
      <StandardButton title="Delete Hunt" onPress={handleDelete} />
      {authorId === user.id && (
        <StandardButton title="Publish Hunt" onPress={handlePublish} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
    marginBottom: "5%",
  },
  title: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: "80%",
    fontSize: 20,
    marginBottom: "5%",
    textAlign: "center",
    padding: "5%",
    fontWeight: "bold",
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
    textAlign: "center",
  },
  group: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    width: "70%",
    fontSize: 20,
    marginBottom: "5%",
    textAlign: "center",
  },
  progress: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: "10%",
  },
});

export default LocalHuntInfo;
