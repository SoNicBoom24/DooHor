import Navigator from "./src/navigation/Navigator";
import Login from "./src/screens/Login"

import Home from "./src/Add";
import { View } from "react-native";

export default function App() {
  return (
    // <Navigator />
    // <Login />
    <View style={{flex: 1}}>
      <Home />
    </View>

  );
}