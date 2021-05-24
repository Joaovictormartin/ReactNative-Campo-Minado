import React from 'react';
import {View, Modal, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default  props => {
  const {onCancel, isVisible, onLevelSelected} = props;
  return (
    <Modal
      onRequestClose={onCancel}
      visible={isVisible}
      animationType='slide'
      transparent={true}
      >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>

          <TouchableOpacity
            style={[styles.button, styles.bgEasy]}
            onPress={() => onLevelSelected(0.1)}>
            <Text style={styles.buttonLabel}>Fácil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.bgNormal]}
            onPress={() => onLevelSelected(0.2)}>
            <Text style={styles.buttonLabel}>Intermediário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.bgHard]}
            onPress={() => onLevelSelected(0.3)}>
            <Text style={styles.buttonLabel}>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold'
  },
  button: {
    width: 150,
    marginTop:  10,
    padding: 5,
  },
  bgEasy: {
    backgroundColor: '#49b65d'
  },
  bgNormal: {
    backgroundColor: '#2765F7'
  },
  bgHard: {
    backgroundColor: '#F26337'
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
