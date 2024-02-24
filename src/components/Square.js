import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"

const Square = ({ squareNumber, onPress, value, middleRowFlag, middleColFlag }) => {
  const handleOnPress = () => {
    onPress(squareNumber)
  }

  const setRowStyle = () => {
    if(middleRowFlag){
      return (
        {
          borderBottomStyle: 'solid',
          borderBottomColor: '#4db6ac',
          borderBottomWidth: 4,
          borderTopStyle: 'solid',
          borderTopColor: '#4db6ac',
          borderTopWidth: 4
        }
      )
    }
  }
  const setColStyle = () => {
    if(middleColFlag){
      return (
        { 
          borderLeftStyle: 'solid',
          borderLeftWidth: 4,
          borderLeftColor: '#4db6ac',
          borderRightStyle: 'solid',
          borderRightWidth: 4,
          borderRightColor: '#4db6ac',
        }
      )
    }
  }

  return (
    <TouchableOpacity style={styles.touchableArea} onPress={handleOnPress}>
      <View style={[styles.squareStyle, setRowStyle(), setColStyle()]}>
        <Text style={styles.textStyle}>{value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  squareStyle: {
    height: 110,
    width: 110,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 50,
    color: '#f7fbf5'
  },
  touchableArea: {},
})

export default Square
