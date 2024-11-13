import { Text, StyleSheet, View } from "react-native";

export default function Page() {
  return (
    <View 
      style={styles.container}
    >
      <Text style={{ fontSize: 24 }}>Index page of Settings Drawer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});