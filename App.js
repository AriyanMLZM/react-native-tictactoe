import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { MainPage } from './src/screens'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <MainPage />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App