import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { GlobalStyles } from "../constants/GlobalStyles";

export default function IconButton({ iconName, size, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 24,
    backgroundColor: "green",
    padding: 4,
    marginRight: 10,
  },
  pressed: { opacity: 0.5 },
});
