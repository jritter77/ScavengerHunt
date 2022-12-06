import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { ThemeContext } from "../Styles";

const Picker = ({ options, val, setVal }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const theme = React.useContext(ThemeContext);

  const PickerOption = ({ text, value }) => (
    <Pressable
      style={styles.option}
      onPress={() => {
        setVal(value);
        setModalVisible(!modalVisible);
      }}
    >
      <Text>{text}</Text>
    </Pressable>
  );

  const populateOptions = () => {
    const pickerOptions = [];

    for (let option of options) {
      pickerOptions.push(
        <PickerOption
          text={option.text}
          value={option.value}
          key={option.value}
        />
      );
    }

    return pickerOptions;
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>{populateOptions()}</View>
        </View>
      </Modal>

      <Pressable
        style={[
          { ...styles.button, backgroundColor: theme.backgroundColor },
          {
            ...styles.buttonOpen,
            backgroundColor: theme.inputBgColor,
            borderColor: theme.inputBorderColor,
          },
        ]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ ...styles.textStyle, color: theme.textColor }}>
          {val}
        </Text>
        <Text style={{ ...styles.symbol, color: theme.textColor }}>
          &#9660;
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: "5%",
    backgroundColor: "white",
    alignItems: "center",
    width: "70%",
  },
  button: {
    borderRadius: 5,
    padding: "2%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: "white",
    borderWidth: 1,
  },
  option: {
    borderWidth: 1,
    padding: "10%",
    width: "100%",
  },
  textStyle: {
    color: "black",
    textAlign: "left",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  symbol: {
    marginRight: "5%",
  },
});

export default Picker;
