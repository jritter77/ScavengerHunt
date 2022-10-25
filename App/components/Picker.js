import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const Picker = ({ options, val, setVal }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{val}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: "5%",
    backgroundColor: "white",
    borderRadius: 5,
    padding: "5%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: "5%",
  },
  buttonOpen: {
    backgroundColor: "lightgrey",
  },
  option: {
    borderWidth: 2,
    padding: "10%",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Picker;
