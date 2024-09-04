import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import getExpenses from "../services/getExpenses";
import { GlobalStyles } from "../constants/GlobalStyles";

export default function AllExpenses() {
  return (
    <View style={styles.allExpensesContainer}>
      <ExpensesOutput expenses={getExpenses()} expensesPeriod={"Total"} />
    </View>
  );
}

const styles = StyleSheet.create({
  allExpensesContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
