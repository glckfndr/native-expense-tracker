import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/GlobalStyles";

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSummary = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.amount}>${expensesSummary.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 4,
  },
  period: {
    fontWeight: "600",
  },
  amount: {
    fontWeight: "600",
  },
});
