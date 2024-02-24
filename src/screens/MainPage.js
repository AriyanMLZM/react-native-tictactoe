import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Board } from '../components'

const MainPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.gameTitle}>
        <Text style={styles.h1}>Tic Tac Toe</Text>
      </View>
      <Board />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1
  },
  h1: { 
    fontSize: 35,
    color: '#4db6ac'
  },
  gameTitle: {
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default MainPage
