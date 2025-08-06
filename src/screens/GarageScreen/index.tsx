import { View, Text } from "react-native";
import { styles } from "./style";
import CardView from "../../components/CardView";

export default function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <CardView />
      </View>
    </View>
  );
}
