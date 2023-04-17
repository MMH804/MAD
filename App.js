import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Board = () => {
  const [board, setBoard] = useState([
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', '.', ' ', '.', ' ', '.', ' ', '.'],
    ['.', ' ', '.', ' ', '.', ' ', '.', ' '],
    [' ', '.', ' ', '.', ' ', '.', ' ', '.'],
    ['.', ' ', '.', ' ', '.', ' ', '.', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ]);

  const isBlack = (row, col) => {
    return (row + col) % 2 === 1;
  };

  const getPieceColor = (isBlack) => {
    return isBlack ? '#a9a9a9' : '#fff';
  };

  const getTextColor = (isBlack) => {
    return isBlack ? '#fff' : '#000';
  };

  const renderSquare = (piece, row, col) => {
    const backgroundColor = getPieceColor(isBlack(row, col));
    const textColor = getTextColor(isBlack(row, col));

    return (
      <View style={[styles.square, { backgroundColor }]} key={`${row}${col}`}>
        <Text style={{ color: textColor }}>{piece}</Text>
      </View>
    );
  };

  const renderRow = (row, rowIndex) => {
    return (
      <View key={rowIndex} style={styles.row}>
        {row.map((piece, colIndex) => renderSquare(piece, rowIndex, colIndex))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {board.map((row, rowIndex) => renderRow(row, rowIndex))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  square: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default Board;
