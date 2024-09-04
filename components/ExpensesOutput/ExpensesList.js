import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import ExpenseItem from "../ExpenseItem";

function renderExpense(itemData) {
  return (
    <ExpenseItem
      description={itemData.item.description}
      amount={itemData.item.amount}
      date={itemData.item.date}
      id={itemData.item.id}
    />
  );
}

export default function ExpensesList({ expenses }) {
  return (
    <View style={styles.container}>
      <FlatList data={expenses} renderItem={renderExpense} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
});
