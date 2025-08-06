import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./style";

export default function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}
