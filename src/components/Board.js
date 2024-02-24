import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import { Square } from "./"

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [playerNumber, setPlayerNumber] = useState(1)
  const [winner, setWinner] = useState(null)

  const validateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    lines.forEach((line) => {
      if (
        squares[line[0]] !== null &&
        squares[line[0]] === squares[line[1]] &&
        squares[line[0]] === squares[line[2]]
      ) {
        setWinner(squares[line[0]])
      }
    })
  }

  const checkDraw = () => {
    for(sq of squares){
      if(sq == null){
        return
      }
    }
    setWinner('draw')
  }

  const handlePress = (squareNumber) => {
    if (squares[squareNumber] === null) {
      const newSquares = [...squares]
      newSquares[squareNumber] = playerNumber === 1 ? "X" : "O"
      setSquares(newSquares)
      setPlayerNumber(playerNumber === 1 ? 2 : 1)
    }
  }

  const onPressResetButton = () => {
    setSquares(Array(9).fill(null))
    setWinner(null)
    setPlayerNumber(1)
  }

  useEffect(() => {
    validateWinner()
    checkDraw()
  }, [squares])

  const onModalClose = () => {
    setWinner(null)
  }

  const onPressNewGame = () => {
    onModalClose()
    onPressResetButton()
  }

  return (
    <View style={styles.boardContainerStyle}>
      <Text style={styles.turnStyle}>
        {playerNumber === 1 ? 'X' : 'O'} Turn
      </Text>
      <View style={styles.boardStyle}>
        <View style={styles.eachRowStyle}>
          {new Array(3).fill(null).map((item, index) => (
            <Square 
              squareNumber={index} 
              onPress={handlePress} 
              value={squares[index]} 
              middleRowFlag={false} 
              middleColFlag={index === 1 ? true : false} />
          ))}
        </View>
        <View style={styles.eachRowStyle}>
          {new Array(3).fill(null).map((item, index) => (
            <Square 
              squareNumber={index + 3} 
              onPress={handlePress} 
              value={squares[index + 3]} 
              middleRowFlag={true} 
              middleColFlag={index === 1 ? true : false} />
          ))}
        </View>
        <View style={styles.eachRowStyle}>
          {new Array(3).fill(null).map((item, index) => (
            <Square 
              squareNumber={index + 6} 
              onPress={handlePress} 
              value={squares[index + 6]} 
              middleRowFlag={false} 
              middleColFlag={index === 1 ? true : false} />
          ))}
        </View>
      </View>
      <Pressable
        onPress={onPressResetButton}
        style={({ pressed }) => [{
          backgroundColor: pressed ? "#222" : "#4db6ac",
        },
        styles.customButton1,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ color: pressed ? "#4db6ac" : "#222", textAlign: 'center', fontSize: 27 }}>
            Reset
          </Text>
        )}
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={winner !== null}
        onRequestClose={onModalClose}
      >
        <View style={styles.modalViewContainer}>
          <View style={styles.modalView}>
            <Text style={styles.messageStyle}>
              {winner === 'draw' ? 'Draw!' : `${winner} is the Winner!`}
            </Text>
            <Pressable
              onPress={onPressNewGame}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#222" : "#4db6ac",
                },
                styles.customButton,
              ]}
            >
              {({ pressed }) => (
                <Text style={{ color: pressed ? "#4db6ac" : "#222", fontSize: 20 }}>
                  New Game
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  boardContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  eachRowStyle: {
    flexDirection: 'row'
  },
  turnStyle: {
    color: '#f7fbf5',
    fontSize: 25,
  },
  messageStyle: {
    color: '#f7fbf5',
    fontSize: 30,
  },
  boardStyle: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
  },
  modalViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalView: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 20,
    borderRadius: 10,
  },
  customButton1: {
    marginTop: 100,
    padding: 15,
    borderRadius: 10,
    marginBottom: 50
  },
  customButton: {
    marginTop: 30,
    padding: 14,
    borderRadius: 10
  },
})

export default Board
