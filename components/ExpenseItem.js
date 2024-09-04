import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import getFormatedDate from "../util/getFormatedDate";
import { GlobalStyles } from "../constants/GlobalStyles";

export default function ExpenseItem({ description, amount, date, id }) {
  return (
    <Pressable
      onPress={() => console.log(id)}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.container}>
        <View style={[styles.container, { width: "70%" }]}>
          <Text style={styles.baseText}>{description}</Text>
          <Text style={styles.baseText}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary400,
    padding: 3,
    marginTop: 3,
    borderRadius: 3,
  },
  amountContainer: {
    backgroundColor: "white",
    width: 60,
    borderRadius: 3,
    padding: 3,
  },
  baseText: { color: "white" },
  pressed: { backgroundColor: GlobalStyles.colors.gray700 },
  description: {},
  amount: { textAlign: "center" },
  date: {},
});
