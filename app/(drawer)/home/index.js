import { Text, View, StyleSheet } from "react-native";
import { Drawer } from "../_layout";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link } from "expo-router";

export default function Page() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>Index page of Home Drawer</Text>
        <Link href={"/home/next-page"} style={{ marginTop: 16, fontSize: 18 }}>
            <Text style={{ fontWeight: "bold" }}>Go To Next Page</Text>
        </Link>
      </View>
    </>
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