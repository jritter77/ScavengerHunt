import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemeContext } from "../Styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Picker from "./Picker";

// Clue Field Sub-Component
const ClueField = ({ id, setClueVals, setClueFields, clueObj }) => {
  const [clue, setClue] = React.useState(clueObj ? clueObj.clue : "");
  const [answer, setAnswer] = React.useState(clueObj ? clueObj.answer : "");

  const [pickerVal, setPickerVal] = React.useState(
    clueObj ? clueObj.type : "checkbox"
  );

  const theme = React.useContext(ThemeContext);

  const handleRemoveClue = () => {
    setClueFields((oldState) => {
      oldState.splice(
        oldState.findIndex((e) => e.props.id === id),
        1
      );
      return [...oldState];
    });
    setClueVals((oldState) => {
      delete oldState[id];
      return { ...oldState };
    });
  };

  // Effect hook for fields
  React.useEffect(() => {
    setClueVals((oldState) => {
      oldState[id] = { id, clue, answer, entry: "", type: pickerVal };
      return { ...oldState };
    });
  }, [clue, answer, pickerVal]);

  return (
    <View style={styles.clue}>
      <View style={styles.clueHeader}>
        <Text style={{ ...styles.text, color: theme.textColor }}>Type:</Text>
        <TouchableOpacity
          style={styles.removeClueBtn}
          onPress={handleRemoveClue}
        >
          <Text style={{ ...styles.removeClueText, color: theme.textColor }}>
            X
          </Text>
        </TouchableOpacity>
      </View>
      <Picker
        options={[
          { text: "checkbox", value: "checkbox" },
          { text: "text", value: "text" },
        ]}
        val={pickerVal}
        setVal={setPickerVal}
      />
      <Text style={{ ...styles.text, color: theme.textColor }}>Clue:</Text>
      <TextInput
        placeholder="clue"
        placeholderTextColor={theme.inputTextColor}
        onChangeText={setClue}
        value={clue}
        style={{
          ...styles.field,
          backgroundColor: theme.inputBgColor,
          color: theme.textColor,
          borderColor: theme.inputBorderColor,
        }}
      />
      {pickerVal === "text" && (
        <TextInput
          placeholder="answer"
          placeholderTextColor={theme.inputTextColor}
          onChangeText={setAnswer}
          value={answer}
          style={{
            ...styles.field,
            backgroundColor: theme.inputBgColor,
            color: theme.textColor,
            borderColor: theme.inputBorderColor,
          }}
        />
      )}
    </View>
  );
};

export default ClueField;

const styles = StyleSheet.create({
  field: {
    backgroundColor: "white",
    fontSize: 20,
    padding: "2%",
    borderWidth: 1,
    borderRadius: 5,
  },
  clue: {
    marginBottom: "5%",
    width: "70%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  feedback: {
    color: "red",
    fontSize: 20,
  },
  removeClueBtn: {},
  removeClueText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 4,
  },
  clueHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
